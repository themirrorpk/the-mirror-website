import React from "react";
import "../App.css";
import "./Gallery.css";
import Header from "../components/Header_event";
import "bootstrap/dist/css/bootstrap.min.css";
import CloseIcon from "@material-ui/icons/Close";

//COUS 1
import img1 from "../images/COUS1/one.jpg";
import img2 from "../images/COUS1/two.jpg";
import img3 from "../images/COUS1/three.jpg";
import img4 from "../images/COUS1/4.jpg";
import img5 from "../images/COUS1/5.jpg";
import img6 from "../images/COUS1/6.jpg";
import img7 from "../images/COUS1/7.jpg";

//COUS2
import img8 from "../images/COUS2/1.jpg";
import img9 from "../images/COUS2/2.jpg";
import img10 from "../images/COUS2/3.jpg";
import img11 from "../images/COUS2/4.jpg";
import img12 from "../images/COUS2/5.jpg";

//BGSP
import img13 from "../images/BGSP/one.jpg";
import img14 from "../images/BGSP/two.jpg";
import img15 from "../images/BGSP/three.jpg";
import img16 from "../images/BGSP/five.jpg";
import img17 from "../images/BGSP/four.jpg";

//internship
import img18 from "../images/Internship/one-20.jpg";
import img19 from "../images/Internship/two-20.jpg";
import img20 from "../images/Internship/2.jpg";
import img21 from "../images/Internship/3.jpg";
import img22 from "../images/Internship/5.jpg";
import img23 from "../images/Internship/6.jpg";
import img24 from "../images/Internship/7.jpg";
import img25 from "../images/Internship/8.jpg";

//Social Awareness
import img26 from "../images/SocialAwareness/1.jpg";
import img27 from "../images/SocialAwareness/2.jpg";
import img28 from "../images/SocialAwareness/3.jpg";
import img29 from "../images/SocialAwareness/4.jpg";
import img30 from "../images/SocialAwareness/5.jpg";
import img31 from "../images/SocialAwareness/6.jpg";
import img32 from "../images/SocialAwareness/7.jpg";

// import img33 from "../images/LuckyOne/1.NEF";
// import img34 from "../images/SocialAwareness/7.jpg";
// import img35 from "../images/SocialAwareness/7.jpg";

import { useState } from "react";
import Footer from "../components/Footer";

export default function Gallery() {
  let data = [
    {
      id: 1,
      imgSrc: img1,
      caption: "Colours of our Struggle ",
    },
    {
      id: 2,
      imgSrc: img2,
      caption: "Colours of our Struggle",
    },
    {
      id: 3,
      imgSrc: img3,
      caption: "Colours of our Struggle",
    },
    {
      id: 4,
      imgSrc: img4,
      caption: "Colours of our Struggle",
    },
    {
      id: 5,
      imgSrc: img5,
      caption: "Colours of our Struggle",
    },
    {
      id: 6,
      imgSrc: img6,
      caption: "Colours of our Struggle",
    },
    {
      id: 7,
      imgSrc: img7,
      caption: "Colours of our Struggle",
    },
    {
      id: 8,
      imgSrc: img8,
      caption: "Colours of our Struggle",
    },
    {
      id: 9,
      imgSrc: img9,
      caption: "Colours of our Struggle",
    },
    {
      id: 10,
      imgSrc: img10,
      caption: "Colours of our Struggle",
    },
    {
      id: 11,
      imgSrc: img11,
      caption: "Colours of our Struggle",
    },
    {
      id: 12,
      imgSrc: img12,
      caption: "Colours of our Struggle",
    },
    {
      id: 13,
      imgSrc: img13,
      caption: "BGSP",
    },
    {
      id: 14,
      imgSrc: img14,
      caption: "BGSP",
    },
    {
      id: 15,
      imgSrc: img15,
      caption: "BGSP",
    },
    {
      id: 16,
      imgSrc: img16,
      caption: "BGSP",
    },
    {
      id: 17,
      imgSrc: img17,
      caption: "BGSP",
    },
    {
      id: 18,
      imgSrc: img18,
      caption: "Internship'20",
    },
    {
      id: 19,
      imgSrc: img19,
      caption: "Internship'20",
    },
    {
      id: 20,
      imgSrc: img20,
      caption: "Internship'21",
    },
    {
      id: 21,
      imgSrc: img21,
      caption: "Internship'21",
    },
    {
      id: 22,
      imgSrc: img22,
      caption: "Internship'21",
    },
    {
      id: 23,
      imgSrc: img23,
      caption: "Internship'21",
    },
    {
      id: 24,
      imgSrc: img24,
      caption: "Internship'21",
    },
    {
      id: 25,
      imgSrc: img25,
      caption: "Internship'21",
    },
    {
      id: 26,
      imgSrc: img26,
      caption: "Social Awareness Sessions",
    },
    {
      id: 27,
      imgSrc: img27,
      caption: "Social Awareness Sessions",
    },
    {
      id: 28,
      imgSrc: img28,
      caption: "Social Awareness Sessions",
    },
    {
      id: 29,
      imgSrc: img29,
      caption: "Social Awareness Sessions",
    },
    {
      id: 30,
      imgSrc: img30,
      caption: "Social Awareness Sessions",
    },
    {
      id: 31,
      imgSrc: img31,
      caption: "Social Awareness Sessions",
    },
    {
      id: 32,
      imgSrc: img32,
      caption: "Social Awareness Sessions",
    },
  ];
  const [model, setmodel] = useState(false);
  const [tempimgsrc, settempimgsrc] = useState("");

  const getimg = (imgsrc) => {
    settempimgsrc(imgsrc);
    setmodel(true);
  };
  return (
    <>
      <Header />
      {/* <h1 className="MainHeading"> EVENTS GALLERY </h1> */}
      <div className={model ? "model open" : "model"}>
        <img src={tempimgsrc} alt="" />
        <CloseIcon onClick={() => setmodel(false)} />
      </div>
      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div
              className="pics"
              key={index}
              onClick={() => getimg(item.imgSrc)}
            >
              <figure className="position-relative">
                <img src={item.imgSrc} alt="" style={{ width: "100%" }} />
                <figcaption>{item.caption}</figcaption>
              </figure>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
}
