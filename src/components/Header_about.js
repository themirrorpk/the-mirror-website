import "./Header.css";
import image from "../images/COUS1/5.jpg";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleLg">OUR MISSION</span>
      </div>
      <img className="headerImg" src={image} alt="" />
    </div>
  );
}
