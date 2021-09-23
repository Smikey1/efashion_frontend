import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import BlogRightComponent from '../components/BlogRightComponent';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Header from '../components/Header';

class Blog extends Component {
  render() {
    return (
      <div>
        <Header />
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
                      <h5 className="card-title font-weight-bold">A Selection of T-shirts</h5>
                      <p className="card-text">
                        It’s wise to prioritize your search with a category, and we have a vibrant selection of Harley vintage t-shirts online. You can scoop up a delightful variety of thrift vintage t-shirts for youth online by keeping a close eye on our line ups.

                        Prioritizing your search with a t-shirt category will help you create a compelling collection of hard-to-find vintage t-shirts. We can help you scoop up some of the most fabulous and iconic vintage Harley tees online, the perfect present for biker and Harley lovers!

                        Knitwear & Cozy Outerwear
                        Knitwear is another selection where you can make the most of your love for vintage fashion. We have a delightfully functional roundup of used vintage men’s sweaters online. You can create a stellar wardrobe of timeless and intensely comfortable knitwear and outerwear staple to beat the cold in style.

                        Our lineup of gently used vintage women hoodies will make you the envy of all every time you step outside flaunting our vintage treasures. You can also scoop up a voguishly chic variety of thrift sweatshirts online to style up your vintage knitwear and outwear with fabulous combinations!</p>
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

                    <ContactForm></ContactForm>


                    <div className="media py-3">
                      <img className="mr-3" src="images/m.png" alt="Generic placeholder image" />
                      <div className="media-body">
                        <h5 className="mt-0">Michael</h5>
                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                          vulputate at, tempus viverra turpis.</p>
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

                <BlogRightComponent></BlogRightComponent>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Blog
