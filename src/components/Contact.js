import React, { Component } from 'react'

class Contact extends Component {
  render() {
    return (
      <div>
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
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
          </ol>
        </nav>
        {/* //breadcrumbs */}
        {/* contact */}
        <section className="wthree-row pt-3 pb-sm-5 w3-contact">
          <div className="container py-sm-5 pb-5">
            <h5 className="head_agileinfo text-center text-capitalize pb-5">
              <span>C</span>ontact us</h5>
            <div className="row contact-form pt-lg-5">
              <div className="col-lg-6 wthree-form-left">
                {/* contact form grid */}
                <div className="contact-top1">
                  <h5 className="text-dark mb-4 text-capitalize">Send us a note</h5>
                  <form action="#" method="get" className="f-color">
                    <div className="form-group">
                      <label htmlFor="contactusername">Name</label>
                      <input type="text" className="form-control" id="contactusername" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="contactemail">Email</label>
                      <input type="email" className="form-control" id="contactemail" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="contactcomment">Your Message</label>
                      <textarea className="form-control" rows={5} id="contactcomment" required defaultValue={""} />
                    </div>
                    <button type="submit" className="btn btn-info btn-block">Submit</button>
                  </form>
                </div>
                {/*  //contact form grid ends here */}
              </div>
              {/* contact details */}
              <div className="col-lg-6 contact-bottom pl-5 mt-lg-0 mt-5">
                {/* contact details grid1*/}
                <div className="address">
                  <h5 className="pb-3 text-capitalize">Address</h5>
                  <address>
                    <p className="c-txt"><a href="https://goo.gl/maps/hgQcbkR1NEKBZ84T7">Bharatpur-8</a></p>
                    <p className="c-txt"><a href="https://goo.gl/maps/hgQcbkR1NEKBZ84T7">Chitwan,Nepal</a></p>
                  </address>
                </div>
                {/* contact details grid2*/}
                <div className="address my-5">
                  <h5 className="pb-3 text-capitalize">phone</h5>
                  <p>
                    <a href="tel:977-98415095XX">+977-98415095XX</a></p>
                  <p>
                    <a href="tel:977-98415095XX">+977-98415095XX</a></p>
                  <p>
                    <a href="tel:977-98415095XX">+977-98415095XX</a></p>
                </div>
                {/* contact details grid3 */}
                <div className="address mt-md-0 mt-3">
                  <h5 className="pb-3 text-capitalize">Email</h5>
                  <p>
                    <a href="mailto:mail@efashion.com">mail@efashion.com</a>
                  </p>
                  <p>
                    <a href="mailto:mail@efashion.com">ceo@efashion.com</a>
                  </p>
                </div>
                {/* //contact details row ends here */}
              </div>
            </div>
            {/* //contact details container */}
          </div>
          {/* contact map grid */}
          <div className="map contact-right pb-5">
            <div className="pt-lg-5 bg-pricemain text-center">
              <h3 className="stat-title text-capitalize pb-5">We are here</h3>
              <span className="w3-line" />
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.4724534305456!2d84.4299145150288!3d27.702695482793754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994fb2e22f7ef0b%3A0x331f599bb3caf664!2sStyle%20The%20Fashion%20Wear!5e0!3m2!1sen!2snp!4v1632300896266!5m2!1sen!2snp" allowfullscreen></iframe>
          </div>
          {/*//contact map grid ends here*/}
        </section>
        {/* contact */}
      </div>
    )
  }
}

export default Contact
