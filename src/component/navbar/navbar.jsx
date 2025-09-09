import "../navbar/navbar.css"
import logo from "../../assets/photofolio-icon.webp";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div
        className="logo"
        onClick={() => window.location.replace("/")}
      >
        <img src={logo} alt="logo" />
        <span>PhotoFolio</span>
      </div>
    </div>
  );
};
