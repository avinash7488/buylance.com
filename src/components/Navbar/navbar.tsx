import React, { useState } from 'react';
import "./navbar.css";
import Topbar from './Topbar';
function Navbar() {
  const [isOpen, setIsOpen] = useState({
    mens: false,
    womens: false,
  });

  return (
    <div>
    <Topbar/>
    <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Men</a>
        <div className="sub-menu">
          <div className="sub-menu-col">
            <h3>Topwear</h3>
            <ul>
            <li><a href="#">Casual Shirts</a></li>
              <li><a href="#">T-Shirts</a></li>
              <li><a href="#">Polo T-Shirts</a></li>
              <li><a href="#">Sweatshirts</a></li>
              <li><a href="#">Vests</a></li>

            </ul>
          </div>
          <div className="sub-menu-col">
            <h3>Bottomwear</h3>
            <ul>
            <li><a href="#">Chinos</a></li>
            <li><a href="#">Jeans</a></li>

            <li><a href="#">Boxer shorts</a></li>
            <li><a href="#">Jogers</a></li>

              <li><a href="#">Lounge pants</a></li>
              <li><a href="#">Shorts</a></li>
            </ul>
          </div>
        </div>
      </li>
      <li><a href="#">Women</a>
        <div className="sub-menu">
          <div className="sub-menu-col">
            <h3>Topwear</h3>
            <ul>
              <li><a href="#">T-Shirts</a></li>
              <li><a href="#">Tops</a></li>
              <li><a href="#">Dresses</a></li>


              <li><a href="#">Sweatshirts</a></li>
            </ul>
          </div>
          <div className="sub-menu-col">
            <h3>Bottomwear</h3>
            <ul>
              <li><a href="#">Jeans</a></li>
              <li><a href="#">Joggers</a></li>
              <li><a href="#">Leggings</a></li>
              <li><a href="#">Lounge pants</a></li>
              <li><a href="#">Shorts</a></li>

            </ul>
          </div>
        </div>
      </li>
      <li><a href="#">Boys</a>
        <div className="sub-menu">
          <div className="sub-menu-col">
            <h3>Topwear</h3>
            <ul>
              <li><a href="#">Shirts</a></li>
              <li><a href="#">T-shirts</a></li>
              <li><a href="#">Polo T-shirts</a></li>


            </ul>
          </div>
          <div className="sub-menu-col">
            <h3>Bottomwear</h3>
            <ul>
              <li><a href="#">Shorts</a></li>
              <li><a href="#">Joggers</a></li>
              <li><a href="#">Jeanss</a></li>
            

            </ul>
          </div>
          <div className="sub-menu-col">
            <h3>Shop by Age</h3>
            <ul>
              <li><a href="#">3 to 10 Years</a></li>
              <li><a href="#">11 to `16 Years</a></li>
            

            </ul>
          </div>
        </div>
      </li>

      <li><a href="#">Girls</a>
        <div className="sub-menu">
          <div className="sub-menu-col">
            <h3>Topwear</h3>
            <ul>
              <li><a href="#">T-shirts</a></li>
              <li><a href="#">Dresses</a></li>


            </ul>
          </div>
          <div className="sub-menu-col">
            <h3>Bottomwear</h3>
            <ul>
              <li><a href="#">Leggings</a></li>
              <li><a href="#">Shorts</a></li>
              <li><a href="#">Jeans</a></li>
            

            </ul>
          </div>
          <div className="sub-menu-col">
            <h3>Shop by Age</h3>
            <ul>
              <li><a href="#">3 to 10 Years</a></li>
              <li><a href="#">11 to `16 Years</a></li>
            

            </ul>
          </div>
        </div>
      </li>
     
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
  </div>
  );
}

export default Navbar;
