import React, { Component } from 'react'
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Wishlist extends Component {
  state = {
    myproducts: [],
    total: 0,
    index: 1
  }
  async componentDidMount() {
    this.getItems()
  }

  getItems = async () => {
    this.state.index = 1
    const token = localStorage.getItem("token")
    const auth = {
      headers: {
        'authorization': "Bearer " + token,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
    const res = await axios.get("http://localhost:90/wishlist/get", auth)
    this.setState({
      myproducts: res.data.data
    })
    console.log(this.state.myproducts)
  }

  // delete Wishlist funtion
  removeWishlist = async (productId) => {
    const res = await axios.delete("http://localhost:90/Wishlist/delete/" + productId, {
      headers: {
        'authorization': `Bearer ${localStorage.getItem("token")}`
      }
    })
    this.getItems()

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
            <li className="breadcrumb-item active" aria-current="page">Wishlist</li>
          </ol>
        </nav>
        {/* //breadcrumbs */}

        {/*checkout*/}
        <section className="checkout_wthree py-sm-5 py-3">
          <div className="container">
            <div className="check_w3ls">
              <div className="d-sm-flex justify-content-between mb-4">
                <h4>Review your Wishlist Items
                </h4>
                <h4 className="mt-sm-0 mt-3">Your Wishlist contains:
                  <span>{this.state.myproducts.length} Products</span>
                </h4>
              </div>
              <div className="checkout-right">
                <table className="timetable_sub">
                  <thead>
                    <tr>
                      <th>SL No.</th>
                      <th>Product</th>
                      {/* <th>Quantity</th> */}
                      <th>Product Name</th>
                      <th>Price</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.state.myproducts.map((product, idxx) => {
                        const price = +product.productId.productPrice
                        this.state.total += price
                        let qty = + product.quantity
                        const idx = this.state.index
                        this.state.index++
                        return (
                          <tr className={"rem" + idx}>
                            <td className="invert">{idxx + 1}</td>
                            <td className="invert-image">
                              <Link to="#">
                                <img src={product.productId.productImageUrlList[0]} alt=" " className="img-responsive" />
                              </Link>
                            </td>
                            {/* <td className="invert">
                              <div className="quantity">
                                <div className="quantity-select">
                                  <div className="entry value-minus" onClick={this.qty--}>&nbsp;</div>
                                  <div className="entry value">
                                    <span>{qty}</span>
                                  </div>
                                  <div className="entry value-plus active" onClick={this.qty++}>&nbsp;</div>
                                </div>
                              </div>
                            </td> */}
                            <td className="invert">{product.productId.productName}</td>
                            <td className="invert">{product.productId.productPrice}</td>
                            <td className="invert">
                              <div className="rem">
                                <div className="close1" onClick={() => this.removeWishlist(product.productId._id)}></div>
                              </div>
                            </td>
                          </tr>
                        )
                      })
                    }

                  </tbody>
                </table>
              </div>
              <div className="row checkout-left mt-5">
                <div className="col-md-4 checkout-left-basket">
                  <h4>Continue to Order</h4>
                  <ul>
                    {
                      this.state.myproducts.map((product) => {
                        return (
                          <li>{product.productId.productName}
                            <i>-</i>
                            <span>Rs. {product.productId.productPrice}</span>
                          </li>
                        )
                      })}
                    <li>Total
                      <i>-</i>
                      <span>{this.state.total}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*//checkout*/}
        <Footer />
      </div>
    )
  }
}

export default Wishlist

