import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

class Footer extends Component {
  render() {
    return (
      <div>
        {/* //footer */}
        <footer>
          <div className="footerv2-w3ls">
            <div className="footer-w3lagile-innerr">
              {/* footer-top */}
              <div className="container-fluid">
                <div className="row  footer-v2grids w3-agileits">
                  {/* services */}
                  <div className="col-lg-2 col-sm-6 footer-v2grid">
                    <h4>Support</h4>
                    <ul>
                      <li>
                        <Link to="/payment">Payment</Link>
                      </li>
                      <li>
                        <Link to="#">Shipping</Link>
                      </li>
                      <li>
                        <Link to="#">Cancellation &amp; Returns</Link>
                      </li>
                      <li>
                        <Link to="/faq">FAQ</Link>
                      </li>
                    </ul>
                  </div>
                  {/* //services */}
                  {/* latest posts */}
                  <div className="col-lg-3 col-sm-6 footer-v2grid mt-sm-0 mt-5">
                    <h4>Latest Blog</h4>
                    <div className="footer-v2grid1 row">
                      <div className="col-4 footer-v2grid1-left">
                        <Link to="/blogCollection">
                          <img src="images/bl2.jpg" alt=" " className="img-fluid" />
                        </Link>
                      </div>
                      <div className="col-8 footer-v2grid1-right p-0">
                        <Link to="/blogCollection">eveniie arcet ut moles morbi dapiti</Link>
                      </div>
                    </div>
                    <div className="footer-v2grid1 row my-2">
                      <div className="col-4 footer-v2grid1-left">
                        <Link to="/blogCollection">
                          <img src="images/bl1.jpg" alt=" " className="img-fluid" />
                        </Link>
                      </div>
                      <div className="col-8 footer-v2grid1-right p-0">
                        <Link to="/blogCollection">earum rerum tenmorbi dapiti et</Link>
                      </div>
                    </div>
                    <div className="footer-v2grid1 row">
                      <div className="col-4 footer-v2grid1-left">
                        <Link to="/blogCollection">
                          <img src="images/bl3.jpg" alt=" " className="img-fluid" />
                        </Link>
                      </div>
                      <div className="col-8 footer-v2grid1-right p-0">
                        <Link to="/blogCollection">morbi dapiti eveniet ut molesti</Link>
                      </div>
                    </div>
                  </div>
                  {/* //latest posts */}
                  {/* locations */}
                  <div className="col-lg-2 col-sm-6 footer-v2grid my-lg-0 my-5">
                    <h4>office locations</h4>
                    <ul>
                      <li>
                        <Link to="#">new jersey</Link>
                      </li>
                      <li>
                        <Link to="#">texas</Link>
                      </li>
                      <li>
                        <Link to="#">michigan</Link>
                      </li>
                      <li>
                        <Link to="#">cannada</Link>
                      </li>
                      <li>
                        <Link to="#">brazil</Link>
                      </li>
                      <li>
                        <Link to="#">california</Link>
                      </li>
                    </ul>
                  </div>
                  {/* //locations */}
                  {/* flickr posts */}
                  <div className="col-lg-3 col-sm-6 footer-v2grid my-lg-0 my-sm-5">
                    <h4 className="b-log">
                      flickr posts
                    </h4>
                    <div className="footer-v2grid-instagram">
                      <Link to="#">
                        <img src="images/bl4.jpg" alt=" " className="img-fluid" />
                      </Link>
                    </div>
                    <div className="footer-v2grid-instagram">
                      <Link to="#">
                        <img src="images/bl1.jpg" alt=" " className="img-fluid" />
                      </Link>
                    </div>
                    <div className="footer-v2grid-instagram">
                      <Link to="#">
                        <img src="images/bl6.jpg" alt=" " className="img-fluid" />
                      </Link>
                    </div>
                    <div className="footer-v2grid-instagram">
                      <Link to="#">
                        <img src="images/bl5.jpg" alt=" " className="img-fluid" />
                      </Link>
                    </div>
                    <div className="footer-v2grid-instagram">
                      <Link to="#">
                        <img src="images/bl2.jpg" alt=" " className="img-fluid" />
                      </Link>
                    </div>
                    <div className="footer-v2grid-instagram">
                      <Link to="#">
                        <img src="images/bl3.jpg" alt=" " className="img-fluid" />
                      </Link>
                    </div>
                    <div className="footer-v2grid-instagram">
                      <Link to="#">
                        <img src="images/bl6.jpg" alt=" " className="img-fluid" />
                      </Link>
                    </div>
                    <div className="footer-v2grid-instagram">
                      <Link to="#">
                        <img src="images/bl4.jpg" alt=" " className="img-fluid" />
                      </Link>
                    </div>
                    <div className="footer-v2grid-instagram">
                      <Link to="#">
                        <img src="images/bl5.jpg" alt=" " className="img-fluid" />
                      </Link>
                    </div>
                  </div>
                  {/* //flickr posts */}
                  {/* popular tags */}
                  <div className="col-lg-2  footer-v2grid mt-sm-0 mt-5">
                    <h4>popular tags</h4>
                    <ul className="w3-tag2">
                      <li>
                        <Link to="#">amet</Link>
                      </li>
                      <li>
                        <Link to="#">placerat</Link>
                      </li>
                      <li>
                        <Link to="#">Proin </Link>
                      </li>
                      <li>
                        <Link to="#">vehicula</Link>
                      </li>
                      <li>
                        <Link to="#">diam</Link>
                      </li>
                      <li>
                        <Link to="#">velit</Link>
                      </li>
                      <li>
                        <Link to="#">felis</Link>
                      </li>
                      <li>
                        <Link to="#">mauris</Link>
                      </li>
                      <li>
                        <Link to="#">amet</Link>
                      </li>
                      <li>
                        <Link to="#">placerat</Link>
                      </li>
                      <li>
                        <Link to="#">Proin </Link>
                      </li>
                      <li>
                        <Link to="/">vehicula</Link>
                      </li>
                      <li>
                        <Link to="#">diam</Link>
                      </li>
                      <li>
                        <Link to="#">velit</Link>
                      </li>
                      <li>
                        <Link to="#">felis</Link>
                      </li>
                      <li>
                        <Link to="#">mauris</Link>
                      </li>
                    </ul>
                  </div>
                  {/* //popular tags */}
                </div>
              </div>
              {/* //footer-top */}
              <div className="footer-bottomv2 py-5">
                <div className="container">
                  <ul className="bottom-links-agile">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About Us</Link>
                    </li>
                    <li>
                      <Link to="#">Shop</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                  <h3 className="text-center follow">Follow Us</h3>
                  <ul className="social-iconsv2 agileinfo">
                    <li>
                      <Link to="#">
                        <i className="fab fa-facebook-f" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-twitter" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-youtube" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-linkedin-in" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-google-plus-g" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="container-fluid py-5 footer-copy_w3ls">
              <div className="d-lg-flex justify-content-between">
                <div className="mt-2 sub-some align-self-lg-center">
                  <h5>Payment Method</h5>
                  <ul className="mt-4">
                    <li className="list-inline-item">
                      <img src="images/pay2.png" alt="" />
                    </li>
                    <li className="list-inline-item">
                      <img src="images/pay5.png" alt="" />
                    </li>
                    <li className="list-inline-item">
                      <img src="images/pay3.png" alt="" />
                    </li>
                    <li className="list-inline-item">
                      <img src="images/pay7.png" alt="" />
                    </li>
                    <li className="list-inline-item">
                      <img src="images/pay8.png" alt="" />
                    </li>
                    <li className="list-inline-item ">
                      <img src="images/pay9.png" alt="" />
                    </li>
                  </ul>
                </div>
                <div className="cpy-right align-self-center">
                  <h2 className="agile_btxt">
                    <Link to="/">
                      e<span>f</span>ashion
                      <span>S</span>tore</Link>
                  </h2>
                  <p>© 2021 eFashion Store. All rights reserved | Design by
                    <Link to="#" className="text-secondary"> Hira Datta Dhakal.</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* //footer */}
      </div>
    )
  }
}

export default Footer
