import { Divider } from '@material-ui/core';
import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";

class OrderFragment extends Component {

    state = {
        orderList: [],
        index: 1,
        order_id: "",
        orderId: "",
        orderPrice: "",
        productName: "",
        deliveryStatusMessage: "",
        orderBy: "",
    }
    componentDidMount() {
        this.getOrderDetails()
    }

    getOrderDetails = () => {
        const con = {
            headers: {
                'authorization': `Bearer ${localStorage.getItem("token")}`
            }
        }
        this.state.index = 1
        axios.get("http://localhost:90/order/get", con)
            .then((res) => {
                this.setState({
                    orderList: res.data.data.reverse()
                })
                console.log(this.state.orderList)
            })
    }

    // get Order by id
    getOrderById = async (orderId) => {
        const con = {
            headers: {
                'authorization': `Bearer ${localStorage.getItem("token")}`
            }
        }
        this.state.order_id = orderId
        const res = await axios.get("http://localhost:90/Order/getById/" + orderId, con)
        this.setState({
            orderId: res.data.singleOrderData._id,
            productName: res.data.singleOrderData.order[0].productId.productName,
            orderPrice: res.data.singleOrderData.order[0].productId.productPrice,
            orderBy: res.data.singleOrderData.order[0].userId.fullname,
            deliveryStatusMessage: res.data.singleOrderData.deliveryStatusMessage
        })
        console.log(res.data.singleOrderData)
    }

    // update Order
    updateOrder = (orderId) => {
        const con = {
            headers: {
                'authorization': `Bearer ${localStorage.getItem("token")}`
            }
        }
        const updateOrderDetails = {
            deliveryStatusMessage: this.state.deliveryStatusMessage
        }
        axios.put("http://localhost:90/order/update/" + orderId, updateOrderDetails, con)
            .then((result) => {
                console.log(result)
                Swal.fire({
                    title: 'Order Update Successfully',
                    icon: 'success',
                    showCancelButton: false,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: " view added iteam"
                })
            })
    }

    // delete Order
    removeOrder = async (orderId) => {
        const res = await axios.delete("http://localhost:90/order/delete/" + orderId, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem("token")}`
            }
        })
        this.getOrderDetails()
    }

    render() {
        return (
            <div>
                <Divider />
                <section className="vh-100 gradient-custom">
                    <div className="container py-5 h-100">
                        <div className="row justify-content-center align-items-center h-100">
                            <div className="col-12 col-lg-9 col-xl-7">
                                <div className="card shadow-2-strong card-registration" style={{ borderRadius: '15px' }}>
                                    <div className="card-body p-4 p-md-5">
                                        <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Update Order Details</h3>

                                        <div className="row">
                                            <div className="col-md-6 mb-4 pb-2">
                                                <div className="form-outline">
                                                    <input type="text" name="OrderName" onChange={this.OrderName} value={this.state.OrderName} className="form-control form-control-lg" />
                                                    <label className="form-label" htmlFor="phoneNumber">Order Name</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4 pb-2">
                                                <div className="form-outline">
                                                    <input type="text" name="OrderPrice" onChange={this.OrderPrice} value={this.state.OrderPrice} className="form-control form-control-lg" />
                                                    <label className="form-label" htmlFor="phoneNumber">Order Price</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-4 pb-2">
                                                <div className="form-outline">
                                                    <input type="text" name="featureName" onChange={this.featureName} value={this.state.featureName} className="form-control form-control-lg" />
                                                    <label className="form-label" >Feature Name</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4 pb-2">
                                                <div className="form-outline">
                                                    <input type="text" name="featureValue" onChange={this.featureValue} value={this.state.featureValue} className="form-control form-control-lg" />
                                                    <label className="form-label" >Feature Value</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-4 pb-2">
                                                <div className="form-outline">
                                                    <input type="text" name="OrderDescription" onChange={this.OrderDescription} value={this.state.OrderDescription} className="form-control form-control-lg" />
                                                    <label className="form-label" >Order Description</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4 pb-2">
                                                <div className="form-outline">
                                                    <input type="text" name="OrderType" onChange={this.OrderType} value={this.state.OrderType} className="form-control form-control-lg" />
                                                    <label className="form-label" >Order Type</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <label className="form-label select-label">Select Order Status</label>
                                            <div className="col-12">
                                                <select className="select form-control-lg"
                                                    value={this.state.selectedTeam}
                                                    onChange={(e) => this.selectChangeHandler(e)}
                                                >
                                                    <option value={1}>Select Order Status</option>
                                                    <option value={2}>Completed</option>
                                                    <option value={3}>Pending</option>
                                                    <option value={4}>Cancel</option>
                                                </select>

                                            </div>
                                        </div>
                                        <div className="mt-4 pt-2">
                                            <button className="btn btn-primary btn-lg" type="submit" onClick={() => this.updateOrder(this.state.order_id)}>Update Order</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Divider />
                <div className="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
                    <div className="row">
                        <ol className="breadcrumb">
                            <li><a href="#">
                                <em className="fa fa-list-alt" />
                            </a></li>
                            <li className="active">Order</li>
                        </ol>
                    </div>{/*/.row*/}
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="panel panel-default">
                                <div className="panel-heading">All Order Details:</div>
                                <div className="panel-body">
                                    <p style={{ fontSize: '16px', color: 'red' }} align="center"></p>
                                    <div className="col-md-12">
                                        <div className="table-responsive">
                                            <table className="table table-bordered mg-b-0">
                                                <thead>
                                                    <tr>
                                                        <th>S.No.</th>
                                                        <th>Order Id</th>
                                                        <th>Product Name</th>
                                                        <th>Order Price</th>
                                                        <th>Order By</th>
                                                        <th>Delivery Status</th>
                                                        <th>Order Update</th>
                                                        <th>Order Delete</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {

                                                        this.state.orderList.map(order => {
                                                            const indexNum = this.state.index
                                                            this.state.index++
                                                            return (
                                                                <tr>
                                                                    <td>{indexNum}</td>
                                                                    <td>{order._id}</td>
                                                                    {/* <td>{order[0].productId.productName}</td>
                                                                    <td>{order[0].productId.productPrice}</td>
                                                                    <td>{order[0].userId.fullname}</td>
                                                                    <td>{order.deliveryStatusMessage}</td> */}

                                                                    <td><Link onClick={() => this.getOrderById(order._id)}>Update</Link></td>
                                                                    <td><Link onClick={() => this.removeOrder(order._id)}>Delete</Link></td>

                                                                </tr>
                                                            )
                                                        })
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>
        )
    }
}

export default OrderFragment
