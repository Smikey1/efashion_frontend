import React, { Component } from 'react'
import GridLeft from '../components/GridLeft'
import { Link, NavLink } from 'react-router-dom'
import axios from 'axios'
import Header from '../components/Header'
import Footer from '../components/Footer'

class ProductCollection extends Component {
  state = {
    myproducts: []
  }
  componentDidMount() {
    axios.get("http://localhost:90/product/get")
      .then((res) => {
        this.setState({
          myproducts: res.data.data
        })
        console.log(this.state.myproducts)
      })
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
    alert("added to cart")
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
            <li className="breadcrumb-item active" aria-current="page">Product Collection</li>
          </ol>
        </nav>
        {/* //breadcrumbs */}

        {/* Shop */}
        <div className="innerf-pages section">
          <div className="fh-container mx-auto">
            <div className="row my-lg-5 mb-5">
              {/* grid Left */}
              <GridLeft></GridLeft>
              {/* //grid Left */}

              {/* grid right */}
              <div className="col-lg-9 mt-lg-0 mt-5 right-product-grid">
                {/* card group  */}
                <div className="card-group">
                  {/* card */}
                  {
                    this.state.myproducts.slice(0, 12).map((product) => {
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

                  {/* //row  */}
                </div>
                {/* //card group 1*/}
                {/* card group 2 */}
                <div className="card-group my-5">
                  {/* row2 */}

                  {
                    this.state.myproducts.slice(12, 24).map((product) => {
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
                  {/* //card 2 */}
                </div>
                {/* //card group */}
                {/* card group  */}
                <div className="card-group">
                  {/* row1*/}
                  {
                    this.state.myproducts.slice(24, 40).map((product) => {
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
                  {/* //row  */}
                </div>
                {/* //card group */}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ProductCollection
