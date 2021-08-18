import logo from './logo.svg';
import './App.css';
import {Route,Switch} from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';


function App() {
  return (
      
     <Switch>
       <Route exact path="/">
         <Dashboard></Dashboard>
       </Route> 
       <Route exact path="/login" component={Login}/>
       <Route exact path="/register" component={Register}/>
       <Route path="*" render={()=>"404 Not found!! "}/>
     </Switch>
      
  );
}

export default App;
