import logo from './logo.svg';
import './App.css';
import {Route,Switch} from 'react-router-dom'
import login from './pages/login';
import register from './pages/register';
import Dashboard from './pages/Dashboard';


function App() {
  return (
      
     <Switch>
       <Route exact path="/">
         <Dashboard></Dashboard>
       </Route> 
       <Route exact path="/login" component={login}/>
       <Route exact path="/register" component={register}/>
       <Route path="*" render={()=>"404 Not found!! "}/>
     </Switch>
      
  );
}

export default App;
