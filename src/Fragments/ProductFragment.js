import React, { Component } from 'react'
import axios from 'axios';
import { NavLink, Link } from 'react-router-dom'
import { Divider } from '@material-ui/core';
import Swal from "sweetalert2"

class ProductFragment extends Component {
    state = {
        categoryList: [],
        productList: [],
        index: 1,
        product_id: "",
        productName: "",
        productPrice: "",
        productCategory: "",
        productDescription: "",
        productType: "",
        featureName: "",
        featureValue: "",
        filename: null
    }
    componentDidMount() {
        this.getAllCategory()
        this.getProductDetails()
    }

    productName = (e) => {
        this.setState({
            productName: e.target.value
        })
    }
    productPrice = (e) => {
        this.setState({
            productPrice: e.target.value
        })
    }
    productCategory = (e) => {
        this.setState({
            productCategory: e.target.value
        })
    }

    featureName = (e) => {
        this.setState({
            featureName: e.target.value
        })
    }
    featureValue = (e) => {
        this.setState({
            featureValue: e.target.value
        })
    }
    productDescription = (e) => {
        this.setState({
            productDescription: e.target.value
        })
    }

    textChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    getAllCategory = () => {
        axios.get("http://localhost:90/category/get")
            .then((res) => {
                console.log(res.data.data)
                this.setState({
                    categoryList: res.data.data,
                })
            })
    }

    // for choosing image
    changeFileHandler = (e) => {
        this.state.filename = e.target.files[0]
        this.updateProductImage()
    }

    getProductDetails = () => {
        this.state.index = 1
        axios.get("http://localhost:90/product/get")
            .then((res) => {
                this.setState({
                    productList: res.data.data
                })
                console.log(this.state.productList)
            })
    }

    // get Product by id
    getProductById = async (productId) => {
        this.state.product_id = productId
        const res = await axios.get("http://localhost:90/product/getById/" + productId)
        this.setState({
            productName: res.data.singleProductData.productName,
            productPrice: res.data.singleProductData.productPrice,
            productDescription: res.data.singleProductData.productDescription,
            productType: res.data.singleProductData.productType,
            categoryName: res.data.singleProductData.productCategory,
            featureName: res.data.singleProductData.featureName,
            featureValue: res.data.singleProductData.featureValue
        })
        console.log(res.data.singleProductData)
    }

    // update product
    updateProduct = (productId) => {
        const updateProductDetails = {
            productName: this.state.productName,
            productPrice: this.state.productPrice,
            productDescription: this.state.productDescription,
            productType: this.state.productType,
            productCategory: this.state.categoryName,
            featureName: this.state.featureName,
            featureValue: this.state.featureValue,
        }
        axios.put("http://localhost:90/product/update/" + productId, updateProductDetails)
            .then((result) => {
                console.log(result)
                Swal.fire({
                    title: 'Product Update Successfully',
                    icon: 'success',
                    showCancelButton: false,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: " view added iteam"
                })
            })

        if (this.state.filename !== null) {
            this.updateProductImage(productId)
        }
    }
    // creating function to upload product Image
    updateProductImage = (productId) => {
        console.log(this.state.filename)
        const data = new FormData();
        data.append('file', this.state.filename)
        axios.put("http://localhost:90/product/image/upload/" + productId, data)
            .then((result) => {
                window.location.reload();
                console.log(result)
            })
            .catch()
    }

    // delete Product
    removeProduct = async (productId) => {
        const res = await axios.delete("http://localhost:90/product/delete/" + productId, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem("token")}`
            }
        })
        this.getProductDetails()
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
                                        <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Update Product Details</h3>

                                        <div className="row">
                                            <div className="col-md-6 mb-4 pb-2">
                                                <div className="form-outline">
                                                    <input type="text" name="productName" onChange={this.productName} value={this.state.productName} className="form-control form-control-lg" />
                                                    <label className="form-label" htmlFor="phoneNumber">Product Name</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4 pb-2">
                                                <div className="form-outline">
                                                    <input type="text" name="productPrice" onChange={this.productPrice} value={this.state.productPrice} className="form-control form-control-lg" />
                                                    <label className="form-label" htmlFor="phoneNumber">Product Price</label>
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
                                                    <input type="text" name="productDescription" onChange={this.productDescription} value={this.state.productDescription} className="form-control form-control-lg" />
                                                    <label className="form-label" >Product Description</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4 pb-2">
                                                <div className="form-outline">
                                                    <input type="text" name="productType" onChange={this.productType} value={this.state.productType} className="form-control form-control-lg" />
                                                    <label className="form-label" >Product Type</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-4 pb-2">
                                                <label className="form-label select-label">Choose option</label>
                                                <select className="select form-control-lg">
                                                    <option value={1}>Choose Category</option>
                                                    {
                                                        this.state.categoryList.map((category) => {
                                                            return (
                                                                <option value={category.categoryName}>{category.categoryName}</option>
                                                            )
                                                        })
                                                    }
                                                </select>

                                            </div>
                                            <div className="col-md-6 mb-4 pb-2">
                                                <div className="form-outline">
                                                    <label className="form-label" htmlFor="phoneNumber">Add Product Image</label>
                                                    <input type="file" name="files" onChange={this.changeFileHandler} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-4 pt-2">
                                            <button className="btn btn-primary btn-lg" type="submit" onClick={() => this.updateProduct(this.state.product_id)}>Update Product</button>
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
                            <li className="active">Product</li>
                        </ol>
                    </div>{/*/.row*/}
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="panel panel-default">
                                <div className="panel-heading">All Product Details:</div>
                                <div className="panel-body">
                                    <p style={{ fontSize: '16px', color: 'red' }} align="center"></p>
                                    <div className="col-md-12">
                                        <div className="table-responsive">
                                            <table className="table table-bordered mg-b-0">
                                                <thead>
                                                    <tr>
                                                        <th>S.No.</th>
                                                        <th>Product Name</th>
                                                        <th>Product Price</th>
                                                        <th>product Category</th>
                                                        <th>product Description</th>
                                                        <th>product Image</th>
                                                        <th>Product Update</th>
                                                        <th>Product Delete</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {

                                                        this.state.productList.map(product => {
                                                            const indexNum = this.state.index
                                                            this.state.index++
                                                            return (
                                                                <tr>
                                                                    <td>{indexNum}</td>
                                                                    <td>{product.productName}</td>
                                                                    <td>{product.productPrice}</td>
                                                                    <td>{product.productCategory}</td>
                                                                    <td>{product.productDescription}</td>

                                                                    <td><img src={product.productImageUrlList[0]} alt="img" className="card-img-top" /></td>
                                                                    <td><Link onClick={() => this.getProductById(product._id)}>Update</Link></td>
                                                                    <td><Link onClick={() => this.removeProduct(product._id)}>Delete</Link></td>

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

export default ProductFragment
