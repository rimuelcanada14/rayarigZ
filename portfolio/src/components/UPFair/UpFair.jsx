import React from 'react';
import './UpFair.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import melImage1 from './1.jpg';
import melImage2 from './2.jpg';
import melImage3 from './3.jpg';
import melImage4 from './4.jpg';
import melImage5 from './5.jpg';
import melImage6 from './6.jpg';

const UpFair = () => {
  return (
    <div className="container up-container">
      <div className="up-img">
        <Swiper
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >

          <SwiperSlide><img src={melImage1} alt="mel1" className="up-me" /></SwiperSlide>
          <SwiperSlide><img src={melImage2} alt="mel2" className="up-me" /></SwiperSlide>
          <SwiperSlide><img src={melImage3} alt="mel1" className="up-me" /></SwiperSlide>
          <SwiperSlide><img src={melImage4} alt="mel1" className="up-me" /></SwiperSlide>
          <SwiperSlide><img src={melImage5} alt="mel1" className="up-me" /></SwiperSlide>
          <SwiperSlide><img src={melImage6} alt="mel2" className="up-me" /></SwiperSlide>
        </Swiper>
      </div>
      
      <div className="up-content">
        <div className="up-title">
          <p>UP Fair 2025</p>
        </div>
        <div className="up-role">
          <p>Strategy and Execution Officer</p>
        </div>
        <div className="col-lg-10">
          <p>
            I was a part of the UP Fair 2025 Core Team, specifically in the Strategy and Execution Committee. As part of the committee, I was assigned to have BIG IDEAS, handle LIVE, and be FUN.
            <br /><br />
            It was a valuable experience to be able to pitch in ideas that will promote UP Fair 2025, for each night.
            <br /><br />
            The energy was not only sustained in the fairgrounds but the media traction as well. I was tasked to craft contents and give live updates on different platforms.
            <br /><br />
            Lastly, the fun should cross screens through witty and evoking captions that I crafted as well.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UpFair;
