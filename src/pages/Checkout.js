import React, { Component } from 'react'
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Swal from "sweetalert2"

class Checkout extends Component {
  state = {
    fullname: "",
    email: "",
    address: "",
    phone: "",
    profilePicUrl: "",
    filename: null,
    cartList: [],
    total: 0,
    index: 1
  }
  async componentDidMount() {
    this.getUserData()
    this.getItems()
  }

  getUserData = async () => {
    try {
      console.log(localStorage.getItem("token"))
      const con = {
        headers: {
          'authorization': `Bearer ${localStorage.getItem("token")}`
        }
      }

      // const token = localStorage.getItem("token")
      const res = await axios.get("http://localhost:90/user/profile", con)

      this.setState({
        fullname: res.data.data.fullname,
        email: res.data.data.email,
        address: res.data.data.address,
        phone: res.data.data.phone,
        profilePicUrl: res.data.data.profilePicUrl
      })
      console.log(res)
    }
    catch (e) {
      console.error(e)
    }
  }


  userFullname = (e) => {
    this.setState({
      fullname: e.target.value
    })
  }
  userEmail = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  userAddress = (e) => {
    this.setState({
      address: e.target.value
    })
  }
  userPhone = (e) => {
    this.setState({
      phone: e.target.value
    })
  }

  placeOrder = async (e) => {
    e.preventDefault()
    const token = localStorage.getItem("token")
    const auth = {
      headers: {
        'authorization': "Bearer " + token,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
    const carts = this.state.cartList
    const newCart = carts.map(item => {
      return { qty: item.quantity, productId: item.productId._id }
    })

    const res = await axios.post("http://localhost:90/order/insert", { order: newCart }, auth)
      .then(() => {
        Swal.fire({
          title: 'Product added to Order Successfully',
          icon: 'success',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: " view added iteam"
        })
      })
    console.log(res)
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
    const res = await axios.get("http://localhost:90/cart/get", auth)
    this.setState({
      cartList: res.data.data
    })
    console.log(this.state.cartList)
  }

  // delete cart funtion
  removeCart = async (productId) => {
    const res = await axios.delete("http://localhost:90/cart/delete/" + productId, {
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
            <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
          </ol>
        </nav>
        {/* //breadcrumbs */}

        {/*checkout*/}
        <section className="checkout_wthree py-sm-5 py-3">
          <div className="container">
            <div className="check_w3ls">
              <div className="d-sm-flex justify-content-between mb-4">
                <h4>review your order
                </h4>
                <h4 className="mt-sm-0 mt-3">Your shopping cart contains:
                  <span>{this.state.cartList.length} Products</span>
                </h4>
              </div>
              <div className="checkout-right">
                <table className="timetable_sub">
                  <thead>
                    <tr>
                      <th>SL No.</th>
                      <th>Product</th>
                      <th>Quantity</th>
                      <th>Product Name</th>
                      <th>Price</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.state.cartList.map((cart, idxx) => {
                        const price = +cart.productId.productPrice
                        this.state.total += price
                        let qty = + cart.quantity
                        const idx = this.state.index
                        this.state.index++
                        return (
                          <tr className={"rem" + idx}>
                            <td className="invert">{idxx + 1}</td>
                            <td className="invert-image">
                              <Link to="#">
                                <img src={cart.productId.productImageUrlList[0]} alt=" " width="80px" height="80px" className="img-responsive" />
                              </Link>
                            </td>
                            <td className="invert">
                              <div className="quantity">
                                <div className="quantity-select">
                                  <div className="entry value-minus" onClick={this.qty--}>&nbsp;</div>
                                  <div className="entry value">
                                    <span>{qty}</span>
                                  </div>
                                  <div className="entry value-plus active" onClick={this.qty++}>&nbsp;</div>
                                </div>
                              </div>
                            </td>
                            <td className="invert">{cart.productId.productName}</td>
                            <td className="invert">{cart.productId.productPrice}</td>
                            <td className="invert">
                              <div className="rem">
                                <div className="close1" onClick={() => this.removeCart(cart.productId._id)}></div>
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
                  <h4>Continue to Checkout</h4>
                  <ul>
                    {
                      this.state.cartList.map((cart) => {
                        return (
                          <li>{cart.productId.productName}
                            <i>-</i>
                            <span>Rs. {cart.productId.productPrice}</span>
                          </li>
                        )
                      })}
                    <li>Total
                      <i>-</i>
                      <span>{this.state.total}</span>
                    </li>
                  </ul>
                </div>
                <div className="col-md-8 address_form">
                  <h4>Billing Address</h4>
                  <form className="creditly-card-form shopf-sear-headinfo_form">
                    <div className="creditly-wrapper wrapper">
                      <div className="information-wrapper">
                        <div className="first-row form-group">
                          <div className="controls">
                            <label className="control-label">Full name: </label>
                            <input className="billing-address-name form-control" type="text" name="fullname" onChange={this.userFullname} value={this.state.fullname} placeholder="Your fullname" />
                          </div>
                          <div className="card_number_grids">
                            <div className="card_number_grid_left">
                              <div className="controls">
                                <label className="control-label">Mobile number:</label>
                                <input className="form-control" type="text" name="phone" onChange={this.userPhone} value={this.state.phone} placeholder="Enter your phone" />
                              </div>
                            </div>
                            <div className="card_number_grid_right">
                              <div className="controls">
                                <label className="control-label">Email: </label>
                                <input type="email" className="form-control" name="email" onChange={this.userEmail} value={this.state.email} placeholder="Enter your E-mail" />
                              </div>
                            </div>
                            <div className="clear"> </div>
                          </div>
                          <div className="controls">
                            <label className="control-label">Billing Address: </label>
                            <input type="text" className="form-control" name="address" onChange={this.userAddress} value={this.state.address} placeholder="Enter your address" />
                          </div>
                          <div className="controls">
                            <label className="control-label">Address type: </label>
                            <select className="form-control option-fieldf">
                              <option>Billing address type:</option>
                              <option>Office</option>
                              <option>Home</option>
                              <option>Commercial</option>
                            </select>
                          </div>
                        </div>
                        <button className="submit check_out" onClick={(e) => this.placeOrder(e)}>place order</button>
                      </div>
                    </div>
                  </form>
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

export default Checkout

