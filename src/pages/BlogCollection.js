import React, { Component } from 'react'

class BlogCollection extends Component {
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
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">Our Blog Collection</li>
          </ol>
        </nav>
        {/* //breadcrumbs */}
        <section className="blog_wthree py-5">
          <div className="container">
            <h5 className="head_agileinfo text-center text-capitalize pb-5">
              <span>B</span>log</h5>
            {/* blog row */}
            <div className="row card-columns py-lg-5">
              <div className="col-md-4 p-0">
                <div className="card">
                  <a href="single.html">
                    <img className="card-img-top" src="images/blg1.jpg" alt="Card image cap" />
                  </a>
                  <div className="card-body">
                    <h5 className="card-title blg_w3ls">
                      <a href="single.html">Blog Title</a>
                    </h5>
                    <p className="card-text">Donec rutrum congue leo eget malesuada. Pellentesque in ipsum id orci porta dapibus. Vestibulum
                      ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
                  </div>
                </div>
                <div className="card">
                  <a href="single.html">
                    <img className="card-img-top" src="images/a2.jpg" alt="Card image cap" />
                  </a>
                  <div className="card-body">
                    <h5 className="card-title blg_w3ls">
                      <a href="single.html">Blog Title</a>
                    </h5>
                    <p className="card-text">Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum.</p>
                    <p className="card-text">
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 0">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title blg_w3ls">
                      <a href="single.html">Blog Title</a>
                    </h5>
                    <p className="card-text">Donec sollicitudin molestie malesuada. Proin eget tortor risus..
                    </p>
                    <p className="card-text">
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
                <div className="card text-white text-center">
                  <a href="single.html">
                    <img className="card-img" src="images/a3.jpg" alt="Card image" />
                  </a>
                  <div className="card text-center p-3">
                    <blockquote className="blockquote mb-0">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
                      <footer className="blockquote-footer">
                        <small>
                          Someone famous in
                          <cite title="Source Title">Source Title</cite>
                        </small>
                      </footer>
                    </blockquote>
                  </div>
                </div>
                <div className="card text-center">
                  <div className="card-body">
                    <h5 className="card-title blg_w3ls">
                      <a href="single.html">Blog Title</a>
                    </h5>
                    <p className="card-text">TDonec rutrum congue leo eget malesuada. Pellentesque in ipsum id orci porta dapibus. Vestibulum
                      ac diam sit.
                    </p>
                    <p className="card-text">
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 p-0">
                <div className="card">
                  <a href="single.html">
                    <img className="card-img" src="images/blg2.jpg" alt="Card image" />
                  </a>
                </div>
                <div className="card p-3 text-right">
                  <blockquote className="blockquote mb-0">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                    <footer className="blockquote-footer">
                      <small className="text-muted">
                        Someone famous in
                        <cite title="Source Title">Source Title</cite>
                      </small>
                    </footer>
                  </blockquote>
                </div>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title blg_w3ls">
                      <a href="single.html">Blog Title</a>
                    </h5>
                    <p className="card-text">Donec rutrum congue leo eget malesuada. Pellentesque in ipsum id orci porta dapibus. Vestibulum
                      ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
                    <p className="card-text">
                      <small className="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                  <a href="single.html">
                    <img className="card-img-top" src="images/i10.jpg" alt="Card image cap" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default BlogCollection
