import logo from './logo.svg';
import './App.css';
import {Route,Switch} from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home.js';
import AdminDashboard from './pages/AdminDashboard.js';

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
     </Switch>
      
  );
}

export default App;
