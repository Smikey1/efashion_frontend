import React, { Component } from 'react'

class GridLeft extends Component {
    render() {
        return (
            <>
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
                                <input type="text" id="amount" style={{ border: 0, color: '#ffffff', fontWeight: 'normal' }} />
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
            </>
        )
    }
}

export default GridLeft
