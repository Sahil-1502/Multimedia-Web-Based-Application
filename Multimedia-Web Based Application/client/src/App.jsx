import { useContext } from "react";
import "./app.scss"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import {AuthContext} from "./authContext/AuthContext" 

const App = () => {
  const {user} = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home/> : <Redirect to = "/register"/>}
        </Route>
        <Route exact path="/register">
          {!user ? <Register/> : <Redirect to = "/"/>}
        </Route>
        <Route exact path="/login">
          {!user ? <Login/> : <Redirect to = "/"/>}
        </Route>          
         <>
           <Route path="/movies">                         
              {user ? <Home type="movie" /> : <Redirect to = "/register"/>}
            </Route>
            <Route path="/series">
              {user ? <Home type="series" /> : <Redirect to = "/register"/>}
            </Route>
            <Route path="/watch">
              <Watch/>
            </Route>
        </> 
      </Switch>
    </Router>
  );
};

export default App;