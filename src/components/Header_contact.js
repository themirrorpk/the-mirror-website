import "./Header.css";
import image from "../images/Internship/ct (4).jpg";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleLg">CONTACT US</span>
      </div>
      <img className="headerImg" src={image} alt="" />
    </div>
  );
}
