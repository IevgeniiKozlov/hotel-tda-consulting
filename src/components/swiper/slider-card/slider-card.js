import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Card, CardContent, Typography, CardMedia} from '@mui/material';
import { useTranslation } from "gatsby-plugin-react-i18next";

import "swiper/scss";
import "swiper/scss/effect-cards";
// Import required modules
import * as styles from "./slider-card.module.scss";

const SliderCard = ( {images} ) => {
    const {t} = useTranslation();

    return (
        <>
            <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className={styles.mySwiper}
            >
                {images.map(({id, src, alt}) => {
                   const { title } = t('greeting.cards', { returnObjects: true }).find(card => card.id === id)
                    return (
                    <SwiperSlide key={id} className={styles.slide}>
                        <Card className={styles.card}>
                            <CardMedia>
                                <GatsbyImage 
                                    alt={alt}
                                    image={getImage(src)}
                                />  
                            </ CardMedia>
                            <CardContent className={styles.cardContent}>
                                <Typography className={styles.text} gutterBottom variant="h5" component="span">
                                    {title}
                                </Typography>
                            </CardContent>
                        </Card>
                    </SwiperSlide> 
                )})}
            </Swiper>
        </>

    )
}

export default SliderCard;