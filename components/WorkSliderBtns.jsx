// WorkSliderBtns.jsx
"use client";

import { useSwiper } from "swiper/react";
import { PiCareLeftBold, PiCareRightBold } from "react-icons/pi";

const WorkSliderBtns = ({ containerStyles, btnStyles, iconStyles }) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={() => swiper.slidePrev()}>
        <PiCareLeftBold className={iconStyles} />
      </button>
      <button className={btnStyles} onClick={() => swiper.slideNext()}>
        <PiCareRightBold className={iconStyles} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
