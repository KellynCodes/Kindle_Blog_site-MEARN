import React from "react";

const Navbar = ({ user }) => {
  const logout = () => {
    window.open("/auth/logout", "_self");
  };
  {
    if (user) {
      return (
        <div className="navbar">
          <span className="logo">Kindle</span>
          <ul className="list">
            <li className="listItem">
              <img
                src={user.photos[0].value}
                alt="avater"
                className="userAvater"
              />
            </li>
            <li className="listItem">{user.displayName}</li>
            <li className="listItem" onClick={logout}>
              Logout
            </li>
          </ul>
        </div>
      );
    } else {
      return (
        <div className="navbar">
          <span className="logo">Kindle</span>
          <ul className="list">
            <a href="/" className="listItem">
              Login
            </a>
          </ul>
        </div>
      );
    }
  }
};

export default Navbar;
