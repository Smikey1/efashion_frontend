import {
  AppBar, Avatar, Box, Button, Container, Dialog, Divider, Fab, IconButton, Slide, Toolbar, Typography
} from "@material-ui/core";
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { Add, Close, Store } from '@material-ui/icons';
import axios from "axios";
import React, { Component } from 'react';
import BannerSlider from '../components/BannerSlider';
import GridView from '../components/GridView';
import HorizontalScroller from '../components/HorizontalScroller';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

class HomeFragment extends Component {

  state = {
    value: 0,
    categoryList: [],
    categoryName: "",
    productList: [],
    bannerList: [],
    addDialog: false,
    teams: [],
    selectedItemId: "",
    productImageUrlList: [],
    productName: "",
    productPrice: "",
    productType: "",
    productCategory: "",
    featureName: "",
    featureValue: "",
    productDescription: "",
  }

  // function to add product
  addProduct = () => {
    alert("hello")
    const productData = {
      productName: this.state.productName,
      productPrice: this.state.productPrice,
      productType: this.state.productType,
      productCategory: this.state.productCategory,
      featureName: this.state.featureName,
      featureValue: this.state.featureValue,
      productDescription: this.state.productDescription,
    }
    console.log(productData)
    // api to insert product
    axios.post("http://localhost:90/product/insert", productData)
      .then((res) => {
        console.log("product Added")
        alert("product Added")
      })
  }

  // function to get bannerList
  getBannerList = () => {
    // api to insert product
    axios.get("http://localhost:90/banner/get")
      .then((res) => {
        const imageList = res.data.data[0].bannerImageUrlList
        let bannerLst = []
        imageList.map(image => {
          bannerLst.push({ image })
        })
        this.setState({
          bannerList: bannerLst
        })
      
      })
  }

  // for text handler change
  textChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // select  handler for options
  selectChangeHandler = (e) => {
    this.setState({ categoryName: e.target.value })
  }

  // api to get category List
  componentDidMount() {
    this.getBannerList()
    axios.get("http://localhost:90/category/get")
      .then((res) => {

        this.setState({
          categoryList: res.data.data
        })
        console.log(res.data)
      })

    // api ko get all product
    axios.get("http://localhost:90/product/get")
      .then((res) => {

        this.setState({
          productList: res.data.data
        })
        console.log(res.data)
      })

  }
  // creating handle change
  handleChange = (event, newValue) => {
    this.setState({
      value: newValue
    });
  };
  render() {
    return (
      <Container maxWidth="md" fixed>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >

            {
              this.state.categoryList.map(category => {
                return (
                  <Tab icon={<CatagoryTab
                    icon={category.categoryImageUrl}
                    title={category.categoryName} />} />
                )
              })
            }

          </Tabs>
        </AppBar>
        <BannerSlider
          Images={this.state.bannerList}>

        </BannerSlider>
        <HorizontalScroller />
        <GridView />

        <Fab color="primary" aria-label="add"
          onClick={e => this.setState({ addDialog: true })}
          style={{ position: "fixed", bottom: "50px", right: "50px" }}>
          <Add />
        </Fab>
        <Dialog
          fullScreen
          open={this.state.addDialog}
          onClose={e => this.setState({
            addDialog: false
          })}
          TransitionComponent={Transition}
        >
          <AppBar sx={{ position: 'relative' }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={e => this.setState({
                  addDialog: false
                })}
                aria-label="close"
              >
                <Close />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                Add New Product
              </Typography>
              <Button autoFocus color="inherit"
                style={{ position: "absolute", right: "0px" }}
                onClick={e => this.setState({ addDialog: false })}>
                Save
              </Button>
            </Toolbar>

          </AppBar>

          <Divider />
          <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
              <div className="row justify-content-center align-items-center h-100">
                <div className="col-12 col-lg-9 col-xl-7">
                  <div className="card shadow-2-strong card-registration" style={{ borderRadius: '15px' }}>
                    <div className="card-body p-4 p-md-5">
                      <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Insert New Product</h3>
                      {/* <form> */}
                      <div className="row">
                        <div className="col-md-6 mb-4 pb-2">
                          <div className="form-outline">
                            <input type="text" name="productName" onChange={this.textChangeHandler}
                              value={this.state.productName} className="form-control form-control-lg" />
                            <label className="form-label" htmlFor="phoneNumber">Product Name</label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-4 pb-2">
                          <div className="form-outline">
                            <input type="text" name="productPrice" onChange={this.textChangeHandler} value={this.state.productPrice} className="form-control form-control-lg" />
                            <label className="form-label" htmlFor="phoneNumber">Product Price</label>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-4 pb-2">
                          <div className="form-outline">
                            <input type="text" name="featureName" onChange={this.textChangeHandler} value={this.state.featureName} className="form-control form-control-lg" />
                            <label className="form-label" htmlFor="emailAddress">Feature Name</label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-4 pb-2">
                          <div className="form-outline">
                            <input type="text" name="featureValue" onChange={this.textChangeHandler} value={this.state.featureValue} className="form-control form-control-lg" />
                            <label className="form-label" htmlFor="phoneNumber">Feature Value</label>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-4 pb-2">
                          <div className="form-outline">
                            <input type="text" name="productDescription" onChange={this.textChangeHandler} value={this.state.productDescription} className="form-control form-control-lg" />
                            <label className="form-label" >Product Description</label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-4 pb-2">
                          <div className="form-outline">
                            <input type="text" name="productType" onChange={this.textChangeHandler} value={this.state.productType} className="form-control form-control-lg" />
                            <label className="form-label" >Product Type</label>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-4 pb-2">
                          <label className="form-label select-label">Choose option</label>
                          <select className="select form-control-lg" name="categoryName"
                            value={this.state.categoryName}
                            onChange={(e) => this.selectChangeHandler(e)}>
                            {/* <option value={1}>Choose Category</option> */}
                            {
                              this.state.categoryList.map((category) => {
                                return (
                                  <option value={category.categoryName}>{category.categoryName}</option>
                                )
                              })
                            }
                          </select>

                        </div>
                      </div>
                      <div className="mt-4 pt-2">
                        <div className="btn btn-primary btn-lg" onClick={() => {
                          const productData = {
                            productName: this.state.productName,
                            productPrice: this.state.productPrice,
                            productType: this.state.productType,
                            productCategory: this.state.categoryName,
                            featureName: this.state.featureName,
                            featureValue: this.state.featureValue,
                            productDescription: this.state.productDescription,
                          }
                          console.log(productData)
                          // api to insert product
                          axios.post("http://localhost:90/product/insert", productData)
                            .then((res) => {
                              console.log("product Added")
                              alert("product Added")
                            })
                        }}>Add Product</div>
                      </div>
                      {/* </form> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Divider />
        </Dialog>
      </Container>
      // circular progress indicator
    );
  }
}

export const CatagoryTab = ({ icon, title }) => {
  return <Box textAlign="center">
    {icon ? (<Avatar alt="Remy Sharp" variant="square" src={icon} />) : (<Store />)}
    <Typography variant="body2">{title}</Typography>
  </Box>
}
export default HomeFragment