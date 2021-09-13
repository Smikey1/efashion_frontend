import React, { Component } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

class Product extends Component {

 state = {
        product: {},
        myproducts: [],
        id: this.props.match.params.id,
        productImageUrlList: []
          
    }
    componentDidMount() {
        axios.get("http://localhost:90/product/get")
            .then((res) => {
                this.setState({
                    myproducts: res.data.data
                })
            })    
             
        axios.get("http://localhost:90/product/get/" + this.state.id)
            .then(res => {
              console.log(res)
                this.setState({
                    product: res.data.singleProductData,
                    productImageUrlList :res.data.singleProductData.productImageUrlList
                })
                

            })
            .catch()
    }

        addToCart = (productId) => {
        const token = localStorage.getItem("token")
        console.log(token)
        console.log(productId)
        console.log("http://localhost:90/cart/insert/" + productId)
        axios.post("http://localhost:90/cart/insert/" + productId, { productId }, {
            headers: {
                'authorization': "Bearer " + token,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }

        })
        alert("added")

    }

  render() {
     return (
      <div>
        {/* inner banner */}
        <div className="ibanner_w3 pt-sm-5 pt-3">
          <h4 className="head_agileinfo text-center text-capitalize text-center pt-5">
            <span>f</span>ashion
            <span>h</span>ub</h4>
        </div>
        {/* //inner banner */}
        {/* breadcrumbs */}
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="women.html">Women's Clothing</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">Single Product</li>
          </ol>
        </nav>
        {/* //breadcrumbs */}
        {/* Single */}
        <div className="innerf-pages section py-5">
          <div className="container">
            <div className="row my-sm-5">
              <div className="col-lg-4 single-right-left">
                <div className="grid images_3_of_2">
                  <div className="flexslider1">
                   
                    <ul className="slides">
                      {
                      this.state.productImageUrlList.map((productImg)=> {
                        return (
                         <li data-thumb={productImg}>
                        <div className="thumb-image">
                          <img src={productImg} data-imagezoom="true" alt=" " className="img-fluid" /> </div>
                        </li>
                        )
                        })
                    }
                    </ul>
                    <div className="clearfix" />
                  </div>
                </div>
              </div>

              <div className="col-lg-8 mt-lg-0 mt-5 single-right-left simpleCart_shelfItem">
                <h3>{this.state.product.productName}</h3>
                <div className="caption">
                  <ul className="rating-single">
                    <li>
                      <a href="#">
                        <span className="fa fa-star yellow-star" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fa fa-star yellow-star" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fa fa-star yellow-star" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fa fa-star yellow-star" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fa fa-star yellow-star" aria-hidden="true" />
                      </a>
                    </li>
                  </ul>
                  <div className="clearfix"> </div>
                  <h6>Rs. {this.state.product.productPrice}</h6>
                </div>
                <div className="desc_single">
                  <h5>Description</h5>
                  <p>{this.state.product.productDescription}</p>
                </div>
                <div className="d-sm-flex justify-content-between">
                  <div className="occasional">
                    <h5 className="sp_title mb-3">Highlights</h5>
                    <ul className="single_specific">
                      <li>
                        <span>Feature Name: </span> Feature Value</li>
                      <li> {this.state.product.featureName}:
                        <span>{this.state.product.featureValue}</span>
                      </li><li> {this.state.product.featureName}:
                        <span>{this.state.product.featureValue}</span>
                      </li>
                    </ul>
                  </div>
                  <div className="color-quality mt-sm-0 mt-4">
                    <h5 className="sp_title mb-3">services</h5>
                    <ul className="single_serv">
                      <li>
                        <a href="#">30 Day Return Policy</a>
                      </li>
                      <li className="mt-2">
                        <a href="#">Cash on Delivery available</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="description">
                  <h5>Check delivery, payment options and charges at your location</h5>
                  <form action="#" method="post">
                    <input type="text" placeholder="Enter pincode" required />
                    <input type="submit" defaultValue="Check" />
                  </form>
                </div>
                <div className="occasion-cart">
                  <div className="chr single-item single_page_b">
                    <form >
                      <input type="hidden" name="cmd" defaultValue="_cart" />
                      <input type="hidden" name="add" defaultValue={1} />
                      <input type="hidden" name="hub_item" defaultValue="Floral Print Women's Top" />
                      <input type="hidden" name="amount" defaultValue={18.00} />
                      <button type="submit" className="hub-cart phub-cart btn">
                        <i className="fa fa-cart-plus" aria-hidden="true" />
                      </button>
                      <a href="#" data-toggle="modal" data-target="#myModal1" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /new_arrivals */}
        <div className="section singlep_btm pb-5">
          <div className="container">
            <div className="new_arrivals">
              <h4 className="rad-txt text-capitalize">you may also be interested in
              </h4>

              {/* card group 2 */}
                  <div className="card-group my-5">
                    {
         this.state.myproducts.slice(0,4).map((product) => {
            return (
              // {/* card */}
                  <div className="col-lg-3 col-sm-6 p-0">
                    <div className="card product-men p-3">
                      <div className="men-thumb-item">
                        <img src="images/pm1.jpg" alt="img" className="card-img-top" />
                        <div className="men-cart-pro">
                          <div className="inner-men-cart-pro">
                            <NavLink to={"/product/" + product._id} className="link-product-add-cart">Quick View</NavLink>
                          </div>
                        </div>
                      </div>
                      {/* card body */}
                      <div className="card-body  py-3 px-2">
                        <h5 className="card-title text-capitalize">{product.productName}</h5>
                        <div className="card-text d-flex justify-content-between">
                          <p className="text-dark font-weight-bold">Rs. {product.productPrice}</p>
                          <p className="line-through">Rs. {product.productCuttedPrice}</p>
                        </div>
                      </div>
                      {/* card footer */}
                      <div className="card-footer d-flex justify-content-end">
                        <form action="#" method="post">
                          <input type="hidden" name="cmd" defaultValue="_cart" />
                          <input type="hidden" name="add" defaultValue={1} />
                          <input type="hidden" name="hub_item" defaultValue="Solid Formal Black Shirt" />
                          <input type="hidden" name="amount" defaultValue={40.00} />
                          <button type="submit" className="hub-cart phub-cart btn" onClick={()=>this.addToCart(product._id)}>
                            <i className="fa fa-cart-plus" aria-hidden="true" />
                          </button>
                          <a href="#" data-toggle="modal" data-target="#myModal1" />
                        </form>
                      </div>
                    </div>
                  </div>
                  // {/* //card */}
            )
          })
        }
                  </div>
                  {/* //card group */}
              {/*//new_arrivals*/}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product
