import React from 'react';
import './PhotoPage.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import your images
import melImage1 from './1.jpg';
import melImage2 from './2.jpg';
import melImage3 from './3.jpg';
import melImage4 from './4.jpg';
import melImage5 from './5.jpg';
import melImage6 from './6.jpg';
import melImage7 from './7.jpg';
import melImage8 from './8.jpg';
import melImage9 from './9.jpg';
import melImage10 from './10.jpg';
import melImage12 from './12.jpg';
import melImage13 from './13.jpg';
import melImage14 from './14.jpg';
import melImage15 from './15.jpg';
import melImage16 from './16.jpg';
import melImage17 from './17.jpg';
import melImage18 from './18.jpg';
import melImage19 from './19.jpg';
import melImage20 from './20.jpg';
import melImage21 from './21.jpg';
import melImage22 from './22.jpg';
import melImage23 from './23.jpg';
import melImage24 from './24.jpg';
import melImage25 from './25.jpg';
import melImage26 from './26.jpg';
import melImage27 from './27.jpg';

import melVideo1 from './1.mp4';
import melVideo2 from './2.mp4';

// Put all images into an array
const images = [
  melImage1,
  melImage2,
  melImage3,
  melImage4,
  melImage5,
  melImage6,
  melImage7,
  melImage8,
  melImage9,
  melImage10,
];

const images2 = [
  melImage12,
  melImage13,
  melImage14,
  melImage15,
  melImage16,
  melImage17,
  melImage18,
  melImage19,
  melImage20,
];

const images3 = [
  melImage21,
  melImage22,
  melImage23,
  melImage24,
  melImage25,
  melImage26,
  melImage27,
];

const PhotoPage = () => {
  return (
    <>
  <p className="fw-bold photos-title">Freelance and Academic Works</p>
      <div className="photo-container">
        
        <div className="photo-content">
          <div className="photo-title">
            
            <p className="photo-text">Check out some of my photos!</p>
          </div>
          <div className="photo-role">
            <p>I don’t just capture your brand,<br /> I put your vision of success into frames.</p>
          </div>
        </div>

        <div className="photo-img">
          <Swiper
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
            spaceBetween={10}
            slidesPerView={3}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {images.map((img, idx) => (
              <SwiperSlide key={idx}>
                <img src={img} alt={`mel-${idx}`} className="photo-me" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="photo2-container">
        <div className="photo-content">
          {/* <div className="photo-title">
          <p className="photo-text">Check out some of my photos!</p>
        </div> */}
          <div className="photo2-role">
            <p>The shots I take are not bits of memories, rather emotions that you can reflect on.</p>
          </div>
        </div>

        <div className="photo-img">
          <Swiper
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
            spaceBetween={10}
            slidesPerView={3}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {images2.map((img, idx) => (
              <SwiperSlide key={idx}>
                <img src={img} alt={`mel-${idx}`} className="photo-me" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="photo3-container">
        <div className="photo-content">
          <div className="photo-title">
            <p className="photo-text"></p>
          </div>
          <div className="photo-role">
            <p>I don’t just hold the camera, <br /> I shape the scene</p>
          </div>
        </div>

        <div className="photo-img">
          <Swiper
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
            spaceBetween={10}
            slidesPerView={3}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {images3.map((img, idx) => (
              <SwiperSlide key={idx}>
                <img src={img} alt={`mel-${idx}`} className="photo-me" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="container abouts-container">
          <div className="abouts-img">
            <video className="abouts-me" controls loop playsInline>
              <source src={melVideo1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>


          <div className="abouts-content">
            <div className="about-title">
              <p>Dedmatology</p>
              <p className='text fw-normal abouts-role'> Director </p>
              <p className="abouts-text">After receiving the corpse of the town mayor in the dead of night, three embalmers conspired how he died–only to realize that the spirit of the mayor still remains.<br />
                <br /><p className='text fw-bold'> Awards: </p>
                - Best Production
                <br />- People's Choice Award</p>
            </div>
          </div>
        </div>

        <div className="container abouts2-container">
          <div className="abouts2-content">
            <div className="about-title">
              <p>sandali.</p>
              <p className='text fw-normal abouts-role'> Director - Videographer </p>
              <p className="abouts-text">sandali. is a short film that follows a young man grappling with the weight of grief and isolation as he struggles to move on, haunted by drunken hallucinations of a lost lover</p>
            </div>
          </div>

          <div className="abouts2-img">
            <video className="abouts2-me" controls loop playsInline>
              <source src={melVideo2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotoPage;
