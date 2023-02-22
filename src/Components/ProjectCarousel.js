import React from 'react'
import Slider from "react-slick"
import  images from "./Data/houses.json"

export default function ProjectCarousel() {

const settings = {
    dots:true,
    infinite:true,
    speed:500,
    slidesToShow:3,
    slidesToScrol:4,
    initialSlide:0,

}


console.log(images)
  return (
    <div className = "house-carousel-cntnr">
        <Slider className = "house-sliders" {...settings} >
            <div className = "houses">
                {images.map((house) => {
                    return (
                        <div className = "house-image" id = {house.id}>
                            <img src = {house.src} alt = "house-pic" />
                        </div>
                    )
                })}
            </div>

        </Slider>
    </div>
  )
}
