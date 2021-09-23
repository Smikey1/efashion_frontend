import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Blog extends Component {
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
            <li className="breadcrumb-item active" aria-current="page">Blog Page</li>
          </ol>
        </nav>
        {/* //breadcrumbs */}

        <section className="single_blog_wthree py-5">
          <div className="container">
            <h5 className="head_agileinfo text-center text-capitalize pb-5">
              <span>Single</span> Page</h5>
            <div className="single-page-agile-info">
              {/* /movie-browse-agile */}
              <div className="row show-top-grids">
                <div className="col-md-7 single-left">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title font-weight-bold">Blog Title</h5>
                      <p className="card-text">Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit tortor eget
                        felis porttitor volutpat. Proin eget tortor risus. Curabitur non nulla sit amet nisl
                        tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellentesque nec,
                        egestas non nisi. Vivamus suscipit tortor eget felis porttitor volutpat..</p>
                      <p className="card-text">
                        <small className="text-muted">Last updated 3 mins ago</small>
                      </p>
                    </div>
                    <img className="card-img-bottom" src="images/blg1.jpg" alt="Card image cap" />
                  </div>
                  <div className="song-grid-right">
                    <div className="share">
                      <h5>Share this</h5>
                      <div className="single-agile-shar-buttons">
                        <ul>
                          <li>
                            <div className="fb-like fb_iframe_widget" data-href="https://www.facebook.com/w3layouts" data-layout="button_count" data-action="like" data-size="small" data-show-faces="false" data-share="false" fb-xfbml-state="rendered" fb-iframe-plugin-query="action=like&app_id=&container_width=0&href=https%3A%2F%2Fwww.facebook.com%2Fw3layouts&layout=button_count&locale=en_GB&sdk=joey&share=false&show_faces=false&size=small">
                              <span style={{ verticalAlign: 'top', width: '0px', height: '0px', overflow: 'hidden' }}>
                                <iframe name="f2d4069dd7c5844" width="1000px" height="1000px" frameBorder={0} allowTransparency="true" allowFullScreen="true" scrolling="no" title="fb:like Facebook Social Plugin" src="https://www.facebook.com/v2.7/plugins/like.php?action=like&app_id=&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter%2Fr%2FXBwzv5Yrm_1.js%3Fversion%3D42%23cb%3Df9ea263d24bf8%26domain%3Dp.w3layouts.com%26origin%3Dhttps%253A%252F%252Fp.w3layouts.com%252Ff16922fe3409b58%26relation%3Dparent.parent&container_width=0&href=https%3A%2F%2Fwww.facebook.com%2Fw3layouts&layout=button_count&locale=en_GB&sdk=joey&share=false&show_faces=false&size=small" style={{ border: 'none', visibility: 'visible', width: '0px', height: '0px' }} />
                              </span>
                            </div>
                          </li>
                          <li>
                            <div className="fb-share-button fb_iframe_widget" data-href="https://www.facebook.com/w3layouts" data-layout="button_count" data-size="small" data-mobile-iframe="true" fb-xfbml-state="rendered" fb-iframe-plugin-query="app_id=&container_width=31&href=https%3A%2F%2Fwww.facebook.com%2Fw3layouts&layout=button_count&locale=en_GB&mobile_iframe=true&sdk=joey&size=small">
                              <span style={{ verticalAlign: 'top', width: '0px', height: '0px', overflow: 'hidden' }}>
                                <iframe name="fb1666b41482e8" width="1000px" height="1000px" frameBorder={0} allowTransparency="true" allowFullScreen="true" scrolling="no" title="fb:share_button Facebook Social Plugin" src="https://www.facebook.com/v2.7/plugins/share_button.php?app_id=&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter%2Fr%2FXBwzv5Yrm_1.js%3Fversion%3D42%23cb%3Df2ea1c68c434c8c%26domain%3Dp.w3layouts.com%26origin%3Dhttps%253A%252F%252Fp.w3layouts.com%252Ff16922fe3409b58%26relation%3Dparent.parent&container_width=31&href=https%3A%2F%2Fwww.facebook.com%2Fw3layouts&layout=button_count&locale=en_GB&mobile_iframe=true&sdk=joey&size=small" style={{ border: 'none', visibility: 'visible', width: '0px', height: '0px' }} />
                              </span>
                            </div>
                          </li>
                          <li className="news-twitter">
                            <iframe id="twitter-widget-0" scrolling="no" frameBorder={0} allowTransparency="true" className="twitter-follow-button twitter-follow-button-rendered" title="Twitter Follow Button" src="https://platform.twitter.com/widgets/follow_button.85cf65311617c356fe9237c3e6c10afb.en.html#dnt=false&id=twitter-widget-0&lang=en&screen_name=w3layouts&show_count=false&show_screen_name=true&size=m&time=1502102422605" style={{ position: 'static', visibility: 'visible', width: '126px', height: '20px' }} data-screen-name="w3layouts" />
                          </li>
                          <li>
                            <iframe id="twitter-widget-1" scrolling="no" frameBorder={0} allowTransparency="true" className="twitter-mention-button twitter-mention-button-rendered twitter-tweet-button" title="Twitter Tweet Button" src="https://platform.twitter.com/widgets/tweet_button.85cf65311617c356fe9237c3e6c10afb.en.html#dnt=false&id=twitter-widget-1&lang=en&original_referer=https%3A%2F%2Fp.w3layouts.com%2Fdemos%2Faug-2016%2F24-08-2016%2Fone_movies%2Fweb%2Fsingle.html&screen_name=w3layouts&size=m&time=1502102422608&type=mention" style={{ position: 'static', visibility: 'visible', width: '136px', height: '20px' }} data-screen-name="w3layouts" />
                          </li>
                          <li>
                            {/* Place this tag where you want the +1 button to render. */}
                            <div id="___plusone_0" style={{ textIndent: '0px', margin: '0px', padding: '0px', background: 'transparent', borderStyle: 'none', float: 'none', lineHeight: 'normal', fontSize: '1px', verticalAlign: 'baseline', display: 'inline-block', width: '32px', height: '20px' }}>
                              <iframe ng-non-bindable frameBorder={0} hspace={0} marginHeight={0} marginWidth={0} scrolling="no" style={{ position: 'static', top: '0px', width: '32px', margin: '0px', borderStyle: 'none', left: '0px', visibility: 'visible', height: '20px' }} tabIndex={0} vspace={0} width="100%" id="I1_1502102853328" name="I1_1502102853328" src="https://apis.google.com/se/0/_/+1/fastbutton?usegapi=1&size=medium&origin=https%3A%2F%2Fp.w3layouts.com&url=https%3A%2F%2Fp.w3layouts.com%2Fdemos%2Faug-2016%2F24-08-2016%2Fone_movies%2Fweb%2Fsingle.html&gsrc=3p&jsh=m%3B%2F_%2Fscs%2Fapps-static%2F_%2Fjs%2Fk%3Doz.gapi.en.xh47SggJVmI.O%2Fm%3D__features__%2Fam%3DAQ%2Frt%3Dj%2Fd%3D1%2Frs%3DAGLTcCNnAKKXzFeIiJTiMA4Bq29frxjzuA#_methods=onPlusOne%2C_ready%2C_close%2C_open%2C_resizeMe%2C_renderstart%2Concircled%2Cdrefresh%2Cerefresh%2Conload&id=I1_1502102853328&parent=https%3A%2F%2Fp.w3layouts.com&pfname=&rpctoken=33261381" data-gapiattached="true" title="G+" />
                            </div>
                            {/* Place this tag after the last +1 button tag. */}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="all-comments p-sm-5 p-3 mt-5">
                    <div className="wthree-form-left">
                      {/* contact form grid */}
                      <div className="contact-top1">
                        <h5 className="text-dark mb-4 text-capitalize">send us a note</h5>
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
                    <div className="media py-5">
                      <img className="mr-3" src="images/m.png" alt="Generic placeholder image" />
                      <div className="media-body">
                        <h5 className="mt-0">Michael</h5>
                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                          vulputate at, tempus viverra turpis.</p>
                        <div className="media mt-5">
                          <a className="pr-3" href="#">
                            <img src="images/f.png" alt="Generic placeholder image" />
                          </a>
                          <div className="media-body">
                            <h5 className="mt-0">James</h5>
                            <p> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                              vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                              fringilla. Donec lacinia congue felis in faucibus.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="media">
                      <img className="mr-3" src="images/m.png" alt="Generic placeholder image" />
                      <div className="media-body">
                        <h5 className="mt-0">Jack</h5>
                        <p> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                          vulputate at, tempus viverra turpis.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  {/* Search Widget */}
                  <div className="card mb-4">
                    <h5 className="card-header">Search</h5>
                    <div className="card-body">
                      <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search for..." />
                        <span className="input-group-btn">
                          <button className="btn btn-secondary" type="button">Go!</button>
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Categories Widget */}
                  <div className="card my-4">
                    <h5 className="card-header">Categories</h5>
                    <div className="card-body">
                      <div className="row">
                        <ul className="w3-tag2">
                          <li>
                            <a href="shop.html">amet</a>
                          </li>
                          <li>
                            <a href="#">placerat</a>
                          </li>
                          <li>
                            <a href="shop.html">Proin </a>
                          </li>
                          <li>
                            <a href="#">vehicula</a>
                          </li>
                          <li>
                            <a href="#">vehicula</a>
                          </li>
                          <li>
                            <a href="shop.html">diam</a>
                          </li>
                          <li>
                            <a href="shop.html">amet</a>
                          </li>
                          <li>
                            <a href="#">placerat</a>
                          </li>
                          <li>
                            <a href="shop.html">Proin </a>
                          </li>
                          <li>
                            <a href="#">vehicula</a>
                          </li>
                          <li>
                            <a href="#">vehicula</a>
                          </li>
                          <li>
                            <a href="shop.html">velit</a>
                          </li>
                          <li>
                            <a href="shop.html">felis</a>
                          </li>
                          <li>
                            <a href="comedy.html">mauris</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* Side Widget */}
                  <div className="card my-4">
                    <h5 className="card-header">Side Widget</h5>
                    <div className="card-body">
                      Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit tortor eget felis porttitor volutpat. Proin
                      eget tortor risus.Curabitur non nulla sit.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Blog
