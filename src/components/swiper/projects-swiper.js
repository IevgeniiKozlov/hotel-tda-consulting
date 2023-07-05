import * as React from "react"
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button
} from '@mui/material'
import { StaticImage } from "gatsby-plugin-image"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectFade, Mousewheel, Pagination } from "swiper"

import * as styles from "./projects-swiper.module.scss";

export const ProjectsSwiper = () => {
  return (
    <Swiper
      direction={"vertical"}
      mousewheel={true}
      slidesPerView={1}
      spaceBetween={50}
      effect={"fade"}
      pagination={{
          clickable: true,
      }}
      modules={[EffectFade, Mousewheel, Pagination]}
      className={styles.swiper}
      >
      <SwiperSlide className={styles.swiperSlide}>
        <Card className={styles.sliderCard}>
          <CardMedia className={styles.sliderCardMedia}>
            <StaticImage
              className={styles.sliderCardMediaImg}
              src="../images/main-page-intro-background.jpg"
              alt="test"
              width={300}
              height={300}
            />
          </CardMedia>
          <CardContent className={styles.sliderCardContent}>
            <Typography className={styles.sliderCardContentTitle} variant="h4" component="h3">
              Calma Holiday Villa
            </Typography>
            <Typography className={styles.sliderCardContentDescription} variant="body1" component="div">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi? 
            </Typography>
            <Button className={styles.sliderCardContentBtn}>READ MORE</Button>
          </CardContent>
        </Card>
      </SwiperSlide>
      {/* <SwiperSlide className={styles.swiperSlide}>
        <Card className={styles.sliderCard}>
          <CardMedia className={styles.sliderCardMedia}>
            <StaticImage
              className={styles.sliderCardMediaImg}
              src="../images/main-finish-hotel.jpg"
              alt="test"
              width={300}
              height={300}
            />
          </CardMedia>
          <CardContent className={styles.sliderCardContent}>
            <Typography className={styles.sliderCardContentTitle} variant="h4" component="h3">
              Lorem Ipsum hotel
            </Typography>
            <Typography className={styles.sliderCardContentDescription} variant="body1" component="div">
              TEST consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi? 
            </Typography>
            <Button className={styles.sliderCardContentBtn}>READ MORE</Button>
          </CardContent>
        </Card>
      </SwiperSlide> */}
    </Swiper>
  )
}