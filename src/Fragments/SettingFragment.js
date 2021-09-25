import { Divider } from '@material-ui/core'
import React, { Component } from 'react'
import axios from 'axios'

class SettingFragment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fullname: "",
            email: "",
            password: "",
            confirmPassword: "",
            phone: "",
            dob: "",
            gender: "",
            role: "",
            teams: [],
            selectedTeam: "",
            selectedItemId: "",
            show_progress_bar: false
        }
    }

    // handle change
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // select  handler for options
    selectChangeHandler = (e) => {
        const productName = e.target.value
        this.setState({ selectedTeam: e.target.value })
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
                                                        <input type="text" id="phoneNumber" name="fullname" onChange={this.handleChange} value={this.state.fullname} className="form-control form-control-lg" />
                                                        <label className="form-label" htmlFor="phoneNumber">Full Name</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 mb-4 pb-2">
                                                    <div className="form-outline">
                                                        <input type="email" id="emailAddress" name="email" onChange={this.handleChange} value={this.state.email} className="form-control form-control-lg" />
                                                        <label className="form-label" htmlFor="emailAddress">Email</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-4 pb-2">
                                                    <div className="form-outline">
                                                        <input type="tel" id="phone" name="phone" onChange={this.handleChange} value={this.state.phone} className="form-control form-control-lg" />
                                                        <label className="form-label" htmlFor="phoneNumber">Phone Number</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 mb-4 d-flex align-items-center">
                                                    <div className="form-outline datepicker w-100">
                                                        <input type="text" name="dob" onChange={this.handleChange} value={this.state.dob} className="form-control form-control-lg" id="birthdayDate" />
                                                        <label htmlFor="birthdayDate" className="form-label">Date of Birth</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-4 pb-2">
                                                    <div className="form-outline">
                                                        <input type="text" id="pass2" name="gender" onChange={this.handleChange} value={this.state.gender} className="form-control form-control-lg" />
                                                        <label className="form-label" >Gender</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 mb-4 pb-2">
                                                    <div className="form-outline">
                                                        <input type="password" id="pass1" name="password" onChange={this.handleChange} value={this.state.password} className="form-control form-control-lg" />
                                                        <label className="form-label" >Password</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-4 pb-2">
                                                    <div className="form-outline">
                                                        <input type="password" id="pass2" name="confirmPassword" onChange={this.handleChange} value={this.state.confirmPassword} className="form-control form-control-lg" />
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
            </div>
        )
    }
}

export default SettingFragment
