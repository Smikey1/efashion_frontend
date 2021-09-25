import React, { Component } from 'react'
import axios from 'axios'
import { Link, NavLink } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

class Product extends Component {

  state = {
    product: {},
    productList: [],
    id: this.props.match.params.id,
    productImageUrlList: []

  }
  componentDidMount() {
    axios.get("http://localhost:90/product/get")
      .then((res) => {
        this.setState({
          productList: res.data.data
        })
      })

    //get product by Id
    axios.get("http://localhost:90/product/get/" + this.state.id)
      .then(res => {
        console.log(res)
        this.setState({
          product: res.data.singleProductData,
          productImageUrlList: res.data.singleProductData.productImageUrlList
        })


      })
      .catch()
  }

  // function to add product to cart
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
        <Header />
        {/* inner banner */}
        <div className="ibanner_w3 pt-sm-5 pt-3">
          <h4 className="head_agileinfo text-center text-capitalize text-center pt-5">
            e<span>f</span>ashion
            <span>S</span>ore</h4>
        </div>
        {/* //inner banner */}
        {/* breadcrumbs */}
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/product">Product</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">{this.state.product._id}</li>
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
                        this.state.productImageUrlList.map((productImg) => {
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
                    {/* Rating Stars of product */}
                    <li>
                      <Link to="#">
                        <span className="fa fa-star yellow-star" aria-hidden="true" />
                      </Link>
                    </li>

                    <li>
                      <Link to="#">
                        <span className="fa fa-star yellow-star" aria-hidden="true" />
                      </Link>
                    </li>

                    <li>
                      <Link to="#">
                        <span className="fa fa-star yellow-star" aria-hidden="true" />
                      </Link>
                    </li>

                    <li>
                      <Link to="#">
                        <span className="fa fa-star yellow-star" aria-hidden="true" />
                      </Link>
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
                        <Link to="#">30 Day Return Policy</Link>
                      </li>
                      <li className="mt-2">
                        <Link to="#">Cash on Delivery available</Link>
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

                {/* working cart */}
                <div className="occasion-cart">
                  <div className="chr single-item single_page_b">
                    <button type="submit" className="hub-cart phub-cart btn" onClick={() => this.addToCart(this.state.id)}>
                      <i className="fa fa-cart-plus" aria-hidden="true" />
                    </button>
                  </div>
                </div>

                {/* for wishlist
                <div className="occasion-cart">
                  <div className="chr single-item single_page_b">
                    <button type="submit" className="hub-cart phub-cart btn" onClick={() => this.addToWishlist(this.state.id)}>
                      <i className="fa fa-heart text-danger" aria-hidden="true" />
                    </button>
                  </div>
                </div> */}

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
                  this.state.productList.slice(5, 9).map((product) => {
                    return (
                      // {/* card */}
                      <div className="col-lg-3 col-sm-6 p-0">
                        <div className="card product-men p-3">
                          <div className="men-thumb-item">
                            <img src={product.productImageUrlList[0]} alt="img" className="card-img-top" />
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
                          <div className="card-footer d-flex justify-content-between">
                            {/* for cart */}
                            <button type="submit" className="hub-cart phub-cart btn" onClick={() => this.addToCart(product._id)} >
                              <i className="fa fa-cart-plus" aria-hidden="true" />
                            </button>

                            {/* for wishlist  */}
                            <div className="occasion-cart">
                              <div className="chr single-item single_page_b">
                                <button type="submit" className="hub-cart phub-cart btn" onClick={() => this.addToWishlist(product._id)}>
                                  <i className="fa fa-heart text-danger" aria-hidden="true" />
                                </button>
                              </div>
                            </div>
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

        {/* FAQ-help-page */}
        <div className="help about faq-sec">
          <div className="container">
            <h3 className="w3-head">How can we help you</h3>
            <div className="faq-w3agile">
              <h5>Top 5 Frequently asked questions(FAQ)</h5>
              <ul className="faq">
                <li className="item1">
                  <a href="#" title="click here">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor vehicula ipsum nec ?</a>
                  <ul>
                    <li className="subitem1">
                      <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
                        ut laoreet dolore. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                        praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi
                        sint occaecati cupiditate non provident.</p>
                    </li>
                  </ul>
                </li>
                <li className="item2">
                  <a href="#" title="click here">The standard Lorem Ipsum passage Etiam faucibus viverra libero vel efficitur. Ut semper nisl ut laoreet
                    ultrices ?</a>
                  <ul>
                    <li className="subitem1">
                      <p> Tincidunt ut laoreet dolore At vero eos et Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod consectetuer adipiscing elit, sed diam nonummy nibh
                        euismod accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                        deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate
                        non provident.</p>
                    </li>
                  </ul>
                </li>
                <li className="item3">
                  <a href="#" title="click here">Consectetuer adipiscing elit Etiam faucibus viverra libero vel efficitur. Ut semper nisl ut laoreet
                    ultrices?
                  </a>
                  <ul>
                    <li className="subitem1">
                      <p>Dincidunt ut laoreet dolore At vero eos et Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod consectetuer adipiscing elit, sed diam nonummy nibh
                        euismod accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                        deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate
                        non provident.</p>
                    </li>
                  </ul>
                </li>
                <li className="item4">
                  <a href="#" title="click here">Sed diam nonummy nibh euismod Etiam faucibus viverra libero vel efficitur. Ut semper nisl ut laoreet
                    ultrices?
                  </a>
                  <ul>
                    <li className="subitem1">
                      <p>At vero eos et Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                        nibh euismod consectetuer adipiscing elit, sed diam nonummy nibh euismod accusamus et
                        iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                        quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                    </li>
                  </ul>
                </li>
                <li className="item5">
                  <a href="#" title="click here">Euismod tincidunt laoreet Etiam faucibus viverra libero vel efficitur ?</a>
                  <ul>
                    <li className="subitem1">
                      <p>At vero eos et Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                        nibh euismod consectetuer adipiscing elit, sed diam nonummy nibh euismod accusamus et
                        iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                        quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>



          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Product
