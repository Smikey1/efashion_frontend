import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import About from "./pages/About";
import AdminDashboard from './pages/AdminDashboard.js';
import Blog from "./pages/Blog";
import BlogCollection from "./pages/BlogCollection";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Girl from "./pages/Girl";
import GirlCollection from "./pages/GirlCollection";
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import Payment from "./pages/Payment";
import Product from "./pages/Product";
import ProductCollection from "./pages/ProductCollection";
import Profile from "./pages/Profile";
import Register from './pages/Register';
import Wishlist from "./pages/Wishlist";
import WomenCollection from "./pages/WomenCollection";

function App() {
  return (

    <div>
      <BrowserRouter>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/admin" component={AdminDashboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Route path="/profile" component={Profile} />
          <Route path="/blogCollection" component={BlogCollection} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/wishlist" component={Wishlist} />
          <Route path="/contact" component={Contact} />
          <Route path="/faq" component={FAQ} />
          <Route path="/payment" component={Payment} />
          <Route path="/girlCollection" component={GirlCollection} />
          <Route path="/productCollection/womenCollection/:categoryName" component={WomenCollection} />
          <Route path="/productCollection" component={ProductCollection} />
          <Route path="/girl" component={Girl} />
          <Route path="/product/:id" component={Product} />
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
