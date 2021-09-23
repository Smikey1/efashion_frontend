import React, { Component } from 'react'
import axios from "axios"
import { Redirect } from "react-router-dom";

class PopUpModal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
    }
    this.handler = this.handler.bind(this)
    this.buttonLogin = this.buttonLogin.bind(this)
  }
  handler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  buttonLogin = (e) => {
    e.preventDefault();

    const loginData = {
      email: this.state.email,
      password: this.state.password
    }
    console.log(loginData)

    axios.post("http://localhost:90/user/login", this.state)
      .then((res) => {
        console.log(res.data.data.role)
        if (res.data.data.role == "Admin") {
          // this.props.history.replace("/admin")
          window.location.href = "http://localhost:3000/admin"
        }
        else {
          this.props.history.push('/')
        }

        localStorage.setItem('token', res.data.accessToken);
        localStorage.setItem('userId', res.data.data._id);

      })
      .catch((err) => {
        console.log(err)
      })
  }



  render() {
    return (
      <div>
        {/* sign up Modal */}
        <div className="modal fade" id="myModal_btn" tabIndex={-1} role="dialog" aria-labelledby="myModal_btn" aria-hidden="true">
          <div className="agilemodal-dialog modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Register Now</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body pt-3 pb-5 px-sm-5">
                <div className="row">
                  <div className="col-md-6 mx-auto align-self-center">
                    <img src="images/p3.png" className="img-fluid" alt="login_image" />
                  </div>
                  <div className="col-md-6">
                    <form action="#" method="post">
                      <div className="form-group">
                        <label htmlFor="recipient-name1" className="col-form-label">Your Name</label>
                        <input type="text" className="form-control" placeholder=" " name="Name" required id="recipient-name1" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="recipient-email" className="col-form-label">Email</label>
                        <input type="email" className="form-control" placeholder=" " name="Email" id="recipient-email" required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="password1" className="col-form-label">Password</label>
                        <input type="password" className="form-control" placeholder=" " name="Password" id="password1" required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="password2" className="col-form-label">Confirm Password</label>
                        <input type="password" className="form-control" placeholder=" " name="Confirm Password" id="password2" required />
                      </div>
                      <div className="sub-w3l">
                        <div className="sub-agile">
                          <input type="checkbox" id="brand2" defaultValue />
                          <label htmlFor="brand2" className="mb-3">
                            <span />I Accept to the Terms &amp; Conditions</label>
                        </div>
                      </div>
                      <div className="right-w3l">
                        <input type="submit" className="form-control" defaultValue="Register" />
                      </div>
                    </form>
                    <p className="text-center mt-3">Already a member?
                      <a href="#" data-toggle="modal" data-target="#exampleModal1" className="text-dark login_btn">
                        Login Now</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* //signup modal */}

        {/* signin Modal */}
        <div className="modal fade" id="exampleModal1" tabIndex={-1} role="dialog" aria-labelledby="exampleModal1" aria-hidden="true">
          <div className="agilemodal-dialog modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Login</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body  pt-3 pb-5 px-sm-5">
                <div className="row">
                  <div className="col-md-6 align-self-center">
                    <img src="images/p3.png" className="img-fluid" alt="login_image" />
                  </div>
                  <div className="col-md-6">
                    <form onSubmit={this.buttonLogin} >
                      <div className="form-group">
                        <label htmlFor="recipient-name" className="col-form-label">Your Name</label>
                        <input type="text" value={this.state.email} onChange={this.handler} className="form-control" placeholder=" " name="email" id="recipient-name" required />
                      </div>
                      <div className="form-group">
                        <label className="col-form-label">Password</label>
                        <input type="password" value={this.state.password} onChange={this.handler} className="form-control" placeholder=" " name="password" required />
                      </div>
                      <div className="right-w3l">
                        <input type="submit" className="form-control" defaultValue="Login" />

                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* signin Modal */}
      </div>
    )
  }
}

// const login = (loginData) => {
//   return axios
//     .post("http://localhost:90/user/login", {
//       email: loginData.email,
//       password: loginData.password
//     })
//     .then((response) => {
//       localStorage.setItem('token', response.data.accessToken)
//       localStorage.setItem('userId', response.data.data._id)

//       return response.data
//     })
//     .catch((error) => {
//       console.log("Invalid email or password")
//     })
// }
export default PopUpModal
