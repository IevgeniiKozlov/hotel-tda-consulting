import * as React from "react";
import { useState } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import "swiper/scss/free-mode";
import 'swiper/scss/autoplay';
import "swiper/scss/thumbs";
import * as styles from "./slider.module.scss"

// Import required modules
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper";


const SliderGallery = ({ images }) => {

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  
  return (
    <>
      <Swiper
            style={{
                "--swiper-navigation-color": "#E08631",
                "--swiper-pagination-color": "#E08631",
                }}
            spaceBetween={10}
            loop={true}
            navigation={true}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            speed={2000}            
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs, Autoplay]}
            className={styles.mySwiperMain}
        >
            {images.map(({ src, alt }) => (
                <SwiperSlide key={src.id}>
                    <GatsbyImage image={src.childImageSharp.gatsbyImageData} alt={alt}/>
                </SwiperSlide> 
            ))}
      </Swiper>
        <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            loop={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className={styles.mySwiperMini}
        >
            {images.map(({ src, alt}) => {
                return (
                    <SwiperSlide key={src.id}>
                        <GatsbyImage image={src.childImageSharp.gatsbyImageData} alt={alt}/>
                    </SwiperSlide> 
            )})}
        </Swiper>
    </>
  )
}

export default SliderGallery;