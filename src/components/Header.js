import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <div>
                {/* header */}
        <header>
          <div className="container">
            {/* top nav */}
            <nav className="top_nav d-flex pt-3 pb-1">
              {/* logo */}
              <h1>
                <Link className="navbar-brand" to="/">eFS</Link>
              </h1>
              {/* //logo */}
              <div className="w3ls_right_nav ml-auto d-flex">
                {/* search form */}
                <form className="nav-search form-inline my-0 form-control" action="#" method="post">
                  <select className="form-control input-lg" name="category">
                    <option value="all">Search our store</option>
                    <optgroup label="Mens">
                      <option value="T-Shirts">T-Shirts</option>
                      <option value="coats-jackets">Coats &amp; Jackets</option>
                      <option value="Shirts">Shirts</option>
                      <option value="Suits & Blazers">Suits &amp; Blazers</option>
                      <option value="Jackets">Jackets</option>
                      <option value="Sweat Shirts">Trousers</option>
                    </optgroup>
                    <optgroup label="Womens">
                      <option value="Dresses">Dresses</option>
                      <option value="T-shirts">T-shirts</option>
                      <option value="skirts">Skirts</option>
                      <option value="jeans">Jeans</option>
                      <option value="Tunics">Tunics</option>
                    </optgroup>
                    <optgroup label="Girls">
                      <option value="Dresses">Dresses</option>
                      <option value="T-shirts">T-shirts</option>
                      <option value="skirts">Skirts</option>
                      <option value="jeans">Jeans</option>
                      <option value="Tops">Tops</option>
                    </optgroup>
                    <optgroup label="Boys">
                      <option value="T-Shirts">T-Shirts</option>
                      <option value="coats-jackets">Coats &amp; Jackets</option>
                      <option value="Shirts">Shirts</option>
                      <option value="Suits & Blazers">Suits &amp; Blazers</option>
                      <option value="Jackets">Jackets</option>
                      <option value="Sweat Shirts">Sweat Shirts</option>
                    </optgroup>
                  </select>
                  <input className="btn btn-outline-secondary  ml-3 my-sm-0" type="submit" defaultValue="Search" />
                </form>
                {/* search form */}
                <div className="nav-icon d-flex">
                  {/* sigin and sign up */}
                  <Link className="text-dark login_btn align-self-center mx-3" to="#myModal_btn" data-toggle="modal" data-target="#myModal_btn">
                    <i className="far fa-user" />
                  </Link>
                  {/* sigin and sign up */}
                  {/* shopping cart */}
                  <div className="cart-mainf">
                    <div className="hubcart hubcart2 cart cart box_1">
                      <form action="#" method="post">
                        <input type="hidden" name="cmd" defaultValue="_cart" />
                        <input type="hidden" name="display" defaultValue={1} />
                        <button className="btn top_hub_cart mt-1" type="submit" name="submit" value title="Cart">
                          <i className="fas fa-shopping-bag" />
                        </button>
                      </form>
                    </div>
                  </div>
                  {/* //shopping cart ends here */}
                </div>
              </div>
            </nav>
            {/* //top nav */}
            {/* bottom nav */}
            <nav className="navbar navbar-expand-lg navbar-light justify-content-center">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto text-center">
                  <li className="nav-item">
                    <Link className="nav-link  active" to="/">Home
                      <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li className="nav-item dropdown has-mega-menu" style={{position: 'static'}}>
                    <Link className="nav-link dropdown-toggle" data-toggle="dropdown" to="#" role="button" aria-haspopup="true" aria-expanded="false">Men's clothing</Link>
                    <div className="dropdown-menu" style={{width: '100%'}}>
                      <div className="px-0 container">
                        <div className="row">
                          <div className="col-md-4">
                            <Link className="dropdown-item" to="/menCollection">T-Shirts</Link>
                            <Link className="dropdown-item" to="/menCollection">Coats</Link>
                            <Link className="dropdown-item" to="/menCollection">Shirts</Link>
                            <Link className="dropdown-item" to="/menCollection">Suits &amp; Blazers</Link>
                            <Link className="dropdown-item" to="/menCollection">Jackets</Link>
                            <Link className="dropdown-item" to="/menCollection">Trousers</Link>
                          </div>
                          <div className="col-md-4">
                            <Link className="dropdown-item" to="/menCollection">T-Shirts</Link>
                            <Link className="dropdown-item" to="/menCollection">Trousers</Link>
                            <Link className="dropdown-item" to="/menCollection">Shirts</Link>
                            <Link className="dropdown-item" to="/menCollection">Suits &amp; Blazers</Link>
                            <Link className="dropdown-item" to="/menCollection">Coats &amp; Jackets</Link>
                            <Link className="dropdown-item" to="/menCollection">Jackets</Link>
                          </div>
                          <div className="col-md-4">
                            <Link className="dropdown-item" to="/menCollection">T-Shirts</Link>
                            <Link className="dropdown-item" to="/menCollection">Coats</Link>
                            <Link className="dropdown-item" to="/menCollection">Shirts</Link>
                            <Link className="dropdown-item" to="/menCollection">Suits &amp; Blazers</Link>
                            <Link className="dropdown-item" to="/menCollection">Jackets</Link>
                            <Link className="dropdown-item" to="/menCollection">Trousers</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item dropdown has-mega-menu" style={{position: 'static'}}>
                    <Link className="nav-link dropdown-toggle" data-toggle="dropdown" to="#" role="button" aria-haspopup="true" aria-expanded="false">Women's clothing</Link>
                    <div className="dropdown-menu" style={{width: '100%'}}>
                      <div className="px-0 container">
                        <div className="row">
                          <div className="col-md-4">
                            <Link className="dropdown-item" to="/womenCollection">Dresses</Link>
                            <Link className="dropdown-item" to="/womenCollection">T-shirts</Link>
                            <Link className="dropdown-item" to="/womenCollection">Skirts</Link>
                            <Link className="dropdown-item" to="/womenCollection">Jeans</Link>
                            <Link className="dropdown-item" to="/womenCollection">Tunics</Link>
                          </div>
                          <div className="col-md-4">
                            <Link className="dropdown-item" to="/womenCollection">T-shirts</Link>
                            <Link className="dropdown-item" to="/womenCollection">Dresses</Link>
                            <Link className="dropdown-item" to="/womenCollection">Tunics</Link>
                            <Link className="dropdown-item" to="/womenCollection">Skirts</Link>
                            <Link className="dropdown-item" to="/womenCollection">Jeans</Link>
                          </div>
                          <div className="col-md-4">
                            <Link className="dropdown-item" to="/womenCollection">Dresses</Link>
                            <Link className="dropdown-item" to="/womenCollection">T-shirts</Link>
                            <Link className="dropdown-item" to="/womenCollection">Skirts</Link>
                            <Link className="dropdown-item" to="/womenCollection">Jeans</Link>
                            <Link className="dropdown-item" to="/womenCollection">Tunics</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item dropdown has-mega-menu" style={{position: 'static'}}>
                    <Link className="nav-link dropdown-toggle" data-toggle="dropdown" to="#" role="button" aria-haspopup="true" aria-expanded="false">Kids Clothing</Link>
                    <div className="dropdown-menu" style={{width: '100%'}}>
                      <div className="container">
                        <div className="row w3_kids  py-3">
                          <div className="col-md-3 ">
                            <span className="bg-light">Boy's Clothing</span>
                            <Link className="dropdown-item" to="/boyCollection">T-Shirts</Link>
                            <Link className="dropdown-item" to="/boyCollection">Coats</Link>
                            <Link className="dropdown-item" to="/boyCollection">Shirts</Link>
                            <Link className="dropdown-item" to="/boyCollection">Suits &amp; Blazers</Link>
                            <Link className="dropdown-item" to="/boyCollection">Jackets</Link>
                            <Link className="dropdown-item" to="/boyCollection">Trousers</Link>
                          </div>
                          <div className="col-md-3">
                            <Link className="dropdown-item mt-4" to="/boyCollection">T-Shirts</Link>
                            <Link className="dropdown-item" to="/boyCollection">Coats</Link>
                            <Link className="dropdown-item" to="/boyCollection">Shirts</Link>
                            <Link className="dropdown-item" to="/boyCollection">Suits &amp; Blazers</Link>
                            <Link className="dropdown-item" to="/boyCollection">Jackets</Link>
                            <Link className="dropdown-item" to="/boyCollection">Trousers</Link>
                          </div>
                          <div className="col-md-3">
                            <span>Girl's Clothing</span>
                            <Link className="dropdown-item" to="/girlCollection">T-shirts</Link>
                            <Link className="dropdown-item" to="/girlCollection">Dresses</Link>
                            <Link className="dropdown-item" to="/girlCollection">Tunics</Link>
                            <Link className="dropdown-item" to="/girlCollection">Skirts</Link>
                            <Link className="dropdown-item" to="/girlCollection">Jeans</Link>
                            <Link className="dropdown-item" to="/girlCollection">Midi</Link>
                          </div>
                          <div className="col-md-3">
                            <Link className="dropdown-item  mt-4" to="/girlCollection">Tunics</Link>
                            <Link className="dropdown-item" to="/girlCollection">Skirts</Link>
                            <Link className="dropdown-item" to="/girlCollection">T-shirts</Link>
                            <Link className="dropdown-item" to="/girlCollection">Dresses</Link>
                            <Link className="dropdown-item" to="/girlCollection">Jeans</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/blog">Blog</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </nav>
            {/* //bottom nav */}
          </div>
          {/* //header container */}
        </header>
        {/* //header */}
            </div>
        )
    }
}

export default Header
