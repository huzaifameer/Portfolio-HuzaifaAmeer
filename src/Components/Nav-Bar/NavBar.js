import { Component } from "react";
import "./NavBar.css";
import { MenuItems } from "./menu-items";
import { Link } from "react-router-dom";

class NavBar extends Component {
  
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="nav-bar-items">
        <h1 className="nav-bar-logo">Huz<u>a</u>ifa</h1>
        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.URL}>
                  <i class={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}          
        </ul>
      </nav>
    );
  }
}
export default NavBar;
