import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Redirect,Route,Switch} from 'react-router-dom'
import login from './pages/login';


function App() {
  return (
      
     <Switch>
       <Route exact path="/">
         Dashboard page
       </Route> 
       <Route exact path="/login" component={login}/>
       <Route path="*" render={()=>"404 Not found!! "}/>
     </Switch>
      
  );
}

export default App;
