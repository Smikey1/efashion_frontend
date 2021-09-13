import React, { Component } from 'react'
import axios from 'axios'
import UserBannerSlider from '../components/UserBannerSlider'
import { NavLink } from 'react-router-dom'

class Home extends Component {
  state = {
        myproducts: []
    }
    componentDidMount() {
        axios.get("http://localhost:90/product/get")
            .then((res) => {
                
                this.setState({
                    myproducts: res.data.data
                })
                console.log(this.state.myproducts)
            })
    }

    render() {
    return (
      <div>
          <UserBannerSlider></UserBannerSlider>

         {/* Shop */}
        <div className="innerf-pages section">
          <div className="fh-container mx-auto">
            <div className="row my-lg-5 mb-5">
              
              {/* grid left */}
              <div className="side-bar col-lg-3">
                {/*preference */}
                <div className="left-side">
                  <h3 className="shopf-sear-headits-sear-head">
                    Categories</h3>
                  <ul>
                    <li>
                      <input type="checkbox" className="checked" name="cat1" id="cat1" />
                      <label htmlFor="cat1">Fashion</label>
                    </li>
                    <li>
                      <input type="checkbox" className="checked" name="cat2" id="cat2" />
                      <label htmlFor="cat2">Popular</label>
                    </li>
                    <li>
                      <input type="checkbox" className="checked" name="cat3" id="cat3" />
                      <label htmlFor="cat3">Trending</label>
                    </li>
                    <li>
                      <input type="checkbox" className="checked" name="cat4" id="cat4" />
                      <label htmlFor="cat4">Sort by popularity</label>
                    </li>
                  </ul>
                </div>
                {/* // preference */}
                <div className="search-hotel">
                  <h3 className="shopf-sear-headits-sear-head">
                    <span>Brand</span> in focus</h3>
                  <form action="#" method="post">
                    <input type="search" placeholder="search here" name="search" required />
                    <input type="submit" defaultValue="Search" />
                  </form>
                </div>
                {/* price range */}
                <div className="range">
                  <h3 className="shopf-sear-headits-sear-head">
                    <span>Price</span> range</h3>
                  <ul className="dropdown-menu6">
                    <li>
                      <div id="slider-range" />
                      <input type="text" id="amount" style={{border: 0, color: '#ffffff', fontWeight: 'normal'}} />
                    </li>
                  </ul>
                </div>
                {/* //price range */}
                {/*preference */}
                <div className="left-side">
                  <h3 className="shopf-sear-headits-sear-head">
                    <span>latest</span> arrivals</h3>
                  <ul>
                    <li>
                      <input type="checkbox" className="checked" name="arr1" id="arr1" />
                      <label htmlFor="arr1">last 30 days</label>
                    </li>
                    <li>
                      <input type="checkbox" className="checked" name="arr2" id="arr2" />
                      <label htmlFor="arr2">last 90 days</label>
                    </li>
                    <li>
                      <input type="checkbox" className="checked" name="arr3" id="arr3" />
                      <label htmlFor="arr3">last 150 days</label>
                    </li>
                  </ul>
                </div>
                {/* // preference */}
                {/* discounts */}
                <div className="left-side">
                  <h3 className="shopf-sear-headits-sear-head">Sizes</h3>
                  <ul>
                    <li>
                      <input type="checkbox" className="checked" name="size1" id="size1" />
                      <label htmlFor="size1">XS</label>
                    </li>
                    <li>
                      <input type="checkbox" className="checked" name="size2" id="size2" />
                      <label htmlFor="size2">S</label>
                    </li>
                    <li>
                      <input type="checkbox" className="checked" name="size3" id="size3" />
                      <label htmlFor="size3">M</label>
                    </li>
                    <li>
                      <input type="checkbox" className="checked" name="size4" id="size4" />
                      <label htmlFor="size4">L</label>
                    </li>
                    <li>
                      <input type="checkbox" className="checked" name="size5" id="size5" />
                      <label htmlFor="size5">XL</label>
                    </li>
                    <li>
                      <input type="checkbox" className="checked" name="size6" id="size6" />
                      <label htmlFor="size6">XXL</label>
                    </li>
                    <li>
                      <input type="checkbox" className="checked" name="size7" id="size7" />
                      <label htmlFor="size7">XXXL</label>
                    </li>
                  </ul>
                </div>
                {/* //discounts */}
                {/* Binding */}
                <div className="left-side">
                  <h3 className="shopf-sear-headits-sear-head">Color</h3>
                  <div className="d-flex">
                    <ul>
                      <li>
                        <input type="checkbox" className="checked" name="color1" id="color1" />
                        <label htmlFor="color1">Black</label>
                      </li>
                      <li>
                        <input type="checkbox" className="checked" name="color2" id="color2" />
                        <label htmlFor="color2">Blue</label>
                      </li>
                      <li>
                        <input type="checkbox" className="checked" name="color3" id="color3" />
                        <label htmlFor="color3">Red</label>
                      </li>
                      <li>
                        <input type="checkbox" className="checked" name="color4" id="color4" />
                        <label htmlFor="color4">Yellow</label>
                      </li>
                      <li>
                        <input type="checkbox" className="checked" name="color5" id="color5" />
                        <label htmlFor="color5">White</label>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <input type="checkbox" className="checked" name="color6" id="color6" />
                        <label htmlFor="color6">Green</label>
                      </li>
                      <li>
                        <input type="checkbox" className="checked" name="color7" id="color7" />
                        <label htmlFor="color7">Multi</label>
                      </li>
                      <li>
                        <input type="checkbox" className="checked" name="color8" id="color8" />
                        <label htmlFor="color8">Purple</label>
                      </li>
                      <li>
                        <input type="checkbox" className="checked" name="color9" id="color9" />
                        <label htmlFor="color9">Gold</label>
                      </li>
                      <li>
                        <input type="checkbox" className="checked" name="color10" id="color10" />
                        <label htmlFor="color10">Orange</label>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* //Binding */}
                {/* discounts */}
                <div className="left-side">
                  <h3 className="shopf-sear-headits-sear-head">Discount</h3>
                  <ul>
                    <li>
                      <input type="checkbox" className="checked" name="dis1" id="dis1" />
                      <label htmlFor="dis1">5% - 20%</label>
                    </li>
                    <li>
                      <input type="checkbox" className="checked" name="dis2" id="dis2" />
                      <label htmlFor="dis2">20% - 40%</label>
                    </li>
                    <li>
                      <input type="checkbox" className="dis3" name="dis3" id="dis3" />
                      <label htmlFor="dis3">40% - 60%</label>
                    </li>
                    <li>
                      <input type="checkbox" className="checked" name="dis4" id="dis4" />
                      <label htmlFor="dis4">60% or more</label>
                    </li>
                  </ul>
                </div>
                {/* //discounts */}
                {/* reviews */}
                <div className="customer-rev left-side">
                  <h3 className="shopf-sear-headits-sear-head">Customer Review</h3>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <span>5.0</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star-o" aria-hidden="true" />
                        <span>4.0</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star-half-o" aria-hidden="true" />
                        <i className="fa fa-star-o" aria-hidden="true" />
                        <span>3.5</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star-o" aria-hidden="true" />
                        <i className="fa fa-star-o" aria-hidden="true" />
                        <span>3.0</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star-half-o" aria-hidden="true" />
                        <i className="fa fa-star-o" aria-hidden="true" />
                        <i className="fa fa-star-o" aria-hidden="true" />
                        <span>2.5</span>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* //reviews */}
              </div>
              {/* //grid left */}

              {/* grid right */}
              <div className="col-lg-9 mt-lg-0 mt-5 right-product-grid">
                {/* card group  */}
                <div className="card-group">
                  {
          this.state.myproducts.map((product) => {
            return (
              // {/* card */}
                  <div className="col-lg-3 col-sm-6 p-0">
                    <div className="card product-men p-3">
                      <div className="men-thumb-item">
                        <img src="images/pm1.jpg" alt="img" className="card-img-top" />
                        <div className="men-cart-pro">
                          <div className="inner-men-cart-pro">
                            <NavLink to={"/product/" + product._id} className="link-product-add-cart">Quick View</NavLink>
                          </div>
                        </div>
                      </div>
                      {/* card body */}
                      <div className="card-body  py-3 px-2">
                        <h5 className="card-title text-capitalize">{product.productName}</h5>
                        <div className="card-text d-flex justify-content-between">
                          <p className="text-dark font-weight-bold">Rs. {product.productPrice}</p>
                          <p className="line-through">Rs. {product.productCuttedPrice}</p>
                        </div>
                      </div>
                      {/* card footer */}
                      <div className="card-footer d-flex justify-content-end">
                        <form action="#" method="post">
                          <input type="hidden" name="cmd" defaultValue="_cart" />
                          <input type="hidden" name="add" defaultValue={1} />
                          <input type="hidden" name="hub_item" defaultValue="Solid Formal Black Shirt" />
                          <input type="hidden" name="amount" defaultValue={40.00} />
                          <button type="submit" className="hub-cart phub-cart btn">
                            <i className="fa fa-cart-plus" aria-hidden="true" />
                          </button>
                          <a href="#" data-toggle="modal" data-target="#myModal1" />
                        </form>
                      </div>
                    </div>
                  </div>
                  // {/* //card */}
            )
          })
        }
        
                  {/* card group 2 */}
                  <div className="card-group my-5">
                    {
         this.state.myproducts.map((product) => {
            return (
              // {/* card */}
                  <div className="col-lg-3 col-sm-6 p-0">
                    <div className="card product-men p-3">
                      <div className="men-thumb-item">
                        <img src="images/pm1.jpg" alt="img" className="card-img-top" />
                        <div className="men-cart-pro">
                          <div className="inner-men-cart-pro">
                            <NavLink to={"/product/" + product._id} className="link-product-add-cart">Quick View</NavLink>
                          </div>
                        </div>
                      </div>
                      {/* card body */}
                      <div className="card-body  py-3 px-2">
                        <h5 className="card-title text-capitalize">{product.productName}</h5>
                        <div className="card-text d-flex justify-content-between">
                          <p className="text-dark font-weight-bold">Rs. {product.productPrice}</p>
                          <p className="line-through">Rs. {product.productCuttedPrice}</p>
                        </div>
                      </div>
                      {/* card footer */}
                      <div className="card-footer d-flex justify-content-end">
                        <form action="#" method="post">
                          <input type="hidden" name="cmd" defaultValue="_cart" />
                          <input type="hidden" name="add" defaultValue={1} />
                          <input type="hidden" name="hub_item" defaultValue="Solid Formal Black Shirt" />
                          <input type="hidden" name="amount" defaultValue={40.00} />
                          <button type="submit" className="hub-cart phub-cart btn">
                            <i className="fa fa-cart-plus" aria-hidden="true" />
                          </button>
                          <a href="#" data-toggle="modal" data-target="#myModal1" />
                        </form>
                      </div>
                    </div>
                  </div>
                  // {/* //card */}
            )
          })
        }
                  </div>
                  {/* //card group */}

                  {/* card group  */}
                  <div className="card-group">
                    {
          this.state.myproducts.map((product) => {
            return (
              // {/* card */}
                  <div className="col-lg-3 col-sm-6 p-0">
                    <div className="card product-men p-3">
                      <div className="men-thumb-item">
                        <img src="images/pm1.jpg" alt="img" className="card-img-top" />
                        <div className="men-cart-pro">
                          <div className="inner-men-cart-pro">
                            <NavLink to={"/product/" + product._id} className="link-product-add-cart">Quick View</NavLink>
                          </div>
                        </div>
                      </div>
                      {/* card body */}
                      <div className="card-body  py-3 px-2">
                        <h5 className="card-title text-capitalize">{product.productName}</h5>
                        <div className="card-text d-flex justify-content-between">
                          <p className="text-dark font-weight-bold">Rs. {product.productPrice}</p>
                          <p className="line-through">Rs. {product.productCuttedPrice}</p>
                        </div>
                      </div>
                      {/* card footer */}
                      <div className="card-footer d-flex justify-content-end">
                        <form action="#" method="post">
                          <input type="hidden" name="cmd" defaultValue="_cart" />
                          <input type="hidden" name="add" defaultValue={1} />
                          <input type="hidden" name="hub_item" defaultValue="Solid Formal Black Shirt" />
                          <input type="hidden" name="amount" defaultValue={40.00} />
                          <button type="submit" className="hub-cart phub-cart btn">
                            <i className="fa fa-cart-plus" aria-hidden="true" />
                          </button>
                          <a href="#" data-toggle="modal" data-target="#myModal1" />
                        </form>
                      </div>
                    </div>
                  </div>
                  // {/* //card */}
            )
          })
        }
                    {/* //row  */}
                  </div>
                  {/* //card group */}
                
                </div>
              </div>
            
            </div>
          </div> 
         
        </div>
          {/*services*/}
        <div className="agileits-services" id="services">
          <div className="no-gutters agileits-services-row row">
            <div className="col-lg-3 col-sm-6 agileits-services-grids p-sm-5 p-3">
              <span className="fas fa-sync-alt p-4" />
              <h4 className="mt-2 mb-3">30 days replacement</h4>
            </div>
            <div className="col-lg-3 col-sm-6 agileits-services-grids p-sm-5 p-3">
              <span className="fas fa-gift p-4" />
              <h4 className="mt-2 mb-3">Gift Card</h4>
            </div>
            <div className="col-lg-3 col-sm-6 agileits-services-grids p-sm-5 p-3">
              <span className="fas fa-lock p-4" />
              <h4 className="mt-2 mb-3">secure payments</h4>
            </div>
            <div className="col-lg-3 col-sm-6 agileits-services-grids p-sm-5 p-3">
              <span className="fas fa-shipping-fast p-4" />
              <h4 className="mt-2 mb-3">free shipping</h4>
            </div>
          </div>
        </div>
        {/* //services*/}

        {/* about */}
        <div className="row no-gutters pb-5">
          <div className="col-sm-4">
            <div className="hovereffect">
              <img className="img-fluid" src="images/a1.jpg" alt="" />
              <div className="overlay">
                <h5>women's fashion</h5>
                <a className="info" href="women.html">Shop Now</a>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="hovereffect">
              <img className="img-fluid" src="images/a2.jpg" alt="" />
              <div className="overlay">
                <h5>men's fashion</h5>
                <a className="info" href="men.html">Shop Now</a>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="hovereffect">
              <img className="img-fluid" src="images/a3.jpg" alt="" />
              <div className="overlay">
                <h5>kid's fashion</h5>
                <a className="info" href="girls.html">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
        {/* //about */}

        {/* product tabs */}
        <section className="tabs_pro py-md-5 pt-sm-3 pb-5">
          <h5 className="head_agileinfo text-center text-capitalize pb-5">
            <span>s</span>mart clothing</h5>
          <div className="tabs tabs-style-line pt-md-5">
            <nav className="container">
              <ul id="clothing-nav" className="nav nav-tabs tabs-style-line" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" href="#women" id="women-tab" role="tab" data-toggle="tab" aria-controls="women" aria-expanded="true">Women's Fashion</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#men" role="tab" id="men-tab" data-toggle="tab" aria-controls="men">Men's Fashion
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#girl" role="tab" id="girl-tab" data-toggle="tab" aria-controls="girl">Girl's Fashion</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#boy" role="tab" id="boy-tab" data-toggle="tab" aria-controls="boy">Boy's Fashion</a>
                </li>
              </ul>
            </nav>
            {/* Content Panel */}
            <div id="clothing-nav-content" className="tab-content py-sm-5">
              <div role="tabpanel" className="tab-pane fade show active" id="women" aria-labelledby="women-tab">
                <div id="owl-demo" className="owl-carousel text-center">
                  <div className="item">
                    {/* card */}
                    <div className="card product-men p-3">
                      <div className="men-thumb-item">
                        <img src="images/pf1.jpg" alt="img" className="card-img-top" />
                        <div className="men-cart-pro">
                          <div className="inner-men-cart-pro">
                            <a href="womens.html" className="link-product-add-cart">Quick View</a>
                          </div>
                        </div>
                      </div>
                      {/* card body */}
                      <div className="card-body  py-3 px-2">
                        <h5 className="card-title text-capitalize">Self Design Women's Tunic</h5>
                        <div className="card-text d-flex justify-content-between">
                          <p className="text-dark font-weight-bold">$28.00</p>
                          <p className="line-through">$35.99</p>
                        </div>
                      </div>
                      {/* card footer */}
                      <div className="card-footer d-flex justify-content-end">
                        <form action="#" method="post">
                          <input type="hidden" name="cmd" defaultValue="_cart" />
                          <input type="hidden" name="add" defaultValue={1} />
                          <input type="hidden" name="hub_item" defaultValue="Self Design Women's Tunic" />
                          <input type="hidden" name="amount" defaultValue={28.00} />
                          <button type="submit" className="hub-cart phub-cart btn">
                            <i className="fa fa-cart-plus" aria-hidden="true" />
                          </button>
                          <a href="#" data-toggle="modal" data-target="#myModal1" />
                        </form>
                      </div>
                    </div>
                    {/* //card */}
                  </div>
                  <div className="item">
                    {/* card */}
                    <div className="card product-men p-3">
                      <div className="men-thumb-item">
                        <img src="images/pf2.jpg" alt="img" className="card-img-top" />
                        <div className="men-cart-pro">
                          <div className="inner-men-cart-pro">
                            <a href="womens.html" className="link-product-add-cart">Quick View</a>
                          </div>
                        </div>
                      </div>
                      {/* card body */}
                      <div className="card-body  py-3 px-2">
                        <h5 className="card-title text-capitalize">Embroidered Women's Tunic</h5>
                        <div className="card-text d-flex justify-content-between">
                          <p className="text-dark font-weight-bold">$24.99</p>
                          <p className="line-through">$29.99</p>
                        </div>
                      </div>
                      {/* card footer */}
                      <div className="card-footer d-flex justify-content-end">
                        <form action="#" method="post">
                          <input type="hidden" name="cmd" defaultValue="_cart" />
                          <input type="hidden" name="add" defaultValue={1} />
                          <input type="hidden" name="hub_item" defaultValue="Embroidered Women's Tunic" />
                          <input type="hidden" name="amount" defaultValue="24.99" />
                          <button type="submit" className="hub-cart phub-cart btn">
                            <i className="fa fa-cart-plus" aria-hidden="true" />
                          </button>
                          <a href="#" data-toggle="modal" data-target="#myModal1" />
                        </form>
                      </div>
                    </div>
                    {/* //card */}
                  </div>
                  <div className="item">

                    {/* card */}
                    <div className="card product-men p-3">
                      <div className="men-thumb-item">
                        <img src="images/pf3.jpg" alt="img" className="card-img-top" />
                        <div className="men-cart-pro">
                          <div className="inner-men-cart-pro">
                            <a href="womens.html" className="link-product-add-cart">Quick View</a>
                          </div>
                        </div>
                      </div>
                      {/* card body */}
                      <div className="card-body  py-3 px-2">
                        <h5 className="card-title text-capitalize">Sleeveless Women's Top</h5>
                        <div className="card-text d-flex justify-content-between">
                          <p className="text-dark font-weight-bold">$20.99</p>
                          <p className="line-through">$26.99</p>
                        </div>
                      </div>
                      {/* card footer */}
                      <div className="card-footer d-flex justify-content-end">
                        <form action="#" method="post">
                          <input type="hidden" name="cmd" defaultValue="_cart" />
                          <input type="hidden" name="add" defaultValue={1} />
                          <input type="hidden" name="hub_item" defaultValue="Sleeveless Women's Top" />
                          <input type="hidden" name="amount" defaultValue="20.99" />
                          <button type="submit" className="hub-cart phub-cart btn">
                            <i className="fa fa-cart-plus" aria-hidden="true" />
                          </button>
                          <a href="#" data-toggle="modal" data-target="#myModal1" />
                        </form>
                      </div>
                    </div>
                    {/* //card */}
                  </div>

                  <div className="item">
                    {/* card */}
                    <div className="card product-men p-3">
                      <div className="men-thumb-item">
                        <img src="images/pf9.jpg" alt="img" className="card-img-top" />
                        <div className="men-cart-pro">
                          <div className="inner-men-cart-pro">
                            <a href="womens.html" className="link-product-add-cart">Quick View</a>
                          </div>
                        </div>
                      </div>
                      {/* card body */}
                      <div className="card-body  py-3 px-2">
                        <h5 className="card-title text-capitalize">Slim Women's Blue Jeans</h5>
                        <div className="card-text d-flex justify-content-between">
                          <p className="text-dark font-weight-bold">$19.99</p>
                          <p className="line-through">$24.99</p>
                        </div>
                      </div>
                      {/* card footer */}
                      <div className="card-footer d-flex justify-content-end">
                        <form action="#" method="post">
                          <input type="hidden" name="cmd" defaultValue="_cart" />
                          <input type="hidden" name="add" defaultValue={1} />
                          <input type="hidden" name="hub_item" defaultValue="Men's Hooded Blue T-Shirt" />
                          <input type="hidden" name="amount" defaultValue="19.99" />
                          <button type="submit" className="hub-cart phub-cart btn">
                            <i className="fa fa-cart-plus" aria-hidden="true" />
                          </button>
                          <a href="#" data-toggle="modal" data-target="#myModal1" />
                        </form>
                      </div>
                    </div>
                    {/* //card */}
                  </div>

                  <div className="item">
                    {/* card */}
                    <div className="card product-men p-3">
                      <div className="men-thumb-item">
                        <img src="images/pf11.jpg" alt="img" className="card-img-top" />
                        <div className="men-cart-pro">
                          <div className="inner-men-cart-pro">
                            <a href="womens.html" className="link-product-add-cart">Quick View</a>
                          </div>
                        </div>
                      </div>
                      {/* card body */}
                      <div className="card-body  py-3 px-2">
                        <h5 className="card-title text-capitalize">Slim Women's Blue Jeans</h5>
                        <div className="card-text d-flex justify-content-between">
                          <p className="text-dark font-weight-bold">$14.99</p>
                          <p className="line-through">$18.99</p>
                        </div>
                      </div>
                      {/* card footer */}
                      <div className="card-footer d-flex justify-content-end">
                        <form action="#" method="post">
                          <input type="hidden" name="cmd" defaultValue="_cart" />
                          <input type="hidden" name="add" defaultValue={1} />
                          <input type="hidden" name="hub_item" defaultValue="Slim Women's Blue Jeans" />
                          <input type="hidden" name="amount" defaultValue="14.99" />
                          <button type="submit" className="hub-cart phub-cart btn">
                            <i className="fa fa-cart-plus" aria-hidden="true" />
                          </button>
                          <a href="#" data-toggle="modal" data-target="#myModal1" />
                        </form>
                      </div>
                    </div>
                    {/* //card */}
                  </div>

                  <div className="item">
                    <div className="product-men p-3 text-center">
                      <img src="images/p2.png" className="img-responsive" alt="" />
                      <a href="women.html" className="btn btn-lg bg-info text-white">view more</a>
                    </div>
                  </div>
                </div>
              </div>
              <div role="tabpanel" className="tab-pane fade" id="men" aria-labelledby="men-tab">
                <div id="owl-demo1" className="owl-carousel text-center">
                  
                  <div className="item">
                    {/* card */}
                    <div className="card product-men p-3">
                      <div className="men-thumb-item">
                        <img src="images/pm1.jpg" alt="img" className="card-img-top" />
                        <div className="men-cart-pro">
                          <div className="inner-men-cart-pro">
                            <a href="mens.html" className="link-product-add-cart">Quick View</a>
                          </div>
                        </div>
                      </div>
                      {/* card body */}
                      <div className="card-body  py-3 px-2">
                        <h5 className="card-title text-capitalize">Solid Formal Black Shirt</h5>
                        <div className="card-text d-flex justify-content-between">
                          <p className="text-dark font-weight-bold">$40.00</p>
                          <p className="line-through">$50.99</p>
                        </div>
                      </div>
                      {/* card footer */}
                      <div className="card-footer d-flex justify-content-end">
                        <form action="#" method="post">
                          <input type="hidden" name="cmd" defaultValue="_cart" />
                          <input type="hidden" name="add" defaultValue={1} />
                          <input type="hidden" name="hub_item" defaultValue="Solid Formal Black Shirt" />
                          <input type="hidden" name="amount" defaultValue={40.00} />
                          <button type="submit" className="hub-cart phub-cart btn">
                            <i className="fa fa-cart-plus" aria-hidden="true" />
                          </button>
                          <a href="#" data-toggle="modal" data-target="#myModal1" />
                        </form>
                      </div>
                    </div>
                    {/* //card */}
                  </div>

                  <div className="item">
                    {/* card */}
                    <div className="card product-men p-3">
                      <div className="men-thumb-item">
                        <img src="images/pm2.jpg" alt="img" className="card-img-top" />
                        <div className="men-cart-pro">
                          <div className="inner-men-cart-pro">
                            <a href="mens.html" className="link-product-add-cart">Quick View</a>
                          </div>
                        </div>
                      </div>
                      {/* card body */}
                      <div className="card-body  py-3 px-2">
                        <h5 className="card-title text-capitalize">Solid Formal Brown Shirt</h5>
                        <div className="card-text d-flex justify-content-between">
                          <p className="text-dark font-weight-bold">$24.99</p>
                          <p className="line-through">$35.99</p>
                        </div>
                      </div>
                      {/* card footer */}
                      <div className="card-footer d-flex justify-content-end">
                        <form action="#" method="post">
                          <input type="hidden" name="cmd" defaultValue="_cart" />
                          <input type="hidden" name="add" defaultValue={1} />
                          <input type="hidden" name="hub_item" defaultValue="Solid Formal Brown Shirt" />
                          <input type="hidden" name="amount" defaultValue="24.99" />
                          <button type="submit" className="hub-cart phub-cart btn">
                            <i className="fa fa-cart-plus" aria-hidden="true" />
                          </button>
                          <a href="#" data-toggle="modal" data-target="#myModal1" />
                        </form>
                      </div>
                    </div>
                    {/* //card */}
                  </div>

                  {/* card */}
                  <div className="item">
                    <div className="card product-men p-3">
                      <div className="men-thumb-item">
                        <img src="images/pm11.jpg" alt="img" className="card-img-top" />
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
                          <p className="text-dark font-weight-bold">$20.00</p>
                          <p className="line-through">$25.00</p>
                        </div>
                      </div>
                      {/* card footer */}
                      <div className="card-footer d-flex justify-content-end">
                        <form action="#" method="post">
                          <input type="hidden" name="cmd" defaultValue="_cart" />
                          <input type="hidden" name="add" defaultValue={1} />
                          <input type="hidden" name="hub_item" defaultValue="Black Casual Men's Blazer" />
                          <input type="hidden" name="amount" defaultValue={20.00} />
                          <button type="submit" className="hub-cart phub-cart btn">
                            <i className="fa fa-cart-plus" aria-hidden="true" />
                          </button>
                          <a href="#" data-toggle="modal" data-target="#myModal1" />
                        </form>
                      </div>
                    </div>
                    {/* //card */}
                  </div>
                  
                  <div className="item">
                    {/* card */}
                    <div className="card product-men p-3">
                      <div className="men-thumb-item">
                        <img src="images/pt1.jpg" alt="img" className="card-img-top" />
                        <div className="men-cart-pro">
                          <div className="inner-men-cart-pro">
                            <a href="mens.html" className="link-product-add-cart">Quick View</a>
                          </div>
                        </div>
                      </div>
                      {/* card body */}
                      <div className="card-body  py-3 px-2">
                        <h5 className="card-title text-capitalize">Slim Fit Men's Black Trousers</h5>
                        <div className="card-text d-flex justify-content-between">
                          <p className="text-dark font-weight-bold">$14.99</p>
                          <p className="line-through">$18.99</p>
                        </div>
                      </div>
                      {/* card footer */}
                      <div className="card-footer d-flex justify-content-end">
                        <form action="#" method="post">
                          <input type="hidden" name="cmd" defaultValue="_cart" />
                          <input type="hidden" name="add" defaultValue={1} />
                          <input type="hidden" name="hub_item" defaultValue="Slim Fit Men's Black Trousers" />
                          <input type="hidden" name="amount" defaultValue="18.99" />
                          <button type="submit" className="hub-cart phub-cart btn">
                            <i className="fa fa-cart-plus" aria-hidden="true" />
                          </button>
                          <a href="#" data-toggle="modal" data-target="#myModal1" />
                        </form>
                      </div>
                    </div>
                    {/* //card */}
                  </div>
                  <div className="item">
                    {/* card */}
                    <div className="card product-men p-3">
                      <div className="men-thumb-item">
                        <img src="images/pt2.jpg" alt="img" className="card-img-top" />
                        <div className="men-cart-pro">
                          <div className="inner-men-cart-pro">
                            <a href="mens.html" className="link-product-add-cart">Quick View</a>
                          </div>
                        </div>
                      </div>
                      {/* card body */}
                      <div className="card-body  py-3 px-2">
                        <h5 className="card-title text-capitalize">Slim Fit Men's Denim Jeans</h5>
                        <div className="card-text d-flex justify-content-between">
                          <p className="text-dark font-weight-bold">$24.99</p>
                          <p className="line-through">$35.99</p>
                        </div>
                      </div>
                      {/* card footer */}
                      <div className="card-footer d-flex justify-content-end">
                        <form action="#" method="post">
                          <input type="hidden" name="cmd" defaultValue="_cart" />
                          <input type="hidden" name="add" defaultValue={1} />
                          <input type="hidden" name="hub_item" defaultValue="Slim Fit Men's Denim Jeans" />
                          <input type="hidden" name="amount" defaultValue="24.99" />
                          <button type="submit" className="hub-cart phub-cart btn">
                            <i className="fa fa-cart-plus" aria-hidden="true" />
                          </button>
                          <a href="#" data-toggle="modal" data-target="#myModal1" />
                        </form>
                      </div>
                    </div>
                    {/* //card */}
                  </div>
                  <div className="item">
                    {/* card */}
                    <div className=" card product-men p-3 ">
                      <div className="men-thumb-item ">
                        <img src="images/pt3.jpg " alt="img " className="card-img-top " />
                        <div className="men-cart-pro ">
                          <div className="inner-men-cart-pro ">
                            <a href="mens.html " className="link-product-add-cart ">Quick View</a>
                          </div>
                        </div>
                      </div>
                      {/* card body */}
                      <div className="card-body py-3 px-2 ">
                        <h5 className="card-title text-capitalize ">Slim Fit Men's Gold Trousers</h5>
                        <div className="card-text d-flex justify-content-between">
                          <p className="text-dark font-weight-bold ">$14.99</p>
                          <p className="line-through ">$18.99</p>
                        </div>
                      </div>
                      {/* card footer */}
                      <div className="card-footer d-flex justify-content-end">
                        <form action="#" method="post">
                          <input type="hidden" name="cmd" defaultValue="_cart" />
                          <input type="hidden" name="add" defaultValue={1} />
                          <input type="hidden" name="hub_item" defaultValue="Slim Fit Men's Gold Trousers" />
                          <input type="hidden" name="amount" defaultValue="14.99" />
                          <button type="submit" className="hub-cart phub-cart btn">
                            <i className="fa fa-cart-plus" aria-hidden="true" />
                          </button>
                          <a href="#" data-toggle="modal" data-target="#myModal1" />
                        </form>
                      </div>
                    </div>
                    {/* //card */}
                  </div>
                  <div className="item">
                    <div className="product-men p-3 text-center">
                      <img src="images/p2.png" className="img-responsive" alt="" />
                      <a href="men.html" className="btn btn-lg bg-info text-white">view more</a>
                    </div>
                    {/* //card */}
                  </div>
                </div>
              </div>
              <div role="tabpanel" className="tab-pane fade" id="girl" aria-labelledby="girl-tab">
                <div id="owl-demo2" className="owl-carousel text-center">
                  <div className="item">
                    {/* card */}
                    <div className="card product-men p-3">
                      <div className="men-thumb-item">
                        <img src="images/pg1.jpg" alt="img" className="card-img-top" />
                        <div className="men-cart-pro">
                          <div className="inner-men-cart-pro">
                            <a href="girl.html" className="link-product-add-cart">Quick View</a>
                          </div>
                        </div>
                      </div>
                      {/* card body */}
                      <div className="card-body  py-3 px-2">
                        <h5 className="card-title text-capitalize">Midi/Knee Length Casual Dress</h5>
                        <div className="card-text d-flex justify-content-between">
                          <p className="text-dark font-weight-bold">$20.00</p>
                          <p className="line-through">$39.99</p>
                        </div>
                      </div>
                      {/* card footer */}
                      <div className="card-footer d-flex justify-content-end">
                        <form action="#" method="post">
                          <input type="hidden" name="cmd" defaultValue="_cart" />
                          <input type="hidden" name="add" defaultValue={1} />
                          <input type="hidden" name="hub_item" defaultValue="Midi/Knee Length Casual Dress" />
                          <input type="hidden" name="amount" defaultValue={20.00} />
                          <button type="submit" className="hub-cart phub-cart btn">
                            <i className="fa fa-cart-plus" aria-hidden="true" />
                          </button>
                          <a href="#" data-toggle="modal" data-target="#myModal1" />
                        </form>
                      </div>
                    </div>
                    {/* //card */}
                  </div>
                  <div className="item">
                    {/* card */}
                    <div className="card product-men p-3">
                      <div className="men-thumb-item">
                        <img src="images/pg2.jpg" alt="img" className="card-img-top" />
                        <div className="men-cart-pro">
                          <div className="inner-men-cart-pro">
                            <a href="girl.html" className="link-product-add-cart">Quick View</a>
                          </div>
                        </div>
                      </div>
                      {/* card body */}
                      <div className="card-body  py-3 px-2">
                        <h5 className="card-title text-capitalize">Midi/Knee Length Casual Dress</h5>
                        <div className="card-text d-flex justify-content-between">
                          <p className="text-dark font-weight-bold">$24.99</p>
                          <p className="line-through">$34.99</p>
                        </div>
                      </div>
                      {/* card footer */}
                      <div className="card-footer d-flex justify-content-end">
                        <form action="#" method="post">
                          <input type="hidden" name="cmd" defaultValue="_cart" />
                          <input type="hidden" name="add" defaultValue={1} />
                          <input type="hidden" name="hub_item" defaultValue="Midi/Knee Length Casual Dress" />
                          <input type="hidden" name="amount" defaultValue="24.99" />
                          <button type="submit" className="hub-cart phub-cart btn">
                            <i className="fa fa-cart-plus" aria-hidden="true" />
                          </button>
                          <a href="#" data-toggle="modal" data-target="#myModal1" />
                        </form>
                      </div>
                    </div>
                    {/* //card */}
                  </div>
                  <div className="item">
                    {/* card */}
                    <div className="card product-men p-3">
                      <div className="men-thumb-item">
                        <img src="images/pg3.jpg" alt="img" className="card-img-top" />
                        <div className="men-cart-pro">
                          <div className="inner-men-cart-pro">
                            <a href="girl.html" className="link-product-add-cart">Quick View</a>
                          </div>
                        </div>
                      </div>
                      {/* card body */}
                      <div className="card-body  py-3 px-2">
                        <h5 className="card-title text-capitalize">Midi/Knee Length Party Dress</h5>
                        <div className="card-text d-flex justify-content-between">
                          <p className="text-dark font-weight-bold">$14.99</p>
                          <p className="line-through">$27.99</p>
                        </div>
                      </div>
                      {/* card footer */}
                      <div className="card-footer d-flex justify-content-end">
                        <form action="#" method="post">
                          <input type="hidden" name="cmd" defaultValue="_cart" />
                          <input type="hidden" name="add" defaultValue={1} />
                          <input type="hidden" name="hub_item" defaultValue="Midi/Knee Length Party Dress" />
                          <input type="hidden" name="amount" defaultValue="14.99" />
                          <button type="submit" className="hub-cart phub-cart btn">
                            <i className="fa fa-cart-plus" aria-hidden="true" />
                          </button>
                          <a href="#" data-toggle="modal" data-target="#myModal1" />
                        </form>
                      </div>
                    </div>
                    {/* //card */}
                  </div>
                  <div className="item">
                    {/* card */}
                    <div className="card product-men p-3 out_w3">
                      <div className="men-thumb-item position-relative">
                        <img src="images/pg7.jpg" alt="img" className="card-img-top" />
                        <span className="px-2 position-absolute">out of stock</span>
                      </div>
                      {/* card body */}
                      <div className="card-body  py-3 px-2">
                        <h5 className="card-title text-capitalize">Girls Party Top and Skirt Set</h5>
                        <div className="card-text d-flex justify-content-between">
                          <p className="text-dark font-weight-bold">$19.00</p>
                          <p className="line-through">$25.00</p>
                        </div>
                      </div>
                      {/* card footer */}
                      <div className="card-footer d-flex justify-content-end">
                        <button type="submit" className="hub-cart phub-cart btn">
                          <i className="fa fa-cart-plus" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                    {/* //card */}
                  </div>
                  <div className="item">
                    {/* card */}
                    <div className="card product-men p-3">
                      <div className="men-thumb-item">
                        <img src="images/pg4.jpg" alt="img" className="card-img-top" />
                        <div className="men-cart-pro">
                          <div className="inner-men-cart-pro">
                            <a href="girl.html" className="link-product-add-cart">Quick View</a>
                          </div>
                        </div>
                      </div>
                      {/* card body */}
                      <div className="card-body  py-3 px-2">
                        <h5 className="card-title text-capitalize">Girl's Full Length Party Dress </h5>
                        <div className="card-text d-flex justify-content-between">
                          <p className="text-dark font-weight-bold">$20.00</p>
                          <p className="line-through">$35.00</p>
                        </div>
                      </div>
                      {/* card footer */}
                      <div className="card-footer d-flex justify-content-end">
                        <form action="#" method="post">
                          <input type="hidden" name="cmd" defaultValue="_cart" />
                          <input type="hidden" name="add" defaultValue={1} />
                          <input type="hidden" name="hub_item" defaultValue="Full Length Party Dress" />
                          <input type="hidden" name="amount" defaultValue={20.00} />
                          <button type="submit" className="hub-cart phub-cart btn">
                            <i className="fa fa-cart-plus" aria-hidden="true" />
                          </button>
                          <a href="#" data-toggle="modal" data-target="#myModal1" />
                        </form>
                      </div>
                    </div>
                    {/* //card */}
                  </div>
                  <div className="item">
                    {/* card */}
                    <div className="card product-men p-3">
                      <div className="men-thumb-item">
                        <img src="images/pg5.jpg" alt="img" className="card-img-top" />
                        <div className="men-cart-pro">
                          <div className="inner-men-cart-pro">
                            <a href="girl.html" className="link-product-add-cart">Quick View</a>
                          </div>
                        </div>
                      </div>
                      {/* card body */}
                      <div className="card-body  py-3 px-2">
                        <h5 className="card-title text-capitalize">Midi/Knee Length Party Dress</h5>
                        <div className="card-text d-flex justify-content-between">
                          <p className="text-dark font-weight-bold">$18.00</p>
                          <p className="line-through">$25.00</p>
                        </div>
                      </div>
                      {/* card footer */}
                      <div className="card-footer d-flex justify-content-end">
                        <form action="#" method="post">
                          <input type="hidden" name="cmd" defaultValue="_cart" />
                          <input type="hidden" name="add" defaultValue={1} />
                          <input type="hidden" name="hub_item" defaultValue="Midi/Knee Length Party Dress" />
                          <input type="hidden" name="amount" defaultValue={18.00} />
                          <button type="submit" className="hub-cart phub-cart btn">
                            <i className="fa fa-cart-plus" aria-hidden="true" />
                          </button>
                          <a href="#" data-toggle="modal" data-target="#myModal1" />
                        </form>
                      </div>
                    </div>
                    {/* //card */}
                  </div>
                  <div className="item">
                    <div className="product-men p-3 text-center">
                      <img src="images/p2.png" className="img-responsive" alt="" />
                      <a href="girls.html" className="btn btn-lg bg-info text-white">view more</a>
                    </div>
                  </div>
                </div>
              </div>
              <div role="tabpanel" className="tab-pane fade" id="boy" aria-labelledby="boy-tab">
                <div id="owl-demo3" className="owl-carousel text-center">
                  <div className="item">
                    {/* card */}
                    <div className="card product-men p-3">
                      <div className="men-thumb-item">
                        <img src="images/pb1.jpg" alt="img" className="card-img-top" />
                        <div className="men-cart-pro">
                          <div className="inner-men-cart-pro">
                            <a href="boy.html" className="link-product-add-cart">Quick View</a>
                          </div>
                        </div>
                      </div>
                      {/* card body */}
                      <div className="card-body  py-3 px-2">
                        <h5 className="card-title text-capitalize">Shirt, Waistcoat and Pant Set</h5>
                        <div className="card-text d-flex justify-content-between">
                          <p className="text-dark font-weight-bold">$21.00</p>
                          <p className="line-through">$39.99</p>
                        </div>
                      </div>
                      {/* card footer */}
                      <div className="card-footer d-flex justify-content-end">
                        <form action="#" method="post">
                          <input type="hidden" name="cmd" defaultValue="_cart" />
                          <input type="hidden" name="add" defaultValue={1} />
                          <input type="hidden" name="hub_item" defaultValue="Shirt, Waistcoat and Pant Set" />
                          <input type="hidden" name="amount" defaultValue={21.00} />
                          <button type="submit" className="hub-cart phub-cart btn">
                            <i className="fa fa-cart-plus" aria-hidden="true" />
                          </button>
                          <a href="#" data-toggle="modal" data-target="#myModal1" />
                        </form>
                      </div>
                    </div>
                    {/* //card */}
                  </div>
                  <div className="item">
                    {/* card */}
                    <div className="card product-men p-3">
                      <div className="men-thumb-item">
                        <img src="images/pb2.jpg" alt="img" className="card-img-top" />
                        <div className="men-cart-pro">
                          <div className="inner-men-cart-pro">
                            <a href="boy.html" className="link-product-add-cart">Quick View</a>
                          </div>
                        </div>
                      </div>
                      {/* card body */}
                      <div className="card-body  py-3 px-2">
                        <h5 className="card-title text-capitalize">Festive Kurta and Pyjama Set</h5>
                        <div className="card-text d-flex justify-content-between">
                          <p className="text-dark font-weight-bold">$19.99</p>
                          <p className="line-through">$29.99</p>
                        </div>
                      </div>
                      {/* card footer */}
                      <div className="card-footer d-flex justify-content-end">
                        <form action="#" method="post">
                          <input type="hidden" name="cmd" defaultValue="_cart" />
                          <input type="hidden" name="add" defaultValue={1} />
                          <input type="hidden" name="hub_item" defaultValue="Festive Kurta and Pyjama Set" />
                          <input type="hidden" name="amount" defaultValue="19.99" />
                          <button type="submit" className="hub-cart phub-cart btn">
                            <i className="fa fa-cart-plus" aria-hidden="true" />
                          </button>
                          <a href="#" data-toggle="modal" data-target="#myModal1" />
                        </form>
                      </div>
                    </div>
                    {/* //card */}
                  </div>
                  <div className="item">
                    {/* card */}
                    <div className="card product-men p-3">
                      <div className="men-thumb-item">
                        <img src="images/pb3.jpg" alt="img" className="card-img-top" />
                        <div className="men-cart-pro">
                          <div className="inner-men-cart-pro">
                            <a href="boy.html" className="link-product-add-cart">Quick View</a>
                          </div>
                        </div>
                      </div>
                      {/* card body */}
                      <div className="card-body  py-3 px-2">
                        <h5 className="card-title text-capitalize">Boys Casual Shirt and Jeans</h5>
                        <div className="card-text d-flex justify-content-between">
                          <p className="text-dark font-weight-bold">$17.99</p>
                          <p className="line-through">$24.99</p>
                        </div>
                      </div>
                      {/* card footer */}
                      <div className="card-footer d-flex justify-content-end">
                        <form action="#" method="post">
                          <input type="hidden" name="cmd" defaultValue="_cart" />
                          <input type="hidden" name="add" defaultValue={1} />
                          <input type="hidden" name="hub_item" defaultValue="Boys Casual Shirt and Jeans" />
                          <input type="hidden" name="amount" defaultValue="24.99" />
                          <button type="submit" className="hub-cart phub-cart btn">
                            <i className="fa fa-cart-plus" aria-hidden="true" />
                          </button>
                          <a href="#" data-toggle="modal" data-target="#myModal1" />
                        </form>
                      </div>
                    </div>
                    {/* //card */}
                  </div>
                  <div className="item">
                    {/* card */}
                    <div className="card product-men p-3 out_w3">
                      <div className="men-thumb-item position-relative">
                        <img src="images/pb7.jpg" alt="img" className="card-img-top" />
                        <span className="px-2 position-absolute">out of stock</span>
                      </div>
                      {/* card body */}
                      <div className="card-body  py-3 px-2">
                        <h5 className="card-title text-capitalize">Casual Blazer,Shirt and Trouser Set</h5>
                        <div className="card-text d-flex justify-content-between">
                          <p className="text-dark font-weight-bold">$18.00</p>
                          <p className="line-through">$26.00</p>
                        </div>
                      </div>
                      {/* card footer */}
                      <div className="card-footer d-flex justify-content-end">
                        <button type="submit" className="hub-cart phub-cart btn">
                          <i className="fa fa-cart-plus" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                    {/* //card */}
                  </div>
                  <div className="item">
                    {/* card */}
                    <div className="card product-men p-3">
                      <div className="men-thumb-item">
                        <img src="images/pb4.jpg" alt="img" className="card-img-top" />
                        <div className="men-cart-pro">
                          <div className="inner-men-cart-pro">
                            <a href="boy.html" className="link-product-add-cart">Quick View</a>
                          </div>
                        </div>
                      </div>
                      {/* card body */}
                      <div className="card-body  py-3 px-2">
                        <h5 className="card-title text-capitalize">Dungaree Casual Solid Denim</h5>
                        <div className="card-text d-flex justify-content-between">
                          <p className="text-dark font-weight-bold">$19.99</p>
                          <p className="line-through">$24.99</p>
                        </div>
                      </div>
                      {/* card footer */}
                      <div className="card-footer d-flex justify-content-end">
                        <form action="#" method="post">
                          <input type="hidden" name="cmd" defaultValue="_cart" />
                          <input type="hidden" name="add" defaultValue={1} />
                          <input type="hidden" name="hub_item" defaultValue="Dungaree Casual Solid Denim" />
                          <input type="hidden" name="amount" defaultValue="19.99" />
                          <button type="submit" className="hub-cart phub-cart btn">
                            <i className="fa fa-cart-plus" aria-hidden="true" />
                          </button>
                          <a href="#" data-toggle="modal" data-target="#myModal1" />
                        </form>
                      </div>
                    </div>
                    {/* //card */}
                  </div>
                  <div className="item">
                    {/* card */}
                    <div className="card product-men p-3">
                      <div className="men-thumb-item">
                        <img src="images/pb5.jpg" alt="img" className="card-img-top" />
                        <div className="men-cart-pro">
                          <div className="inner-men-cart-pro">
                            <a href="boy.html" className="link-product-add-cart">Quick View</a>
                          </div>
                        </div>
                      </div>
                      {/* card body */}
                      <div className="card-body  py-3 px-2">
                        <h5 className="card-title text-capitalize">Boy's Casual Blue T-Shirt</h5>
                        <div className="card-text d-flex justify-content-between">
                          <p className="text-dark font-weight-bold">$15.00</p>
                          <p className="line-through">$20.00</p>
                        </div>
                      </div>
                      {/* card footer */}
                      <div className="card-footer d-flex justify-content-end">
                        <form action="#" method="post">
                          <input type="hidden" name="cmd" defaultValue="_cart" />
                          <input type="hidden" name="add" defaultValue={1} />
                          <input type="hidden" name="hub_item" defaultValue="Boy's Casual Blue T-Shirt" />
                          <input type="hidden" name="amount" defaultValue={15.00} />
                          <button type="submit" className="hub-cart phub-cart btn">
                            <i className="fa fa-cart-plus" aria-hidden="true" />
                          </button>
                          <a href="#" data-toggle="modal" data-target="#myModal1" />
                        </form>
                      </div>
                    </div>
                    {/* //card */}
                  </div>
                  <div className="item">
                    {/* card */}
                    <div className="card product-men p-3">
                      <div className="men-thumb-item">
                        <img src="images/pb6.jpg" alt="img" className="card-img-top" />
                        <div className="men-cart-pro">
                          <div className="inner-men-cart-pro">
                            <a href="boy.html" className="link-product-add-cart">Quick View</a>
                          </div>
                        </div>
                      </div>
                      {/* card body */}
                      <div className="card-body  py-3 px-2">
                        <h5 className="card-title text-capitalize">Boy's Casual Grey T-Shirt</h5>
                        <div className="card-text d-flex justify-content-between">
                          <p className="text-dark font-weight-bold">$10.00</p>
                          <p className="line-through">$25.00</p>
                        </div>
                      </div>
                      {/* card footer */}
                      <div className="card-footer d-flex justify-content-end">
                        <form action="#" method="post">
                          <input type="hidden" name="cmd" defaultValue="_cart" />
                          <input type="hidden" name="add" defaultValue={1} />
                          <input type="hidden" name="hub_item" defaultValue="Boy's Casual Grey T-Shirt" />
                          <input type="hidden" name="amount" defaultValue={10.00} />
                          <button type="submit" className="hub-cart phub-cart btn">
                            <i className="fa fa-cart-plus" aria-hidden="true" />
                          </button>
                          <a href="#" data-toggle="modal" data-target="#myModal1" />
                        </form>
                      </div>
                    </div>
                    {/* //card */}
                  </div>
                  <div className="item">
                    {/* card */}
                    <div className="card product-men p-3">
                      <div className="men-thumb-item">
                        <img src="images/pb8.jpg" alt="img" className="card-img-top" />
                        <div className="men-cart-pro">
                          <div className="inner-men-cart-pro">
                            <a href="boy.html" className="link-product-add-cart">Quick View</a>
                          </div>
                        </div>
                      </div>
                      {/* card body */}
                      <div className="card-body  py-3 px-2">
                        <h5 className="card-title text-capitalize">Casual Shirt and Denim Jeans</h5>
                        <div className="card-text d-flex justify-content-between">
                          <p className="text-dark font-weight-bold">$15.99</p>
                          <p className="line-through">$25.99</p>
                        </div>
                      </div>
                      {/* card footer */}
                      <div className="card-footer d-flex justify-content-end">
                        <form action="#" method="post">
                          <input type="hidden" name="cmd" defaultValue="_cart" />
                          <input type="hidden" name="add" defaultValue={1} />
                          <input type="hidden" name="hub_item" defaultValue="Casual Shirt and Denim Jeans" />
                          <input type="hidden" name="amount" defaultValue="15.99" />
                          <button type="submit" className="hub-cart phub-cart btn">
                            <i className="fa fa-cart-plus" aria-hidden="true" />
                          </button>
                          <a href="#" data-toggle="modal" data-target="#myModal1" />
                        </form>
                      </div>
                    </div>
                    {/* //card */}
                  </div>
                  <div className="item">
                    {/* card */}
                    <div className="card product-men p-3">
                      <div className="men-thumb-item">
                        <img src="images/pb9.jpg" alt="img" className="card-img-top" />
                        <div className="men-cart-pro">
                          <div className="inner-men-cart-pro">
                            <a href="boy.html" className="link-product-add-cart">Quick View</a>
                          </div>
                        </div>
                      </div>
                      {/* card body */}
                      <div className="card-body  py-3 px-2">
                        <h5 className="card-title text-capitalize">Festive Kurta And Pyjama Set</h5>
                        <div className="card-text d-flex justify-content-between">
                          <p className="text-dark font-weight-bold">$18.00</p>
                          <p className="line-through">$25.00</p>
                        </div>
                      </div>
                      {/* card footer */}
                      <div className="card-footer d-flex justify-content-end">
                        <form action="#" method="post">
                          <input type="hidden" name="cmd" defaultValue="_cart" />
                          <input type="hidden" name="add" defaultValue={1} />
                          <input type="hidden" name="hub_item" defaultValue="Festive Kurta And Pyjama Set" />
                          <input type="hidden" name="amount" defaultValue={18.00} />
                          <button type="submit" className="hub-cart phub-cart btn">
                            <i className="fa fa-cart-plus" aria-hidden="true" />
                          </button>
                          <a href="#" data-toggle="modal" data-target="#myModal1" />
                        </form>
                      </div>
                    </div>
                    {/* //card */}
                  </div>
                  <div className="item">
                    <div className="product-men p-3 text-center">
                      <img src="images/p2.png" className="img-responsive" alt="" />
                      <a href="boys.html" className="btn btn-lg bg-info text-white">view more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* //product tabs */}

        {/* insta posts */}
        <section className="py-lg-5">
          {/* insta posts */}

          <h5 className="head_agileinfo text-center text-capitalize pb-5">
            <span>s</span>hop on insta</h5>
          <div className="gallery row no-gutters pt-lg-5">
            <div className="col-lg-2 col-sm-4 col-6 gallery-item">
              <img src="images/i1.jpg" className="img-fluid" alt="" />
              <div className="gallery-item-info">
                <ul>
                  <li className="gallery-item-likes">
                    <i className="fas fa-heart" /> 56</li>
                  <li className="gallery-item-comments">
                    <i className="fas fa-comment" /> 2</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-6 gallery-item">
              <img src="images/i2.jpg" className="img-fluid" alt="" />
              <div className="gallery-item-info">
                <ul>
                  <li className="gallery-item-likes">
                    <i className="fas fa-heart" /> 89</li>
                  <li className="gallery-item-comments">
                    <i className="fas fa-comment" /> 5</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-6 gallery-item">
              <img src="images/i3.jpg" className="img-fluid" alt="" />
              <div className="gallery-item-info">
                <ul>
                  <li className="gallery-item-likes">
                    <i className="fas fa-heart" /> 42</li>
                  <li className="gallery-item-comments">
                    <i className="fas fa-comment" /> 1</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-6 gallery-item">
              <img src="images/i4.jpg" className="img-fluid" alt="" />
              <div className="gallery-item-info">
                <ul>
                  <li className="gallery-item-likes">
                    <i className="fas fa-heart" /> 38</li>
                  <li className="gallery-item-comments">
                    <i className="fas fa-comment" /> 0</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-6 gallery-item">
              <img src="images/i5.jpg" className="img-fluid" alt="" />
              <div className="gallery-item-info">
                <ul>
                  <li className="gallery-item-likes">
                    <i className="fas fa-heart" /> 38</li>
                  <li className="gallery-item-comments">
                    <i className="fas fa-comment" /> 0</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-6 gallery-item">
              <img src="images/i6.jpg" className="img-fluid" alt="" />
              <div className="gallery-item-info">
                <ul>
                  <li className="gallery-item-likes">
                    <i className="fas fa-heart" /> 38</li>
                  <li className="gallery-item-comments">
                    <i className="fas fa-comment" /> 0</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="gallery row no-gutters pb-5">
            <div className="col-lg-2 col-sm-4 col-6 gallery-item">
              <img src="images/i7.jpg" className="img-fluid" alt="" />
              <div className="gallery-item-info">
                <ul>
                  <li className="gallery-item-likes">
                    <i className="fas fa-heart" /> 56</li>
                  <li className="gallery-item-comments">
                    <i className="fas fa-comment" /> 2</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-6 gallery-item">
              <img src="images/i8.jpg" className="img-fluid" alt="" />
              <div className="gallery-item-info">
                <ul>
                  <li className="gallery-item-likes">
                    <i className="fas fa-heart" /> 89</li>
                  <li className="gallery-item-comments">
                    <i className="fas fa-comment" /> 5</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-6 gallery-item">
              <img src="images/i9.jpg" className="img-fluid" alt="" />
              <div className="gallery-item-info">
                <ul>
                  <li className="gallery-item-likes">
                    <i className="fas fa-heart" /> 42</li>
                  <li className="gallery-item-comments">
                    <i className="fas fa-comment" /> 1</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-6 gallery-item">
              <img src="images/i10.jpg" className="img-fluid" alt="" />
              <div className="gallery-item-info">
                <ul>
                  <li className="gallery-item-likes">
                    <i className="fas fa-heart" /> 38</li>
                  <li className="gallery-item-comments">
                    <i className="fas fa-comment" /> 0</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-6 gallery-item">
              <img src="images/i11.jpg" className="img-fluid" alt="" />
              <div className="gallery-item-info">
                <ul>
                  <li className="gallery-item-likes">
                    <i className="fas fa-heart" /> 38</li>
                  <li className="gallery-item-comments">
                    <i className="fas fa-comment" /> 0</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-6 gallery-item">
              <img src="images/i12.jpg" className="img-fluid" alt="" />
              <div className="gallery-item-info">
                <ul>
                  <li className="gallery-item-likes">
                    <i className="fas fa-heart" /> 38</li>
                  <li className="gallery-item-comments">
                    <i className="fas fa-comment" /> 0</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* //insta posts */}

      </div>  // end of main div
      
    );

   }
}

export default Home