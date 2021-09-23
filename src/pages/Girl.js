import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Girl extends Component {
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
            <li className="breadcrumb-item">
              <Link to="/girlCollection">Girl's Collection</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">Single Product</li>
          </ol>
        </nav>
        {/* //breadcrumbs */}
        {/* Single */}
        <div className="innerf-pages section py-5">
          <div className="container">
            <div className="row my-sm-5">
              <div className="col-lg-4 single-right-left">
                <div className="grid images_3_of_2">
                  <div className="flexslider1">
                    <ul className="slides">
                      <li data-thumb="images/pgg1.jpg">
                        <div className="thumb-image">
                          <img src="images/pgg1.jpg" data-imagezoom="true" alt=" " className="img-fluid" /> </div>
                      </li>
                      <li data-thumb="images/pgg2.jpg">
                        <div className="thumb-image">
                          <img src="images/pgg2.jpg" data-imagezoom="true" alt=" " className="img-fluid" /> </div>
                      </li>
                      <li data-thumb="images/pgg3.jpg">
                        <div className="thumb-image">
                          <img src="images/pgg3.jpg" data-imagezoom="true" alt=" " className="img-fluid" /> </div>
                      </li>
                    </ul>
                    <div className="clearfix" />
                  </div>
                </div>
              </div>
              <div className="col-lg-8 mt-lg-0 mt-5 single-right-left simpleCart_shelfItem">
                <h3>Girls Maxi/Full Length Party Dress (Blue, Sleeveless)
                </h3>
                <div className="caption">
                  <ul className="rating-single">
                    <li>
                      <a href="#">
                        <span className="fa fa-star yellow-star" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fa fa-star yellow-star" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fa fa-star yellow-star" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fa fa-star yellow-star" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fa fa-star yellow-star" aria-hidden="true" />
                      </a>
                    </li>
                  </ul>
                  <div className="clearfix"> </div>
                  <h6>
                    $20.00</h6>
                </div>
                <div className="desc_single">
                  <h5>Description</h5>
                  <p>Pellentesque quis orci sapien. Phasellus at pfero in nunc egestas tincidunt. In dictum arcu purus,
                    ultricies tincidunt urna vehicula at. Aenean iaculis urna nec pfero scelerisque, ac ullamcorper
                    neque porta.</p>
                </div>
                <div className="d-sm-flex justify-content-between">
                  <div className="occasional">
                    <h5 className="sp_title mb-3">Highlights</h5>
                    <ul className="single_specific">
                      <li>
                        <span>Fabric</span> Net</li>
                      <li>
                        <span>Color :</span> Blue</li>
                      <li>
                        <span>Type :</span> Gown</li>
                      <li>
                        Maxi/Full Length Dress
                      </li></ul>
                  </div>
                  <div className="color-quality mt-sm-0 mt-4">
                    <h5 className="sp_title mb-3">services</h5>
                    <ul className="single_serv">
                      <li>
                        <a href="#">30 Day Return Policy</a>
                      </li>
                      <li className="mt-2">
                        <a href="#">Cash on Delivery available</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="description">
                  <h5>Check delivery, payment options and charges at your location</h5>
                  <form action="#" method="post">
                    <input type="text" placeholder="Enter pincode" required />
                    <input type="submit" defaultValue="Check" />
                  </form>
                </div>
                <div className="occasion-cart">
                  <div className="chr single-item single_page_b">
                    <form action="#" method="post">
                      <input type="hidden" name="cmd" defaultValue="_cart" />
                      <input type="hidden" name="add" defaultValue={1} />
                      <input type="hidden" name="hub_item" defaultValue=" Formal Men's Blazer" />
                      <input type="hidden" name="amount" defaultValue="15.99" />
                      <button type="submit" className="hub-cart phub-cart btn">
                        <i className="fa fa-cart-plus" aria-hidden="true" />
                      </button>
                      <a href="#" data-toggle="modal" data-target="#myModal1" />
                    </form>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        
        {/* /new_arrivals */}
        <div className="section singlep_btm pb-5">
          <div className="container">
            <div className="new_arrivals">
              <h4 className="rad-txt text-capitalize">you may also be interested in
              </h4>
              {/* card group 2 */}
              <div className="card-group my-5">
                {/* row2 */}
                {/* card */}
                <div className="card product-men p-3">
                  <div className="men-thumb-item">
                    <img src="images/pg1.jpg" alt="img" className="card-img-top" />
                    <div className="men-cart-pro">
                      <div className="inner-men-cart-pro">
                        <a href="mens.html" className="link-product-add-cart">Quick View</a>
                      </div>
                    </div>
                  </div>
                  {/* card body */}
                  <div className="card-body  py-3 px-2">
                    <h5 className="card-title text-capitalize">Black Casual Men's Blazer</h5>
                    <div className="card-text d-flex justify-content-between">
                      <p className="text-dark font-weight-bold">$90.00</p>
                      <p className="line-through">$120.00</p>
                    </div>
                  </div>
                  {/* card footer */}
                  <div className="card-footer d-flex justify-content-end">
                    <form action="#" method="post">
                      <input type="hidden" name="cmd" defaultValue="_cart" />
                      <input type="hidden" name="add" defaultValue={1} />
                      <input type="hidden" name="hub_item" defaultValue="Black Casual Men's Blazer" />
                      <input type="hidden" name="amount" defaultValue={90.00} />
                      <button type="submit" className="hub-cart phub-cart btn">
                        <i className="fa fa-cart-plus" aria-hidden="true" />
                      </button>
                      <a href="#" data-toggle="modal" data-target="#myModal1" />
                    </form>
                  </div>
                </div>
                {/* //card */}
                {/* card */}
                <div className="card product-men p-3">
                  <div className="men-thumb-item">
                    <img src="images/pg2.jpg" alt="img" className="card-img-top" />
                    <div className="men-cart-pro">
                      <div className="inner-men-cart-pro">
                        <a href="mens.html" className="link-product-add-cart">Quick View</a>
                      </div>
                    </div>
                  </div>
                  {/* card body */}
                  <div className="card-body  py-3 px-2">
                    <h5 className="card-title text-capitalize">Blue Wedding Formal Blazer</h5>
                    <div className="card-text d-flex justify-content-between">
                      <p className="text-dark font-weight-bold">$75.00</p>
                      <p className="line-through">$85.99</p>
                    </div>
                  </div>
                  {/* card footer */}
                  <div className="card-footer d-flex justify-content-end">
                    <form action="#" method="post">
                      <input type="hidden" name="cmd" defaultValue="_cart" />
                      <input type="hidden" name="add" defaultValue={1} />
                      <input type="hidden" name="hub_item" defaultValue="Blue Wedding Formal Blazer" />
                      <input type="hidden" name="amount" defaultValue={75.00} />
                      <button type="submit" className="hub-cart phub-cart btn">
                        <i className="fa fa-cart-plus" aria-hidden="true" />
                      </button>
                      <a href="#" data-toggle="modal" data-target="#myModal1" />
                    </form>
                  </div>
                </div>
                {/* //card */}
                {/* card */}
                <div className="card product-men p-3">
                  <div className="men-thumb-item">
                    <img src="images/pg3.jpg" alt="img" className="card-img-top" />
                    <div className="men-cart-pro">
                      <div className="inner-men-cart-pro">
                        <a href="mens.html" className="link-product-add-cart">Quick View</a>
                      </div>
                    </div>
                  </div>
                  {/* card body */}
                  <div className="card-body  py-3 px-2">
                    <h5 className="card-title text-capitalize">Gray Wedding Formal Blazer</h5>
                    <div className="card-text d-flex justify-content-between">
                      <p className="text-dark font-weight-bold">$59.00</p>
                      <p className="line-through">$75.00</p>
                    </div>
                  </div>
                  {/* card footer */}
                  <div className="card-footer d-flex justify-content-end">
                    <form action="#" method="post">
                      <input type="hidden" name="cmd" defaultValue="_cart" />
                      <input type="hidden" name="add" defaultValue={1} />
                      <input type="hidden" name="hub_item" defaultValue="Gray Wedding Formal Blazer" />
                      <input type="hidden" name="amount" defaultValue={59.00} />
                      <button type="submit" className="hub-cart phub-cart btn">
                        <i className="fa fa-cart-plus" aria-hidden="true" />
                      </button>
                      <a href="#" data-toggle="modal" data-target="#myModal1" />
                    </form>
                  </div>
                </div>
                {/* //card */}
                {/* card */}
                <div className="card product-men p-3">
                  <div className="men-thumb-item">
                    <img src="images/pg5.jpg" alt="img" className="card-img-top" />
                    <div className="men-cart-pro">
                      <div className="inner-men-cart-pro">
                        <a href="mens.html" className="link-product-add-cart">Quick View</a>
                      </div>
                    </div>
                  </div>
                  {/* card body */}
                  <div className="card-body  py-3 px-2">
                    <h5 className="card-title text-capitalize">Blue Casual Men's Blazer</h5>
                    <div className="card-text d-flex justify-content-between">
                      <p className="text-dark font-weight-bold">$65.99</p>
                      <p className="line-through">$85.99</p>
                    </div>
                  </div>
                  {/* card footer */}
                  <div className="card-footer d-flex justify-content-end">
                    <form action="#" method="post">
                      <input type="hidden" name="cmd" defaultValue="_cart" />
                      <input type="hidden" name="add" defaultValue={1} />
                      <input type="hidden" name="hub_item" defaultValue="Casual Men's Blazer" />
                      <input type="hidden" name="amount" defaultValue={65.00} />
                      <button type="submit" className="hub-cart phub-cart btn">
                        <i className="fa fa-cart-plus" aria-hidden="true" />
                      </button>
                      <a href="#" data-toggle="modal" data-target="#myModal1" />
                    </form>
                  </div>
                </div>
                {/* //card */}
                {/* //card 2 */}
              </div>
              {/* //card group */}
              {/*//new_arrivals*/}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Girl
