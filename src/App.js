import React from "react";
import Player from "./components/Player";
import NavBar from "./components/Navbar/NavBar";
import Home from "./components/Home"
import Contact from "./components/Contact"
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

const App = () => {
    return(
      <div>
        <div>
          <Router>
            <NavBar />
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/profile' component={Player} />
              <Route path='/contact' component={Contact} />
            </Switch>
          </Router>
        </div>
      </div>
    )
}

export default App;
