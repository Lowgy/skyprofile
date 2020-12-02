import React, {Component} from "react";
import { MenuItems } from "./MenuItems";
import "./NavBar.css";
import { Link } from "react-router-dom";

class NavBar extends Component{
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }


  render(){
    return(
      <nav className="NavBarItems">
        <h1><Link to="/#" style={{textDecoration: 'none'}} className="navbar-logo">SkyProfile <i className="fas fa-dice-d6"></i></Link></h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}><Link to={item.url} className={item.cName} style={{textDecoration: 'none'}}>{item.title}</Link></li>
              )
            })}
          </ul>
      </nav>
    )
  }
}


export default NavBar;