import "./Header.css";
import image from "../images/Internship/7_edit.jpg";

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
