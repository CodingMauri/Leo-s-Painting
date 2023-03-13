import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import House1 from "../assets/IMG-20230219-WA0012.jpg";
import House2 from "../assets/IMG-20230219-WA0007.jpg";
import House3 from "../assets/IMG-20230219-WA0002.jpg";
import House4 from "../assets/IMG-20230219-WA0015.jpg";


export default function Houses() {
  const houseProjects = [
    {
      _id: 1,
      houses: House1,
    },
    {
      _id: 2,

      houses: House2,
    },

    {
      _id: 3,

      houses: House3,
    },

    {
      _id: 4,

      houses: House4,
    },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
        {
        breakpoint: 9000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 825,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
    }
    ]
    
  };
  return (
    <div  className="house-project-cntnr">
      <div id = "houses" className="house-header">
        <h2>Houses</h2>
      </div>
      <Slider className="project-carousel" arrows={true} {...settings}>
        {houseProjects.map((house) => {
          return (
            <div className="house-image">
              <img src={house.houses} alt="houses" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
