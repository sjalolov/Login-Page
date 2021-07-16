import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Login from "./components/LoginPage";
import SignUp from "./components/RegisterPage";
import LostPassword from "./components/LostPassword";

function App() {
  return (<Router>
    <div className="App">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/lost-password" component={LostPassword} />
          </Switch>
    </div></Router>
  );
}

export default App;