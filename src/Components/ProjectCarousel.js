import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../assets/IMG-20230219-WA0002.jpg";
import image2 from "../assets/IMG-20230219-WA0003.jpg";
import image3 from "../assets/IMG-20230219-WA0004.jpg";
import image4 from "../assets/IMG-20230219-WA0005.jpg";
import image5 from "../assets/IMG-20230219-WA0006.jpg";
import image6 from "../assets/IMG-20230219-WA0007.jpg";
import image7 from "../assets/IMG-20230219-WA0008.jpg";

export default function ProjectCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScrol: 4,
    initialSlide: 0,
  };
  const paintedHouses = [
    {
      _id: 1,
      image: image1,
    },
    {
      _id: 2,
      image: image2,
    },
    {
      _id: 3,
      image: image3,
    },
    {
      _id: 4,
      image: image4,
    },
    {
      _id: 5,
      image: image5,
    },
    {
      _id: 6,
      image: image6,
    },
    {
        _id:7,
        image: image7,
    }

  ];

  return (
    <div className="house-carousel-cntnr">
      <Slider className="house-sliders"{...settings}>
        {paintedHouses.map((house) => {
            return  (
                <div className = "house-hero">
                    <img src = {house.image} key = {house._id} alt = "house-pic"/>
                </div>
            )
        })}
      </Slider>
    </div>
  );
}
