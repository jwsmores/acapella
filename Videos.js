// Videos.js

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Videos = () => {
  const videosData = [
    { id: 1, title: 'Video 1', embedUrl: 'https://www.youtube.com/embed/VIDEO_ID_1' },
    { id: 2, title: 'Video 2', embedUrl: 'https://www.youtube.com/embed/VIDEO_ID_2' },
    // Add more video data as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <h1>Our Favorite Videos</h1>
      <Slider {...settings}>
        {videosData.map((video) => (
          <div key={video.id}>
            <iframe
              title={video.title}
              src={video.embedUrl}
              width="100%"
              height="315"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Videos;
