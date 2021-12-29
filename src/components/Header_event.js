import "./Header.css";
import image from "../images/SocialAwareness/3.edit.jpg";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleLg">EVENTS GALLERY</span>
      </div>
      <img className="headerImg" src={image} alt="" />
    </div>
  );
}
