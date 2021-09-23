import React, { Component } from 'react'
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: "",
            fullname: "",
            username: "",
            email: "",
            address: "",
            phone: "",
            gender: "",
            dob: "",
            role: "",
            password: "",
            confirmPassword: "",
            profilePicUrl: "",
            filename: null
        }

    }

    async componentDidMount() {
        this.getUserData()
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
                username: res.data.data.username,
                email: res.data.data.email,
                address: res.data.data.address,
                phone: res.data.data.phone,
                dob: res.data.data.dob,
                gender: res.data.data.gender,
                role: res.data.data.role,
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
    userUsername = (e) => {
        this.setState({
            username: e.target.value
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
    userGender = (e) => {
        this.setState({
            gender: e.target.value
        })
    }
    userDob = (e) => {
        this.setState({
            dob: e.target.value
        })
    }
    userRole = (e) => {
        this.setState({
            role: e.target.value
        })
    }

    userPassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    userConfirmPassword = (e) => {
        this.setState({
            confirmPassword: e.target.value
        })
    }

    // for choosing image
    changeFileHandler = (e) => {
        console.log("now i m changing profile picture")
        this.state.filename = e.target.files[0]
        this.updateProfileImage()
    }

    // for update user profile image
    updateProfileImage = () => {
        const userId = localStorage.getItem("userId")
        const con = {
            headers: {
                'authorization': `Bearer ${localStorage.getItem("token")}`
            }
        }
        console.log(this.state.filename)
        const data = new FormData();
        data.append('file', this.state.filename)
        axios.put("http://localhost:90/user/profile/upload/" + userId, data, con)
            .then((result) => {
                window.location.reload();
                console.log(result)
            })
            .catch()
    }

    // for update user profile 
    updateProfile = async (e) => {
        // to stop reloading of the page
        e.preventDefault();
        const userId = localStorage.getItem("userId")
        const con = {

            headers: {
                'authorization': `Bearer ${localStorage.getItem("token")}`
            }
        }

        const res = await axios.put("http://localhost:90/user/update/" + userId, {
            fullname: this.state.fullname,
            username: this.state.username,
            email: this.state.email,
            address: this.state.address,
            phone: this.state.phone,
            address: this.state.address,
            gender: this.state.gender,
            dob: this.state.dob,
            role: this.state.role,
            password: this.state.password,
        }, con)

        if (this.state.filename !== null) {
            this.updateProfileImage()
        }
        if (this.state.password !== "" && this.state.password === this.state.confirmPassword) {
            this.changePassword()
        }
        // this.props.history.push('/userDashboard/:id')
        console.log(res.data)
        this.getUserData()
        // if (this.state.filename !== null) {
        //     this.updateProfileImage()
        // }
        if (this.state.password !== "" && this.state.password === this.state.confirmPassword) {
            this.changePassword()
        }
        // this.props.history.push('/userDashboard/:id')
        console.log(res.data)
        this.getUserData()
    }

    // for change user password
    changePassword = async () => {
        // to stop reloading of the page
        const userId = localStorage.getItem("userId")
        const con = {

            headers: {
                'authorization': `Bearer ${localStorage.getItem("token")}`
            }
        }
        const res = await axios.put("http://localhost:90/user/change-password/" + userId, {
            password: this.state.password,
        }, con)
    }
    render() {
        const userId = localStorage.getItem("userId")
        return (
            <div>
                <Header />
                <div className="row">
                    <div className="col-md-3 border-right">
                        <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                            <img className="rounded-circle mt-5" width="150px" src={this.state.profilePicUrl} />
                            <span className="font-weight-bold">{this.state.fullname}</span>
                            <span className="text-black-50">{this.state.email}</span><span> </span>
                            <span className="text-black-50">{this.state.role}</span><span>
                                <input type="file" name="files" onChange={this.changeFileHandler} /></span></div>
                    </div>
                    <div className="col-md-5 border-right">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="text-right">Update Profile Details</h4>
                            </div>

                            <div className="row mt-3">
                                <div className="col-md-12"><label className="labels">Full name</label><input type="text" className="form-control" name="fullname" onChange={this.userFullname} value={this.state.fullname} placeholder="Enter your fullname" /></div>
                                <div className="col-md-12"><label className="labels">Username</label><input type="text" className="form-control" name="username" onChange={this.userUsername} value={this.state.username} placeholder="Enter your Username" /></div>
                                <div className="col-md-12"><label className="labels">Email</label><input type="email" className="form-control" name="email" onChange={this.userEmail} value={this.state.email} placeholder="Enter your E-mail" /></div>
                                <div className="col-md-12"><label className="labels">Address</label><input type="text" className="form-control" name="address" onChange={this.userAddress} value={this.state.address} placeholder="Enter your address" /></div>
                                <div className="col-md-12"><label className="labels">Phone</label><input type="text" className="form-control" name="phone" onChange={this.userPhone} value={this.state.phone} placeholder="Enter your phone" /></div>
                                <div className="col-md-12"><label className="labels">Gender</label><input type="text" className="form-control" name="gender" onChange={this.userGender} value={this.state.gender} placeholder="Enter your gender" /></div>
                                <div className="col-md-12"><label className="labels">Date of Birth</label><input type="text" className="form-control" name="dob" onChange={this.userDob} value={this.state.dob} placeholder="Enter your dob" /></div>
                                <div className="col-md-12"><label className="labels">Role</label><input type="text" className="form-control" name="role" onChange={this.userRole} value={this.state.role} placeholder="Your role" /></div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-6"><label className="labels">Password</label><input type="password" className="form-control" onChange={this.userPassword} value={this.state.password} name="Password" placeholder="Password" /></div>
                                <div className="col-md-6"><label className="labels">Confirm Password</label><input type="password" className="form-control" onChange={this.userConfirmPassword} value={this.state.confirmPassword} name="Confirm Password" placeholder="Confirm Password" /></div>
                            </div>
                            <div className="mt-5 text-center"><button className="btn btn-primary profile-button" onClick={this.updateProfile} type="button">Update Profile</button></div>
                        </div>
                    </div>
                    <div className="col-md-4">





                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center experience"><span>Edit Your Experience</span><span className="border px-3 p-1 add-experience"><i className="fa fa-plus" />&nbsp;Experience</span></div><br />
                            <div className="col-md-12"><label className="labels">Experience in Web Developing</label><input type="text" className="form-control" placeholder="Add experience" /></div> <br />
                            <div className="col-md-12"><label className="labels">Additional Details</label><input type="text" className="form-control" placeholder="Add Additional details" /></div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Profile
