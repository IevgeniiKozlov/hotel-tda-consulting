import * as React from "react"
import {
  Paper,
  Box,
  Container,
  Stack,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button
} from '@mui/material'
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCompassDrafting, faTrowelBricks, faLock, faShieldHalved } from "@fortawesome/free-solid-svg-icons" 

import Layout from "../components/main-layout/layout"
import * as styles from "./index.module.scss"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Mousewheel, Pagination } from "swiper";

const IndexPage = () => {
  return (
    <Layout>
      <Paper className={styles.intro}>
        <StaticImage
          placeholder="blurred"
          src="../images/main-page-intro-background.jpg"
          alt="test"
          className={styles.bgIntroImage}
        />
        <Container>
          <Typography className={styles.introTitle} variant="h1" component="h1">TDA Development</Typography>
        </Container>
      </Paper>
      <Paper className={styles.aboutCompany}>
        <Container>
          <Box className={styles.aboutCompanyBehindTitle}>О компании</Box>
          <Grid container spacing={6} justifyContent="center">
            <Grid item container xs={10} md={6} spacing={6}>
              <Grid item xs={12}>
                <Stack className={styles.aboutCompanyIntroBlock} spacing={4}>
                  <Typography className={styles.aboutCompanyIntroBlockTitle} variant="h2" component="h2" >О компании</Typography>
                  <Typography className={styles.aboutCompanyIntroBlockDescription} variant="body1" component="p" >“TDA Develop” cтроительная компания – современная и динамично развивающаяся, оказывающая широкий спектр услуг в строительном бизнесе от проектирования до сдачи объектов под ключ. Свою деятельность в строительном бизнесе начала осуществлять с 2013 года и прочно зарекомендовала себя надежной Украинской строительной компанией не только на территории Украины, но и за рубежом. Учредителем и генеральным директором строительной компании «TDA Develop» является - Lorem Ipsum.</Typography>
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack className={styles.aboutCompanyMissionBlock} spacing={2}>
                  <Typography className={styles.aboutCompanyMissionBlockTitle} variant="h5" component="h3">Миссия</Typography>
                  <Typography className={styles.aboutCompanyMissionBlockDescription} variant="body1" component="p">Приоритетом группы строительных компаний «TDA Develop» является профессиональный подход с применением инновационных решении в строительстве воздвигаемых объектов, опытный коллектив, качественные материалы и своевременность сдачи объектов с доступной возможностью приобретения не только жилья, но и других объектов недвижимости.</Typography>
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Box className={styles.aboutCompanyImagesBlock}>
                  <StaticImage
                    className={styles.aboutCompanyImagesBlockDotsGrid}
                    src="../images/dots-grid-design-by-vexels.png"
                    alt="test"
                    width={450}
                    height={420}
                  />
                </Box>
              </Grid>
            </Grid>
            <Grid item container xs={10} md={6} spacing={6}>
              <Grid item>
                <Stack className={styles.aboutCompanyImagesBlock}>
                  <StaticImage
                    className={styles.aboutCompanyImagesBlockImage}
                    placeholder="blurred"
                    src="../images/main-page-intro-background.jpg"
                    alt="test"
                    width={450}
                    height={420}
                  />
                  <Box className={styles.aboutCompanyImagesBlockSquare} width={450} height={420}></Box>
                  <StaticImage
                    className={styles.aboutCompanyImagesBlockDotsGridSecond}
                    src="../images/dots-grid-design-by-vexels.png"
                    alt="test"
                    width={450}
                    height={500}
                  />
                  <StaticImage
                    className={styles.aboutCompanyImagesBlockDotsGridThird}
                    src="../images/dots-grid-design-by-vexels.png"
                    alt="test"
                    width={450}
                    height={470} 
                  />
                </Stack>
              </Grid>
              <Grid item>
                <Stack className={styles.aboutCompanyTargetBlock} spacing={2}>
                  <Typography className={styles.aboutCompanyTargetBlockTitle} variant="h5" component="h3">Цель</Typography>
                  <Typography className={styles.aboutCompanyTargetBlockDescription} variant="body1" component="p">Укрепление статуса компании, которая способна обеспечить потребителя доступной и качественной недвижимостью в срок. Развитие, надежность и качество!</Typography>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Paper>
      <Paper className={styles.projects}>
        <Container>
          <Grid container>
            <Grid item xs={12}>
              <Typography className={styles.projectsTitle} variant="h2" component="h2" hidden>Проекты</Typography>
              <Box className={styles.projectsBehindTitle}>Проекты</Box>
            </Grid>
            <Grid item xs={9} margin="0 auto">
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
                    <CardMedia className={styles.sliderCardImage}>
                      <StaticImage
                        src="../images/main-page-intro-background.jpg"
                        alt="test"
                        width={300}
                        height={300}
                      />
                    </CardMedia>
                    <CardContent className={styles.sliderCardContent}>
                      <Typography className={styles.sliderCardContentTitle} variant="h4" component="h3">
                        Lorem Ipsum Villa
                      </Typography>
                      <Typography className={styles.sliderCardContentDescription} variant="body1" component="div">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi? 
                      </Typography>
                      <Button className={styles.sliderCardContentBtn}>READ MORE</Button>
                    </CardContent>
                  </Card>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                  <Card className={styles.sliderCard}>
                    <CardMedia className={styles.sliderCardImage}>
                      <StaticImage
                        src="../images/main-page-intro-background.jpg"
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
                </SwiperSlide>
                
              </Swiper>
              <StaticImage
                className={styles.projectsImageDotsGrid}
                src="../images/dots-grid-design-by-vexels.png"
                alt="test"
                width={400}
                height={400} 
              />
            </Grid>
          </Grid>
        </Container>
      </Paper>
      <Paper className={styles.services}>
        <Container>
          <Grid container>
            <Grid item xs={12} marginBottom={10}>
              <Box className={styles.servicesBehindTitle}>Почему TDA?</Box>
              <Typography className={styles.servicesTitle} variant="h2" component="h2">Почему TDA DEVELOPMENT?</Typography>
            </Grid>
            <Grid item container xs={12} justifyContent="space-between;">
              <Grid item xs={5}>
                <Stack className={styles.servicesImagesBlock} alignItems="center">
                  <StaticImage
                    className={styles.servicesImagesBlockImage}
                    placeholder="blurred"
                    src="../images/main-page-intro-background.jpg"
                    alt="test"
                    width={450}
                    height={420}
                  />
                  <Box className={styles.servicesImagesBlockSquare} width={450} height={420}></Box>
                  <StaticImage
                    className={styles.servicesImagesBlockDotsGrid}
                    src="../images/dots-grid-design-by-vexels.png"
                    alt="test"
                    width={450}
                    height={420}
                  />
                </Stack>
              </Grid>
              <Grid item container xs={6} columnSpacing={3} rowGap={4} alignContent="center" textAlign="center">
                <Grid item xs={6}>
                  <Stack spacing={2}>
                    <FontAwesomeIcon icon={faCompassDrafting} size="2x" />
                    <Typography variant="h5" component="h5">Разрабатываем уникальные проекты</Typography>
                    <Typography variant="body1" component="p">Комплексная разработка технического проекта с учетом всех особенностей объекта и местности</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={6}>
                  <Stack spacing={2}>
                    <FontAwesomeIcon icon={faTrowelBricks} size="2x" />
                    <Typography variant="h5" component="h5" >Строим объекты любого типа</Typography>
                    <Typography variant="body1" component="p">Объекты любого промышленного назначения – от небольшого перерабатывающего цеха к производственному комплексу</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={6}>
                  <Stack spacing={2}>
                    <FontAwesomeIcon icon={faShieldHalved} size="2x" />
                    <Typography variant="h5" component="h5">Гарантия на постройку</Typography>
                    <Typography variant="body1" component="p">Использование качественных материалов и современных технологий строительства позволяет нам гарантировать превосходное качество возведенных объектов</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={6}>
                  <Stack spacing={2}>
                    <FontAwesomeIcon icon={faLock} size="2x" />
                    <Typography variant="h5" component="h5">Строительство под ключ</Typography>
                    <Typography variant="body1" component="p">От разработки проекта до генерального подряда – вы получаете готовый к использованию объект в необходимый срок</Typography>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </Layout>
  )
}

export default IndexPage
