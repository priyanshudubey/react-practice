import logo from "../../foodie logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={logo}
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>contacts</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
