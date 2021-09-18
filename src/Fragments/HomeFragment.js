import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { Add, Store,Close } from '@material-ui/icons';
import axios from "axios";
import React, { Component } from 'react';
import BannerSlider from '../components/BannerSlider';
import GridView from '../components/GridView';
import HorizontalScroller from '../components/HorizontalScroller';

import {
  AppBar, Toolbar,Fab,Dialog,Slide,Button,IconButton ,
  Avatar, Box, Container, Typography,
} from "@material-ui/core";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

class HomeFragment extends Component {

  state = {
    value: 0,
    myCategory: [],
    myProduct: [],
    addDialog:false
  }

  componentDidMount() {
    axios.get("http://localhost:90/category/get")
      .then((res) => {

        this.setState({
          myCategory: res.data.data
        })
        console.log(res.data)
      })

    axios.get("http://localhost:90/product/get")
      .then((res) => {

        this.setState({
          myProduct: res.data.data
        })
        console.log(res.data)
      })

  }
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     value: 0,
  //     myCategory: []
  //   }
  // }
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
              this.state.myCategory.map(category => {
                return (
                  <Tab icon={<CatagoryTab
                    icon={category.categoryImageUrl}
                    title={category.categoryName} />} />
                )
              })
            }

          </Tabs>
        </AppBar>
        <BannerSlider Images={[{ image: "https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" }]}></BannerSlider>
        <HorizontalScroller />
        <GridView />

        <Fab color="primary" aria-label="add" 
        onClick ={e=>this.setState({addDialog:true})}
        style = {{position:"fixed",bottom:"50px",right:"50px"}}>
          <Add />
        </Fab>
        <Dialog
          fullScreen
          open={this.state.addDialog}
          onClose={e=>this.setState({
            addDialog:false
          })}
          TransitionComponent={Transition}
        >
          <AppBar sx={{ position: 'relative' }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={e=>this.setState({
                  addDialog:false
                })}
                aria-label="close"
              >
                <Close />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                Add New Product
              </Typography>
              <Button autoFocus color="inherit" 
              style={{position:"absolute",right:"0px"}}
              onClick={e=>this.setState({addDialog:false})}>
                Save
              </Button>
            </Toolbar>
          </AppBar>
          
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