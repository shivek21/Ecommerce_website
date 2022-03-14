import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useStateValue } from "../../StateProvider";
import {auth} from "../../Firebase";
function Header() {
  const [{ basket,user}, dispatch] = useStateValue();
const handleAuthenticaton = () => {
  if (user) {
    auth.signOut();
  }
}
return (
  <div className="header">
    <Link to="/">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="amazon"
      />
    </Link>
    <div className="header__search">
      <input
        className="header__searchInput"
        type="text"
        name="Search"
        id=""
      />
      <SearchIcon className="header__searchIcon" />
    </div>
    <div className="header__nav">
      <Link to={!user && '/login'} style={{ textDecoration: 'none' }}>
        <div onClick={handleAuthenticaton} className="header__option">
          <span className="header__optionLineOne">
            <small>Hello {!user ? 'Guest' : user.email}</small>
          </span>
          <span className="header__optionLineTwo">
            <strong>{user?'Sign Out' : 'Sign In'}</strong>
          </span>
        </div>
      </Link>
      <Link to="/orders" style={{ textDecoration: 'none' }}>

      <div className="header__option">
        <span className="header__optionLineOne">
          <small>Returns</small>
        </span>
        <span className="header__optionLineTwo">
          <strong>& Orders</strong>
        </span>
      </div>
      </Link>
      <a href="https://www.primevideo.com/" style={{ textDecoration: 'none' }}>
      <div className="header__option">
        <span className="header__optionLineOne">
          <small>Your</small>
        </span>
        <span className="header__optionLineTwo">
          <strong>   Prime</strong>
        </span>
      </div>
      </a>
      <Link to="/checkout" style={{ textDecoration: 'none' }}>
        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span className="header__optionLineTwo header__BasketCount">
            {basket?.length}
          </span>
        </div>
      </Link>
    </div>
  </div>
);
}
export default Header;