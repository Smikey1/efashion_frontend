import axios from 'axios'
import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

class Header extends Component {
  state = {
    teams: [],
    selectedTeam: "",
    selectedItemId: "",
    product: {}
  };

  componentDidMount() {

  }
  selectChangeHandler = (e) => {
    const productName = e.target.value
    this.setState({ selectedTeam: e.target.value })
    axios.get("http://localhost:90/product/fetch/" + productName)
      .then(res => {
        const id = res.data.productId
        this.setState({ selectedItemId: id })

        // props.history.replace("/product/" + productId)
      })
      .catch()
  }
  // fetchProduct = (e) => {
  //   e.preventDefault()
  //   axios.get("http://localhost:90/product/fetch/" + this.state.selectedTeam)
  //     .then(res => {
  //       const productId = res.data.productId

  //       props.history.replace("/product/" + productId)
  //     })
  //     .catch()

  // }


  render() {
    const token = localStorage.getItem("token")
    if (token) {
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
                  <form className="nav-search form-inline my-0 form-control" >

                    <select className="form-control input-lg" name="category"
                      value={this.state.selectedTeam}
                      onChange={(e) => this.selectChangeHandler(e)}
                      >
                      {this.state.teams.map((team) => <option key={team.value} value={team.value}>{team.display}</option>)}

                      <option value="all">Search our store</option>
                      <optgroup label="Jewelry">
                        <option value="Carcanet">Carcanet</option>
                        <option value="Pearl">Pearl</option>
                        <option value="Bangle">Bangle</option>
                        <option value="Necklace">Necklace</option>
                        <option value="Panas">Panas</option>
                        <option value="Laida">Laida</option>
                      </optgroup>
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
                    <NavLink to={"/product/" + this.state.selectedItemId}><button className="btn btn-outline-secondary  ml-3 my-sm-0" type="submit">Search</button></NavLink>
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
                        <Link to="/checkout"> <button className="btn top_hub_cart mt-1" type="submit" name="submit" value title="Cart">
                          <i className="fas fa-shopping-bag" />
                        </button>  </Link>
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
                    <li className="nav-item">
                      <Link className="nav-link" to="/productCollection">Store</Link>
                    </li>
                    <li className="nav-item dropdown has-mega-menu" style={{ position: 'static' }}>
                      <Link className="nav-link dropdown-toggle" data-toggle="dropdown" to="#" role="button" aria-haspopup="true" aria-expanded="false">Men's clothing</Link>
                      <div className="dropdown-menu" style={{ width: '100%' }}>
                        <div className="px-0 container">
                          <div className="row">
                            <div className="col-md-4">
                              <Link className="dropdown-item" to="/productCollection">T-Shirts</Link>
                              <Link className="dropdown-item" to="/productCollection">Coats</Link>
                              <Link className="dropdown-item" to="/productCollection">Shirts</Link>
                              <Link className="dropdown-item" to="/productCollection">Suits &amp; Blazers</Link>
                              <Link className="dropdown-item" to="/productCollection">Jackets</Link>
                              <Link className="dropdown-item" to="/productCollection">Trousers</Link>
                            </div>
                            <div className="col-md-4">
                              <Link className="dropdown-item" to="/productCollection">T-Shirts</Link>
                              <Link className="dropdown-item" to="/productCollection">Trousers</Link>
                              <Link className="dropdown-item" to="/productCollection">Shirts</Link>
                              <Link className="dropdown-item" to="/productCollection">Suits &amp; Blazers</Link>
                              <Link className="dropdown-item" to="/productCollection">Coats &amp; Jackets</Link>
                              <Link className="dropdown-item" to="/productCollection">Jackets</Link>
                            </div>
                            <div className="col-md-4">
                              <Link className="dropdown-item" to="/productCollection">T-Shirts</Link>
                              <Link className="dropdown-item" to="/productCollection">Coats</Link>
                              <Link className="dropdown-item" to="/productCollection">Shirts</Link>
                              <Link className="dropdown-item" to="/productCollection">Suits &amp; Blazers</Link>
                              <Link className="dropdown-item" to="/productCollection">Jackets</Link>
                              <Link className="dropdown-item" to="/productCollection">Trousers</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item dropdown has-mega-menu" style={{ position: 'static' }}>
                      <Link className="nav-link dropdown-toggle" data-toggle="dropdown" to="#"
                        role="button" aria-haspopup="true" aria-expanded="false">Women's clothing</Link>
                      <div className="dropdown-menu" style={{ width: '100%' }}>
                        <div className="px-0 container">
                          <div className="row">
                            <div className="col-md-4">
                              <Link className="dropdown-item" to="productCollection/womenCollection/Kurtha">Kurtha</Link>
                              <Link className="dropdown-item" to="/womenCollection/Kurtha">T-shirts</Link>
                              <Link className="dropdown-item" to="/womenCollection/Kurtha">Skirts</Link>
                              <Link className="dropdown-item" to="/womenCollection/Kurtha">Jeans</Link>
                              <Link className="dropdown-item" to="/womenCollection/Kurtha">Tunics</Link>
                            </div>
                            <div className="col-md-4">
                              <Link className="dropdown-item" to="/productCollection">T-shirts</Link>
                              <Link className="dropdown-item" to="/productCollection">Dresses</Link>
                              <Link className="dropdown-item" to="/productCollection">Tunics</Link>
                              <Link className="dropdown-item" to="/productCollection">Skirts</Link>
                              <Link className="dropdown-item" to="/productCollection">Jeans</Link>
                            </div>
                            <div className="col-md-4">
                              <Link className="dropdown-item" to="/productCollection">Dresses</Link>
                              <Link className="dropdown-item" to="/productCollection">T-shirts</Link>
                              <Link className="dropdown-item" to="/productCollection">Skirts</Link>
                              <Link className="dropdown-item" to="/productCollection">Jeans</Link>
                              <Link className="dropdown-item" to="/productCollection">Tunics</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item dropdown has-mega-menu" style={{ position: 'static' }}>
                      <Link className="nav-link dropdown-toggle" data-toggle="dropdown" to="#" role="button" aria-haspopup="true" aria-expanded="false">Kids Clothing</Link>
                      <div className="dropdown-menu" style={{ width: '100%' }}>
                        <div className="container">
                          <div className="row w3_kids  py-3">
                            <div className="col-md-3 ">
                              <span className="bg-light">Boy's Clothing</span>
                              <Link className="dropdown-item" to="/productCollection">T-Shirts</Link>
                              <Link className="dropdown-item" to="/productCollection">Coats</Link>
                              <Link className="dropdown-item" to="/productCollection">Shirts</Link>
                              <Link className="dropdown-item" to="/productCollection">Suits &amp; Blazers</Link>
                              <Link className="dropdown-item" to="/productCollection">Jackets</Link>
                              <Link className="dropdown-item" to="/productCollection">Trousers</Link>
                            </div>
                            <div className="col-md-3">
                              <Link className="dropdown-item mt-4" to="/productCollection">T-Shirts</Link>
                              <Link className="dropdown-item" to="/productCollection">Coats</Link>
                              <Link className="dropdown-item" to="/productCollection">Shirts</Link>
                              <Link className="dropdown-item" to="/productCollection">Suits &amp; Blazers</Link>
                              <Link className="dropdown-item" to="/productCollection">Jackets</Link>
                              <Link className="dropdown-item" to="/productCollection">Trousers</Link>
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
                      <Link className="nav-link" to="/profile">Profile</Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to="/wishlist">Wishlist</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/blogCollection">Blog</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/faq">FAQ</Link>
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
                  <button className="btn btn-outline-secondary  ml-3 my-sm-0" type="submit"  >Search</button>
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
                      <Link to="/checkout"> <button className="btn top_hub_cart mt-1" type="submit" name="submit" value title="Cart">
                        <i className="fas fa-shopping-bag" />
                      </button>  </Link>
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
                  <li className="nav-item dropdown has-mega-menu" style={{ position: 'static' }}>
                    <Link className="nav-link dropdown-toggle" data-toggle="dropdown" to="#" role="button" aria-haspopup="true" aria-expanded="false">Men's clothing</Link>
                    <div className="dropdown-menu" style={{ width: '100%' }}>
                      <div className="px-0 container">
                        <div className="row">
                          <div className="col-md-4">
                            <Link className="dropdown-item" to="/productCollection">T-Shirts</Link>
                            <Link className="dropdown-item" to="/productCollection">Coats</Link>
                            <Link className="dropdown-item" to="/productCollection">Shirts</Link>
                            <Link className="dropdown-item" to="/productCollection">Suits &amp; Blazers</Link>
                            <Link className="dropdown-item" to="/productCollection">Jackets</Link>
                            <Link className="dropdown-item" to="/productCollection">Trousers</Link>
                          </div>
                          <div className="col-md-4">
                            <Link className="dropdown-item" to="/productCollection">T-Shirts</Link>
                            <Link className="dropdown-item" to="/productCollection">Trousers</Link>
                            <Link className="dropdown-item" to="/productCollection">Shirts</Link>
                            <Link className="dropdown-item" to="/productCollection">Suits &amp; Blazers</Link>
                            <Link className="dropdown-item" to="/productCollection">Coats &amp; Jackets</Link>
                            <Link className="dropdown-item" to="/productCollection">Jackets</Link>
                          </div>
                          <div className="col-md-4">
                            <Link className="dropdown-item" to="/productCollection">T-Shirts</Link>
                            <Link className="dropdown-item" to="/productCollection">Coats</Link>
                            <Link className="dropdown-item" to="/productCollection">Shirts</Link>
                            <Link className="dropdown-item" to="/productCollection">Suits &amp; Blazers</Link>
                            <Link className="dropdown-item" to="/productCollection">Jackets</Link>
                            <Link className="dropdown-item" to="/productCollection">Trousers</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item dropdown has-mega-menu" style={{ position: 'static' }}>
                    <Link className="nav-link dropdown-toggle" data-toggle="dropdown" to="#" role="button" aria-haspopup="true" aria-expanded="false">Women's clothing</Link>
                    <div className="dropdown-menu" style={{ width: '100%' }}>
                      <div className="px-0 container">
                        <div className="row">
                          <div className="col-md-4">
                            <Link className="dropdown-item" to="/productCollection">Dresses</Link>
                            <Link className="dropdown-item" to="/productCollection">T-shirts</Link>
                            <Link className="dropdown-item" to="/productCollection">Skirts</Link>
                            <Link className="dropdown-item" to="/productCollection">Jeans</Link>
                            <Link className="dropdown-item" to="/productCollection">Tunics</Link>
                          </div>
                          <div className="col-md-4">
                            <Link className="dropdown-item" to="/productCollection">T-shirts</Link>
                            <Link className="dropdown-item" to="/productCollection">Dresses</Link>
                            <Link className="dropdown-item" to="/productCollection">Tunics</Link>
                            <Link className="dropdown-item" to="/productCollection">Skirts</Link>
                            <Link className="dropdown-item" to="/productCollection">Jeans</Link>
                          </div>
                          <div className="col-md-4">
                            <Link className="dropdown-item" to="/productCollection">Dresses</Link>
                            <Link className="dropdown-item" to="/productCollection">T-shirts</Link>
                            <Link className="dropdown-item" to="/productCollection">Skirts</Link>
                            <Link className="dropdown-item" to="/productCollection">Jeans</Link>
                            <Link className="dropdown-item" to="/productCollection">Tunics</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item dropdown has-mega-menu" style={{ position: 'static' }}>
                    <Link className="nav-link dropdown-toggle" data-toggle="dropdown" to="#" role="button" aria-haspopup="true" aria-expanded="false">Kids Clothing</Link>
                    <div className="dropdown-menu" style={{ width: '100%' }}>
                      <div className="container">
                        <div className="row w3_kids  py-3">
                          <div className="col-md-3 ">
                            <span className="bg-light">Boy's Clothing</span>
                            <Link className="dropdown-item" to="/productCollection">T-Shirts</Link>
                            <Link className="dropdown-item" to="/productCollection">Coats</Link>
                            <Link className="dropdown-item" to="/productCollection">Shirts</Link>
                            <Link className="dropdown-item" to="/productCollection">Suits &amp; Blazers</Link>
                            <Link className="dropdown-item" to="/productCollection">Jackets</Link>
                            <Link className="dropdown-item" to="/productCollection">Trousers</Link>
                          </div>
                          <div className="col-md-3">
                            <Link className="dropdown-item mt-4" to="/productCollection">T-Shirts</Link>
                            <Link className="dropdown-item" to="/productCollection">Coats</Link>
                            <Link className="dropdown-item" to="/productCollection">Shirts</Link>
                            <Link className="dropdown-item" to="/productCollection">Suits &amp; Blazers</Link>
                            <Link className="dropdown-item" to="/productCollection">Jackets</Link>
                            <Link className="dropdown-item" to="/productCollection">Trousers</Link>
                          </div>
                          <div className="col-md-3">
                            <span>Girl's Clothing</span>
                            <Link className="dropdown-item" to="/productCollection">T-shirts</Link>
                            <Link className="dropdown-item" to="/productCollection">Dresses</Link>
                            <Link className="dropdown-item" to="/productCollection">Tunics</Link>
                            <Link className="dropdown-item" to="/productCollection">Skirts</Link>
                            <Link className="dropdown-item" to="/productCollection">Jeans</Link>
                            <Link className="dropdown-item" to="/productCollection">Midi</Link>
                          </div>
                          <div className="col-md-3">
                            <Link className="dropdown-item  mt-4" to="/productCollection">Tunics</Link>
                            <Link className="dropdown-item" to="/productCollection">Skirts</Link>
                            <Link className="dropdown-item" to="/productCollection">T-shirts</Link>
                            <Link className="dropdown-item" to="/productCollection">Dresses</Link>
                            <Link className="dropdown-item" to="/productCollection">Jeans</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  {/* <li className="nav-item">
                      <Link className="nav-link" to="/profile">Profile</Link>
                    </li>
                  
                  <li className="nav-item">
                    <Link className="nav-link" to="/wishlist">Wishlist</Link>
                  </li> */}
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
