import logo from './logo.svg';
import './App.css';
import {Route,Switch} from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard.js';
import Admin from './pages/Admin.js';

function App() {
  return (
      
     <Switch>
       <Route exact path="/">
         <Dashboard></Dashboard>
       </Route> 
       <Route exact path="/admin" component={Admin}/>
       <Route exact path="/login" component={Login}/>
       <Route exact path="/register" component={Register}/>
       <Route path="*" render={()=>"404 Not found!! "}/>
     </Switch>
      
  );
}

export default App;
