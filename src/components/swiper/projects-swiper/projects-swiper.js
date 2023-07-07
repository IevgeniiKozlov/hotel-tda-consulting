import * as React from "react"
import { navigate, Link } from 'gatsby';
import { Trans } from 'gatsby-plugin-react-i18next'
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button
} from '@mui/material'
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectFade, Mousewheel, Pagination } from "swiper"

import * as styles from "./projects-swiper.module.scss";

export const ProjectsSwiper = (props) => {
  const { language, data } = props;

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
      { data && data.map(({ path, slug, projectPhoto }) => {

        const { alt, src } = projectPhoto;
        const cardImg = getImage(src.childImageSharp.gatsbyImageData);

        return (
          <SwiperSlide key={slug} className={styles.swiperSlide}>
            <Card className={styles.sliderCard}>
              <CardMedia className={styles.sliderCardMedia}>
                <GatsbyImage 
                  className={styles.sliderCardMediaImg}
                  alt={alt}
                  image={cardImg}
                  width={300}
                  height={300}
                />
                <StaticImage
                  className={styles.sliderCardMediaImg}
                  src="../images/main-page-intro-background.jpg"
                  alt="test"
                  
                />
              </CardMedia>
              <CardContent className={styles.sliderCardContent}>
                <Typography className={styles.sliderCardContentTitle} variant="h4" component="h3">
                  <Trans i18nKey="intro.title"></Trans>
                </Typography>
                <Typography className={styles.sliderCardContentDescription} variant="body1" component="div">
                  <Trans i18nKey="intro.descriptionTitle"></Trans>
                </Typography>
                <Button className={styles.sliderCardContentBtn} component={Link} to={`${path}/${slug}`}>{language === 'ua' ? "ПОДРОБНІШЕ" : "READ MORE" }</Button>
              </CardContent>
            </Card>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}