import { Divider } from '@material-ui/core'
import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import axios from 'axios'

class SettingFragment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 1,
            blog_id: "",
            fullname: "",
            email: "",
            password: "",
            confirmPassword: "",
            phone: "",
            dob: "",
            gender: "",
            role: "",
            teams: [],
            blogList: [],
            selectedTeam: "",
            selectedItemId: "",
            blogName: "",
            blogDescription: "",
            filename: null,
            show_progress_bar: false
        }
    }

    componentDidMount() {
        this.getAllBlogDetails()
    }

    // handle change
    textHandleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // select  handler for options
    selectChangeHandler = (e) => {
        const productName = e.target.value
        this.setState({ selectedTeam: e.target.value })
    }

    getAllBlogDetails = () => {
        this.state.index = 1
        axios.get("http://localhost:90/blog/get")
            .then((res) => {
                console.log(res.data.data)
                this.setState({
                    blogList: res.data.data,
                })
            })
    }

    // for choosing image
    changeFileHandler = (e) => {
        this.state.filename = e.target.files[0]
        this.updateBlogImage()
    }

    // get Blog by id
    getBlogById = async (blogId) => {
        this.state.blog_id = blogId
        const res = await axios.get("http://localhost:90/blog/getById/" + blogId)
        this.setState({
            blogName: res.data.data.blogName,
            blogDescription: res.data.data.blogDescription,
        })
        console.log(res.data.data)
    }

    // update blog
    updateBlog = (blogId) => {
        const updateBlogDetails = {
            blogName: this.state.blogName,
            blogDescription: this.state.blogDescription,
        }
        axios.put("http://localhost:90/blog/update/" + blogId, updateBlogDetails)
            .then((result) => {
                console.log(result)
                alert("Blog Updated")
            })

        if (this.state.filename !== null) {
            this.updateBlogImage(blogId)
        }
    }
    // creating function to upload product Image
    updateBlogImage = (blogId) => {
        console.log(this.state.filename)
        const data = new FormData();
        data.append('file', this.state.filename)
        axios.put("http://localhost:90/blog/image/upload/" + blogId, data)
            .then((result) => {
                window.location.reload();
                console.log(result)
            })
            .catch()
    }

    // delete Blog
    deleteBlog = async (blogId) => {
        const res = await axios.delete("http://localhost:90/blog/delete/" + blogId)
        this.getAllBlogDetails()
    }

    // function to create new user
    addNewUser = () => {
        const addUserData = {
            fullname: this.state.fullname,
            email: this.state.email,
            password: this.state.password,
            role: this.state.role,
            phone: this.state.phone
        }
        axios.post("http://localhost:90/user/register", addUserData)
            .then((response) => {
                if (response.data.success === true) {
                    alert("User Created")
                }
            })
            .catch((err) => { console.log("Something went wrong!") })
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
                                        <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Add New User/Admin</h3>
                                        <form>
                                            <div className="row">
                                                <div className="col-md-6 mb-4 pb-2">
                                                    <div className="form-outline">
                                                        <input type="text" id="phoneNumber" name="fullname" onChange={this.textHandleChange} value={this.state.fullname} className="form-control form-control-lg" />
                                                        <label className="form-label" htmlFor="phoneNumber">Full Name</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 mb-4 pb-2">
                                                    <div className="form-outline">
                                                        <input type="email" id="emailAddress" name="email" onChange={this.textHandleChange} value={this.state.email} className="form-control form-control-lg" />
                                                        <label className="form-label" htmlFor="emailAddress">Email</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-4 pb-2">
                                                    <div className="form-outline">
                                                        <input type="tel" id="phone" name="phone" onChange={this.textHandleChange} value={this.state.phone} className="form-control form-control-lg" />
                                                        <label className="form-label" htmlFor="phoneNumber">Phone Number</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 mb-4 d-flex align-items-center">
                                                    <div className="form-outline datepicker w-100">
                                                        <input type="text" name="dob" onChange={this.textHandleChange} value={this.state.dob} className="form-control form-control-lg" id="birthdayDate" />
                                                        <label htmlFor="birthdayDate" className="form-label">Date of Birth</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-4 pb-2">
                                                    <div className="form-outline">
                                                        <input type="text" id="pass2" name="gender" onChange={this.textHandleChange} value={this.state.gender} className="form-control form-control-lg" />
                                                        <label className="form-label" >Gender</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 mb-4 pb-2">
                                                    <div className="form-outline">
                                                        <input type="password" id="pass1" name="password" onChange={this.textHandleChange} value={this.state.password} className="form-control form-control-lg" />
                                                        <label className="form-label" >Password</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-4 pb-2">
                                                    <div className="form-outline">
                                                        <input type="password" id="pass2" name="confirmPassword" onChange={this.textHandleChange} value={this.state.confirmPassword} className="form-control form-control-lg" />
                                                        <label className="form-label" >Confirm Password</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <label className="form-label select-label">Choose option</label>
                                                <div className="col-12">
                                                    <select className="select form-control-lg"
                                                        value={this.state.selectedTeam}
                                                        onChange={(e) => this.selectChangeHandler(e)}
                                                    >

                                                        <option value={1}>Choose role</option>
                                                        <option value={2}>Admin</option>
                                                        <option value={3}>Customer</option>
                                                    </select>

                                                </div>
                                            </div>
                                            <div className="mt-4 pt-2">
                                                <input className="btn btn-primary btn-lg" type="submit" defaultValue="Submit" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Divider />

                <section className="vh-100 gradient-custom">
                    <div className="container py-5 h-100">
                        <div className="row justify-content-center align-items-center h-100">
                            <div className="col-12 col-lg-9 col-xl-7">
                                <div className="card shadow-2-strong card-registration" style={{ borderRadius: '15px' }}>
                                    <div className="card-body p-4 p-md-5">
                                        <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Add/Update Blog</h3>

                                        <div className="row">
                                            <div className="col-md-6 mb-4 pb-2">
                                                <div className="form-outline">
                                                    <input type="text" name="blogName" onChange={this.textHandleChange} value={this.state.blogName} className="form-control form-control-lg" />
                                                    <label className="form-label" htmlFor="phoneNumber">Blog Name</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4 pb-2">
                                                <div className="form-outline">
                                                    <label className="form-label" htmlFor="phoneNumber">Add Blog Image</label>
                                                    <input type="file" name="files" onChange={this.changeFileHandler} />
                                                </div>
                                            </div>


                                            <div className="col-md-6 mb-4 pb-2">
                                                <div className="form-outline">
                                                    <textarea type="text" name="blogDescription" onChange={this.textHandleChange} value={this.state.blogDescription} className="form-control form-control-lg" />
                                                    <label className="form-label" htmlFor="phoneNumber">Blog Description</label>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="d-flex justify-content-between mt-4 pt-2" >
                                            <button className="btn btn-primary btn-lg" type="submit" onClick={() => {
                                                {
                                                    const blogData = {
                                                        blogName: this.state.blogName,
                                                        blogDescription: this.state.blogDescription,
                                                    }
                                                    console.log(blogData)
                                                    // api to insert blog
                                                    axios.post("http://localhost:90/blog/insert", blogData)
                                                        .then((res) => {
                                                            console.log("blog Added")
                                                            alert("Blog Added")
                                                        })
                                                }
                                            }}>Add Blog</button>
                                            <button className="btn btn-primary btn-lg" type="submit" onClick={() => this.updateBlog(this.state.blog_id)}>Update Blog</button>
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
                            <li className="active">Blogs</li>
                        </ol>
                    </div>{/*/.row*/}
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="panel panel-default">
                                <div className="panel-heading">All Blogs:</div>
                                <div className="panel-body">
                                    <p style={{ fontSize: '16px', color: 'red' }} align="center"></p>
                                    <div className="col-md-12">
                                        <div className="table-responsive">
                                            <table className="table table-bordered mg-b-0">
                                                <thead>
                                                    <tr>
                                                        <th>S.No.</th>
                                                        <th>Blog Name</th>
                                                        <th>Blog Description</th>
                                                        <th>Blog Image</th>
                                                        <th>Order Update</th>
                                                        <th>Order Delete</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        this.state.blogList.map(blog => {
                                                            const indexNum = this.state.index
                                                            this.state.index++
                                                            return (
                                                                <tr>
                                                                    <td>{indexNum}</td>
                                                                    <td>{blog.blogName}</td>
                                                                    <td>{blog.blogDescription}</td>
                                                                    <td><img src={blog.blogImageUrl} alt="img" className="card-img-top" /></td>

                                                                    <td><Link onClick={() => this.getBlogById(blog._id)}>Update</Link></td>
                                                                    <td><Link onClick={() => this.deleteBlog(blog._id)}>Delete</Link></td>

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

export default SettingFragment
