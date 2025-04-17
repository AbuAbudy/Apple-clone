import React from 'react'; 
import Logo from "../images/icons/logo-sm.png"; 
import SearchIcon from "../images/icons/search-icon-sm.png"; 
import CartIcon from "../images/icons/cart-sm.png"; 
import { NavLink } from "react-router-dom"; 

function Header() {  
  return (     
    <div className="nav-wrapper fixed-top">   
      <div className="container">     
        <nav className="navbar navbar-toggleable-sm navbar-expand-md">       
          <button         
            className="navbar-toggler navbar-toggler-right"         
            type="button"         
            data-toggle="collapse"         
            data-target=".navbar-collapse"       
          >         
            ☰       
          </button>        

          <NavLink className="navbar-brand mx-auto" to="/">         
            <img src={Logo} alt="Logo" />       
          </NavLink>        

          <div className="navbar-collapse collapse">         
            <ul className="navbar-nav nav-justified w-100 nav-fill">           
              <li className="nav-item">             
                <NavLink className="nav-link js-scroll-trigger" to="/mac">               
                  Mac             
                </NavLink>           
              </li>           
              <li className="nav-item">             
                <NavLink className="nav-link js-scroll-trigger" to="/iphone">               
                  iPhone             
                </NavLink>           
              </li>           
              <li className="nav-item">             
                <NavLink className="nav-link js-scroll-trigger" to="/ipad">               
                  iPad             
                </NavLink>           
              </li>           
              <li className="nav-item">             
                <NavLink className="nav-link js-scroll-trigger" to="/watch">               
                  Watch             
                </NavLink>           
              </li>           
              <li className="nav-item">             
                <NavLink className="nav-link js-scroll-trigger" to="/tv">               
                  TV             
                </NavLink>           
              </li>           
              <li className="nav-item">             
                <NavLink className="nav-link js-scroll-trigger" to="/music">               
                  Music             
                </NavLink>           
              </li>           
              <li className="nav-item">             
                <NavLink className="nav-link js-scroll-trigger" to="/support">               
                  Support             
                </NavLink>           
              </li>           
              <li className="nav-item">             
                <NavLink className="nav-link js-scroll-trigger" to="/search">               
                  <img src={SearchIcon} alt="Search Icon" />             
                </NavLink>           
              </li>           
              <li className="nav-item">             
                <NavLink className="nav-link js-scroll-trigger" to="/cart">               
                  <img src={CartIcon} alt="Cart Icon" />             
                </NavLink>           
              </li>         
            </ul>       
          </div>     
        </nav>   
      </div> 
    </div>    
  ); 
}

export default Header;
