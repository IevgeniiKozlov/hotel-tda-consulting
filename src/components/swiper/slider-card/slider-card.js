import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import { GatsbyImage } from "gatsby-plugin-image";
import { Card, CardContent, Typography, CardMedia} from '@mui/material';

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/effect-cards";

// Import required modules
import * as styles from "./slider-card.module.scss";

const SliderCard = ( {data} ) => {
    
    return (
        <>
            <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className={styles.mySwiper}
            >
                {data.map(({title, description, image}) => (
                    <SwiperSlide key={image.src.id} className={styles.slide}>
                        <Card className={styles.card}>
                            <CardMedia>
                                <GatsbyImage 
                                    alt={image.alt}
                                    image={image.src.childImageSharp.gatsbyImageData}
                                />
                            </ CardMedia>
                            <CardContent className={styles.cardContent}>
                                <Typography className={styles.text} gutterBottom variant="h5" component="span">
                                    {title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </SwiperSlide> 
                ))}
            </Swiper>
        </>

    )
}

export default SliderCard;