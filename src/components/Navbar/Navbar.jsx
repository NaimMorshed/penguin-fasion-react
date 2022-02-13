import "./Navbar.css";
import logo from "../../assets/icons/logo.png";

export default function Navbar() {
  return (
    <nav>
      <div className="start">
        <img src={logo} alt="logo" />
      </div>
      <div className="middle">middle</div>
      <div className="end">
       
      </div>
    </nav>
  );
}
