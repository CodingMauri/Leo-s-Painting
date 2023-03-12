import React from "react";
import interior from "../assets/IMG-20230219-WA0014.jpg";
export default function Services() {
  return (
    <div className="services-cntnr">
      <div className="service-info">
        <section className="service-text">
          <div className="header">
            <h2>Services</h2>
          </div>
          <p>
            Lorem Ipsum,eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Eros donec ac odio tempor. Eget mi proin sed libero enim sed
            faucibus turpis. At auctor urna nunc id cursus metus aliquam
            eleifend. Imperdiet proin fermentum leo vel orci porta non pulvinar
            neque. Duis at consectetur lorem donec massa sapien faucibus et
            molestie. Faucibus in ornare quam viverra orci sagittis eu. Massa
            massa ultricies mi quis. Mauris a diam maecenas sed enim ut sem.
            Molestie at elementum eu facilisis. Adipiscing bibendum est
            ultricies integer quis auctor elit sed. Mollis nunc sed id semper
            risus. Mauris pellentesque pulvinar pellentesque habitant. Diam sit
            amet nisl suscipit adipiscing bibendum est ultricies integer. Eu
            scelerisque felis imperdiet proin fermentum leo vel. Gravida neque
            convallis a cras semper auctor. Mauris vitae ultricies leo integer.
            Aliquam sem fringilla ut morbi. Pulvinar pellentesque habitant morbi
            tristique senectus et. Tellus in hac habitasse platea dictumst
            vestibulum rhoncus est pellentesque. Suspendisse potenti nullam ac
            tortor vitae purus faucibus ornare. Augue mauris augue neque gravida
            in. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus.
            Nisi est sit amet facilisis. Nulla pellentesque dignissim enim sit.
            Sagittis id consectetur purus ut faucibus pulvinar elementum
            integer. Nulla at volutpat diam ut venenatis tellus. Interdum varius
            sit amet mattis vulputate enim. Gravida dictum fusce ut placerat
            orci. Lorem ipsum dolor sit amet consectetur adipiscing elit. Mauris
            pellentesque pulvinar pellentesque habitant morbi tristique senectus
            et. Cras semper auctor neque vitae tempus quam pellentesque. Rutrum
            quisque non tellus orci ac auctor augue mauris augue. Tellus
            molestie nunc non blandit. Orci nulla
          </p>
        </section>
      </div>
      <div className="service-image">
        <img src={interior} alt="interior" />
      </div>
    </div>
  );
}
