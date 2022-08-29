import React, { CSSProperties, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Navigation } from "swiper";

interface params{
    children: JSX.Element | JSX.Element[]
}

const style: CSSProperties = {  
  width: "100%",
  height: "100%",
//   display: "flex"
};

export const App = (params:params):JSX.Element => {
  return (
    <>
      <Swiper
        // slidesPerView = {2}
        navigation={true}      
        modules={[Navigation]}
        className="mySwiper"
        style={style}
        breakpoints ={
            {
                // when window width is >= 320px
                320: {
                  slidesPerView: 1,
                  spaceBetween: 5
                },
                // when window width is >= 480px
                380: {
                  slidesPerView: 2,
                  spaceBetween: 60
                },
                420: {
                  spaceBetween: 30
                },
                // when window width is >= 640px
                640: {
                  slidesPerView: 3,
                  spaceBetween: 80
                },
                1024: {
                  spaceBetween: 20
                },
                1366: {
                  slidesPerView: 4,
                  spaceBetween: 20
                },
                1440: {
                  slidesPerView: 5,
                  spaceBetween: 30
                },
                1910: {
                  slidesPerView: 6,
                  spaceBetween: 20
                },
            }
        }

      >
        {
            params.children
        }        
      </Swiper>
    </>
  );
}