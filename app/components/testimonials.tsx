import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Testimonials = () => {
  return (
    <div>
      <Carousel autoPlay={true} infiniteLoop={true}>
        <div>
          <div className="flex flex-row">
            <div className="rounded-full"></div>
            <div>
              <h3 className="font-semibold">John Doe</h3>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Testimonials;

const styles = StyleSheet.create({});
