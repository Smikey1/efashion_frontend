import { Route, Switch } from 'react-router-dom';
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

function App() {
  return (
      
     <Switch>
       <Route exact path="/">
         <Home></Home>
       </Route> 
       <Route exact path="/admin" component={AdminDashboard}/>
       <Route exact path="/login" component={Login}/>
       <Route exact path="/register" component={Register}/>
       <Route path="*" render={()=>"404 Not found!! "}/>
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
      <Route path="/productCollection" component={ProductCollection} />
      <Route path="/girl" component={Girl} />
      <Route path="/product/:id" component={Product} />
     </Switch>
      
  );
}

export default App;
