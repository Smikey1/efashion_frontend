import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Redirect,Route,Switch} from 'react-router-dom'
import Login from './pages/Login';


function App() {
  return (
      
     <Switch>
       <Route exact path="/">
         Dashboard page
       </Route> 
       <Route exact path="/login" component={Login}/>
       <Route path="*" render={()=>"404 Not found!! "}/>
     </Switch>
      
  );
}

export default App;
