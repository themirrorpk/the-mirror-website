import "./Header.css";
import image from "../images/SocialAwareness/5.jpg";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleLg">IMPACT</span>
      </div>
      <img className="headerImg" src={image} alt="" />
    </div>
  );
}
