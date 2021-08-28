import React from "react";
import "../../App.css";
import img1 from "../images/kids.jpg";

export default function Gallery() {
  let data = [
    {
      id: 1,
      imgSrc: img1,
    },
    {
      id: 2,
      imgSrc: "",
    },
    {
      id: 3,
      imgSrc: "",
    },
    {
      id: 4,
      imgSrc: "",
    },
    {
      id: 5,
      imgSrc: "",
    },
  ];
  return <>
  <div className='gallery'>
  {
    data.map((item, index)=>{
      return(
        <div className='pics' key={index}>
          <img src="https://drive.google.com/drive/folders/1uMWoF1ah7ff6vmWCG-COPd9ZUTWimzh5" alt='' />
        </div>
      )
    })
  }
  </div>
  </>;
}
