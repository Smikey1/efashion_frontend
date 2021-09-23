import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import GridLeft from '../components/GridLeft'
import Header from '../components/Header';

class GirlCollection extends Component {
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
            <li className="breadcrumb-item active" aria-current="page">Girl's Clothing</li>
          </ol>
        </nav>
        {/* //breadcrumbs */}
        {/* Shop */}
        <div className="innerf-pages section">
          <div className="fh-container mx-auto">
            <div className="row my-lg-5 mb-5">

              {/* grid left */}
              <GridLeft></GridLeft>
              {/* //grid left */}

              {/* grid right */}
              <div className="col-lg-9 mt-lg-0 mt-5 right-product-grid">
                {/* card group  */}
                <div className="card-group">
                  {/* card */}
                  <div className="col-lg-3 col-sm-6 p-0">
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
                  </div>
                  {/* //card */}
                  {/* card */}
                  <div className="col-lg-3 col-sm-6 p-0">
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
                  </div>
                  {/* //card */}
                  {/* card */}
                  <div className="col-lg-3 col-sm-6 p-0">
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
                  </div>
                  {/* //card */}
                  {/* card */}
                  <div className="col-lg-3 col-sm-6 p-0">
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
                  </div>
                  {/* //card */}
                  {/* //row  */}
                </div>
                {/* //card group 1*/}
                {/* card group 2 */}
                <div className="card-group my-5">
                  {/* row2 */}
                  {/* card */}
                  <div className="col-lg-3 col-sm-6 p-0">
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
                  </div>
                  {/* //card */}
                  {/* card */}
                  <div className="col-lg-3 col-sm-6 p-0">
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
                  </div>
                  {/* //card */}
                  {/* card */}
                  <div className="col-lg-3 col-sm-6 p-0">
                    <div className="card product-men p-3">
                      <div className="men-thumb-item">
                        <img src="images/pg6.jpg" alt="img" className="card-img-top" />
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
                          <p className="text-dark font-weight-bold">$25.00</p>
                          <p className="line-through">$49.99</p>
                        </div>
                      </div>
                      {/* card footer */}
                      <div className="card-footer d-flex justify-content-end">
                        <form action="#" method="post">
                          <input type="hidden" name="cmd" defaultValue="_cart" />
                          <input type="hidden" name="add" defaultValue={1} />
                          <input type="hidden" name="hub_item" defaultValue="Midi/Knee Length Party Dress" />
                          <input type="hidden" name="amount" defaultValue={25.00} />
                          <button type="submit" className="hub-cart phub-cart btn">
                            <i className="fa fa-cart-plus" aria-hidden="true" />
                          </button>
                          <a href="#" data-toggle="modal" data-target="#myModal1" />
                        </form>
                      </div>
                    </div>
                  </div>
                  {/* //card */}
                  {/* card */}
                  <div className="col-lg-3 col-sm-6 p-0">
                    <div className="card product-men p-3">
                      <div className="men-thumb-item">
                        <img src="images/pg8.jpg" alt="img" className="card-img-top" />
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
                          <p className="line-through">$19.99</p>
                        </div>
                      </div>
                      {/* card footer */}
                      <div className="card-footer d-flex justify-content-end">
                        <form action="#" method="post">
                          <input type="hidden" name="cmd" defaultValue="_cart" />
                          <input type="hidden" name="add" defaultValue={1} />
                          <input type="hidden" name="hub_item" defaultValue="Midi/Knee Length Party Dress" />
                          <input type="hidden" name="amount" defaultValue="19.99" />
                          <button type="submit" className="hub-cart phub-cart btn">
                            <i className="fa fa-cart-plus" aria-hidden="true" />
                          </button>
                          <a href="#" data-toggle="modal" data-target="#myModal1" />
                        </form>
                      </div>
                    </div>
                  </div>
                  {/* //card */}
                  {/* //card 2 */}
                </div>
                {/* //card group */}
                {/* card group  */}
                <div className="card-group">
                  {/* row1*/}
                  {/* card */}
                  <div className="col-lg-3 col-sm-6 p-0">
                    <div className="card product-men p-3">
                      <div className="men-thumb-item">
                        <img src="images/pg9.jpg" alt="img" className="card-img-top" />
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
                          <p className="line-through">$25.99</p>
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
                  </div>
                  {/* //card */}
                  {/* card */}
                  <div className="col-lg-3 col-sm-6 p-0">
                    <div className="card product-men p-3">
                      <div className="men-thumb-item">
                        <img src="images/pg10.jpg" alt="img" className="card-img-top" />
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
                          <p className="text-dark font-weight-bold">$29.99</p>
                          <p className="line-through">$34.99</p>
                        </div>
                      </div>
                      {/* card footer */}
                      <div className="card-footer d-flex justify-content-end">
                        <form action="#" method="post">
                          <input type="hidden" name="cmd" defaultValue="_cart" />
                          <input type="hidden" name="add" defaultValue={1} />
                          <input type="hidden" name="hub_item" defaultValue="Midi/Knee Length Party Dress" />
                          <input type="hidden" name="amount" defaultValue="29.99" />
                          <button type="submit" className="hub-cart phub-cart btn">
                            <i className="fa fa-cart-plus" aria-hidden="true" />
                          </button>
                          <a href="#" data-toggle="modal" data-target="#myModal1" />
                        </form>
                      </div>
                    </div>
                  </div>
                  {/* //card */}
                  {/* card */}
                  <div className="col-lg-3 col-sm-6 p-0">
                    <div className="card product-men p-3">
                      <div className="men-thumb-item">
                        <img src="images/pg11.jpg" alt="img" className="card-img-top" />
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
                          <p className="text-dark font-weight-bold">$29.99</p>
                          <p className="line-through">$36.99</p>
                        </div>
                      </div>
                      {/* card footer */}
                      <div className="card-footer d-flex justify-content-end">
                        <form action="#" method="post">
                          <input type="hidden" name="cmd" defaultValue="_cart" />
                          <input type="hidden" name="add" defaultValue={1} />
                          <input type="hidden" name="hub_item" defaultValue="Midi/Knee Length Party Dress" />
                          <input type="hidden" name="amount" defaultValue="29.99" />
                          <button type="submit" className="hub-cart phub-cart btn">
                            <i className="fa fa-cart-plus" aria-hidden="true" />
                          </button>
                          <a href="#" data-toggle="modal" data-target="#myModal1" />
                        </form>
                      </div>
                    </div>
                  </div>
                  {/* //card */}
                  {/* card */}
                  <div className="col-lg-3 col-sm-6 p-0">
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
                        <h5 className="card-title text-capitalize">Midi/Knee Length Party Dress</h5>
                        <div className="card-text d-flex justify-content-between">
                          <p className="text-dark font-weight-bold">$25.99</p>
                          <p className="line-through">$32.99</p>
                        </div>
                      </div>
                      {/* card footer */}
                      <div className="card-footer d-flex justify-content-end">
                        <form action="#" method="post">
                          <input type="hidden" name="cmd" defaultValue="_cart" />
                          <input type="hidden" name="add" defaultValue={1} />
                          <input type="hidden" name="hub_item" defaultValue="Midi/Knee Length Party Dress" />
                          <input type="hidden" name="amount" defaultValue="25.99" />
                          <button type="submit" className="hub-cart phub-cart btn">
                            <i className="fa fa-cart-plus" aria-hidden="true" />
                          </button>
                          <a href="#" data-toggle="modal" data-target="#myModal1" />
                        </form>
                      </div>
                    </div>
                  </div>
                  {/* //card */}
                  {/* //row  */}
                </div>
                {/* //card group */}
                {/* card group  */}
                <div className="card-group">
                  {/* row1*/}
                  {/* card */}
                  <div className="col-lg-3 col-sm-6 p-0">
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
                          <p className="text-dark font-weight-bold">$14.99</p>
                          <p className="line-through">$17.99</p>
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
                  </div>
                  {/* //card */}
                  {/* card */}
                  <div className="col-lg-3 col-sm-6 p-0">
                    <div className="card product-men p-3">
                      <div className="men-thumb-item">
                        <img src="images/pg6.jpg" alt="img" className="card-img-top" />
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
                          <p className="text-dark font-weight-bold">$9.99</p>
                          <p className="line-through">$15.99</p>
                        </div>
                      </div>
                      {/* card footer */}
                      <div className="card-footer d-flex justify-content-end">
                        <form action="#" method="post">
                          <input type="hidden" name="cmd" defaultValue="_cart" />
                          <input type="hidden" name="add" defaultValue={1} />
                          <input type="hidden" name="hub_item" defaultValue="Midi/Knee Length Casual Dress" />
                          <input type="hidden" name="amount" defaultValue="19.99" />
                          <button type="submit" className="hub-cart phub-cart btn">
                            <i className="fa fa-cart-plus" aria-hidden="true" />
                          </button>
                          <a href="#" data-toggle="modal" data-target="#myModal1" />
                        </form>
                      </div>
                    </div>
                  </div>
                  {/* //card */}
                  {/* card */}
                  <div className="col-lg-3 col-sm-6 p-0">
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
                          <p className="text-dark font-weight-bold">$14.99</p>
                          <p className="line-through">$20.99</p>
                        </div>
                      </div>
                      {/* card footer */}
                      <div className="card-footer d-flex justify-content-end">
                        <form action="#" method="post">
                          <input type="hidden" name="cmd" defaultValue="_cart" />
                          <input type="hidden" name="add" defaultValue={1} />
                          <input type="hidden" name="hub_item" defaultValue="Midi/Knee Length Casual Dress" />
                          <input type="hidden" name="amount" defaultValue="14.99" />
                          <button type="submit" className="hub-cart phub-cart btn">
                            <i className="fa fa-cart-plus" aria-hidden="true" />
                          </button>
                          <a href="#" data-toggle="modal" data-target="#myModal1" />
                        </form>
                      </div>
                    </div>
                  </div>
                  {/* //card */}
                  {/* card */}
                  <div className="col-lg-3 col-sm-6 p-0">
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
                          <p className="text-dark font-weight-bold">$16.99</p>
                          <p className="line-through">$24.99</p>
                        </div>
                      </div>
                      {/* card footer */}
                      <div className="card-footer d-flex justify-content-end">
                        <form action="#" method="post">
                          <input type="hidden" name="cmd" defaultValue="_cart" />
                          <input type="hidden" name="add" defaultValue={1} />
                          <input type="hidden" name="hub_item" defaultValue="Midi/Knee Length Casual Dress" />
                          <input type="hidden" name="amount" defaultValue="16.99" />
                          <button type="submit" className="hub-cart phub-cart btn">
                            <i className="fa fa-cart-plus" aria-hidden="true" />
                          </button>
                          <a href="#" data-toggle="modal" data-target="#myModal1" />
                        </form>
                      </div>
                    </div>
                  </div>
                  {/* //card */}
                  {/* //row  */}
                </div>
                {/* //card group */}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default GirlCollection
