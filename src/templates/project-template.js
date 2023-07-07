import * as React from "react";
import * as styles from "./project-template.module.scss";
import ProjectLayout from "../components/project-layout/project-layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import { Trans } from "gatsby-plugin-react-i18next";
import { Paper, Container, Grid, Typography, Box, Stack} from '@mui/material';
import VillaOutlinedIcon from '@mui/icons-material/VillaOutlined';
import LocalParkingOutlinedIcon from '@mui/icons-material/LocalParkingOutlined';
import PoolOutlinedIcon from '@mui/icons-material/PoolOutlined';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import SliderGallery from "../components/swiper/slider-gallery/slider-gallery";
import LeafleftMap from "../components/calma-leafleft-map/LeafleftMap";
import SliderCard from "../components/swiper/slider-card/slider-card.js";
import ContactForm from "../components/form/contact-form";

const ProjectTemplate = ({pageContext}) => {

  const project = pageContext.project.node.content;

  const { intro, greeting, placeDescription, gallery } = project;
  
  const mainBg = getImage(intro.main_bg_image.src);
  const placeDescriptionImage = placeDescription.images.map((img) => img.image);
  const galleryImage = gallery.map((image) => image)

  return (
    <ProjectLayout>
      <Paper className={styles.intro} component="section">
         <GatsbyImage 
          className={styles.bgIntro} 
          alt={intro.main_bg_image.alt}
          image={mainBg} 
        />
        <Container>
          <Grid container className={styles.introContent}>
            <Grid item xs={12} mb={5}>
              <Stack spacing={2} className={styles.textAnimation}>
                <Typography className={styles.introTitle} variant="h1" component="h1">
                  Calma Holiday Villa
                </Typography>
                <Typography className={styles.introSubTitle} variant="h2" component="p">
                  in heart Platja d`Aro
                </Typography>
                <Typography className={styles.introDescriptionTitle} variant="h5" component="p">
                  <Trans i18nKey="intro.descriptionTitle">Нерухомість класа люкс на узбережжі Costa Brava</Trans>
                </Typography>
              </Stack>
            </Grid>
            <Grid item container xs={10} mt={5}>
                <Grid item container xs={12} md={4} spacing={1} className={styles.textAnimation}>
                  <Grid item xs={5} display="flex" justifyContent="center">
                    <Typography className={styles.introTitle} variant="h1" component="span">20</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Stack className={styles.introSubTitle}>
                      <Typography variant="h6" component="span">
                        <Trans i18nKey="intro.advantages.20">Автономних триповерхових будинків 150 кв</Trans>
                      </Typography>
                    </Stack>
                  </Grid>
                </Grid>
                <Grid item container xs={12} md={4} spacing={1} alignItems="center" className={styles.textAnimation}>
                  <Grid item xs={5} display="flex" justifyContent="center">
                    <Typography className={styles.introTitle} variant="h1" component="p">10</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Stack className={styles.introSubTitle}>
                      <Typography variant="h6" component="span">
                        <Trans i18nKey="intro.advantages.10">Хвилин до центра міста</Trans>
                      </Typography>
                    </Stack>
                  </Grid>
                </Grid>
                <Grid item container xs={12} md={4} spacing={1} alignItems="center" className={styles.textAnimation}>
                  <Grid item xs={5} display="flex" justifyContent="center">
                    <Typography className={styles.introTitle} variant="h1" component="p">5</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Stack className={styles.introSubTitle}>
                      <Typography variant="h6" component="span">
                        <Trans i18nKey="intro.advantages.5">Хвилин до пляжу</Trans>
                      </Typography>
                    </Stack>
                  </Grid>
                </Grid>
            </Grid>
          </Grid>
        </Container>
      </Paper>
       <Paper className={styles.greeting} component="section">
        <Container>
          <Grid container>
            <Grid item xs={12} md={7} mb={3} className={styles.frame}>
              <Stack spacing={3}>
                <Typography className={styles.greetingText} variant="h6" component="p">
                  <Trans i18nKey="greeting.greetingText1">
                    Ласкаво просимо до <span>Calma Holiday Villa</span> - розкішного готелю в самому серці <span>Platja D'aro</span> на узбережжі <span>Costa Brava</span>. 
                    Ми пропонуємо вам унікальну можливість придбати цей чудовий готель, 
                    який приверне увагу туристів своєю вишуканістю та зручностями, а вам буде приносити стабільний дохід.
                  </Trans>
                </Typography>
                <Typography className={styles.greetingText} variant="h6" component="p">
                  <Trans i18nKey="greeting.greetingText2">
                    Готель <span>Calma Holiday Villa</span> - це ідеальне місце для того, щоб насолоджуватись 
                    розкішним життям у цьому прекрасному місті на узбережжі <span>Costa Brava</span>. 
                    Якщо ви зацікавлені у придбанні нерухомості, 
                    не пропустіть цю нагоду. Зверніться до нашої команди, щоб отримати детальну 
                    інформацію та організувати огляд готелю.
                  </Trans>
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={5}>
              <SliderCard images={greeting.images}/>
            </Grid>
          </Grid>
        </Container>
      </Paper>
      <Paper className={styles.placeDescription} elevation={0}>
        <Container>
          <Grid container>
            <Grid item container spacing={5}>
              <Grid item xs={12} md={6}>
                <Stack spacing={2}>
                  <Typography className={styles.title} variant="h3" component="p">
                    Costa Brava
                  </Typography>
                  <Typography className={styles.text} variant="h6" component="p">
                    <Trans i18nKey="placeDescription.costaBrava">
                      Один з найкрасивіших куточків Іспанії. 
                      Назва <span>Costa Brava</span>, яка перекладається як 'Берег сміливих', 
                      є наслідком його недоторканого первісного ландшафту та особливого колориту. 
                      Це побережжя, відоме переважно своїми укритими чистими пляжами, 
                      кришталево чистою водою та таємними бухтами. 
                      Тут можна знайти пляжі для всіх смаків - від маленьких, 
                      затишних бухт до великих пляжів з усіма необхідними зручностями.
                    </Trans>
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <GatsbyImage
                  alt={placeDescriptionImage[0].alt}
                  image={placeDescriptionImage[0].src.childImageSharp.gatsbyImageData} 
                />
              </Grid>
              <Grid item xs={12} md={6}>
              <GatsbyImage
                  alt={placeDescriptionImage[1].alt}
                  image={placeDescriptionImage[1].src.childImageSharp.gatsbyImageData} 
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={2}>
                  <Typography className={styles.title} variant="h3" component="p">
                    Platja D'aro
                  </Typography>
                  <Typography className={styles.text} variant="h6" component="p">
                    <Trans i18nKey="placeDescription.platjaDaro">
                      Муніципалітет розташований на півночі <span>Costa Brava</span>, 
                      вздовж берегової лінії лазурного Середземного моря. 
                      Місто має ідеальне місце розташування для тих, 
                      хто бажає насолоджуватися красою середземноморського узбережжя, 
                      але не хоче відчувати натовпів туристів. Захоплюючі пляжі, 
                      зелені ліси, мальовничі гори та історичні пам'ятки роблять <span>Platja d'Aro</span> привабливим місцем для туристів з усього світу.
                    </Trans>
                  </Typography>
                </Stack> 
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Paper>
      <Paper className={styles.location} component="section">
        <Container>
          <Box className={styles.contactsBehindTitle}>
            <Trans i18nKey="location.title">Локація</Trans>
          </Box>
          <Grid container>
              <Grid item xs={12} mb={3}>
                <Typography className={styles.title} variant="h2" component="p">
                  <Trans i18nKey="location.title">Локація</Trans> 
                </Typography>
              </Grid>
              <Grid item container>
                <Grid className={styles.frame} item xs={12} md={6}>
                  <Stack spacing={3}>
                    <Typography className={styles.text} variant="h6" component="p">
                      <Trans i18nKey="location.locationText1">
                        Місто розташоване в 35 км на південь від <span>Girona</span> та менше, 
                        ніж за 100 км на південний захід від <span>Barcelona</span>. 
                        Зручний доїзд з аеропорту <span>Barcelona</span> забезпечується 
                        регулярними автобусними маршрутами, а також можливість 
                        оренди автомобіля.
                      </Trans>
                    </Typography>
                    <Typography className={styles.text} variant="h6" component="p">
                      <Trans i18nKey="location.locationText2">
                        Це один з обраних курортів для сімейного 
                        відпочинку завдяки чудовій інфраструктурі та комфортному 
                        авіа та залізничному зв'язку з <span>Barcelona</span> та <span>Girona</span>
                      </Trans>
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={5}>
                  <LeafleftMap />
                </Grid>
              </Grid>
          </Grid>
        </Container>
      </Paper>
      <Paper className={styles.gallery} component="section">
        <Container>
          <Box className={styles.contactsBehindTitle}>
            <Trans i18nKey="gallery.title">Галерея</Trans>
          </Box>
          <Grid container>
            <Grid item xs={12} mb={5}>
              <Typography className={styles.title} variant="h2">
                <Trans i18nKey="gallery.title">Галерея</Trans>
              </Typography>
            </Grid>
            <SliderGallery images = {galleryImage}/> 
          </Grid>
        </Container>
      </Paper>
      <Paper className={styles.services} elevation={0} component="section">
        <Container>
          <Grid container>
            <Grid item container spacing={5}>
              <Grid item xs={12} md={6}>
                <Stack spacing={3}>
                  <Box display="flex" alignItems="center" gap={3}>
                    <VillaOutlinedIcon className={styles.servicesIcon}/>
                    <Typography className={styles.text} variant="h6" component="span">
                      <Trans i18nKey="services.villa">Двадцять повністю обладнаних розкішних вілл</Trans>
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center" gap={3}>
                    <LocalParkingOutlinedIcon className={styles.servicesIcon}/>
                    <Typography className={styles.text} variant="h6" component="span">
                      <Trans i18nKey="services.parking">Приватний паркінг на 20 місць</Trans>
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center" gap={3}>
                    <PoolOutlinedIcon className={styles.servicesIcon}/>
                    <Typography className={styles.text} variant="h6" component="span">
                      <Trans i18nKey="services.pool">Два басейни, один з яких для дітей</Trans>
                    </Typography>
                  </Box>
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={3}>
                  <Box display="flex" alignItems="center" gap={3}>
                    <RestaurantOutlinedIcon className={styles.servicesIcon}/>
                    <Typography className={styles.text} variant="h6" component="span">
                      <Trans i18nKey="services.bar">Бар та ресторан</Trans>
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center" gap={3}>
                    <StorefrontOutlinedIcon className={styles.servicesIcon}/>
                    <Typography className={styles.text} variant="h6" component="span">
                      <Trans i18nKey="services.shop">Міні-маркет на території комплексу</Trans>
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center" gap={3}>
                    <PetsOutlinedIcon className={styles.servicesIcon}/>
                    <Typography className={styles.text} variant="h6" component="span">
                      <Trans i18nKey="services.pet">Розміщення з хатніми тваринами</Trans>
                    </Typography>
                  </Box>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Paper>
      <Paper className={styles.contacts} elevation={0}>
        {/* <Box className={styles.contactsBehindTitle}>
          <Trans i18nKey="contacts.title">Зацікавила пропозиція</Trans>
        </Box> */}
        <Grid container spacing={3}>
          <Grid item xs={12} className={styles.alignment}>
            <Typography className={styles.title} variant="h3" component="p">
              <Trans i18nKey="contacts.title">Зацікавила пропозиція</Trans>
            </Typography>
          </Grid>
          <Grid item xs={12} className={styles.alignment}>
            <ContactForm />
          </Grid>
        </Grid>
      </Paper>
    </ProjectLayout>
  )
}

export default ProjectTemplate;

export const queryResult = graphql`
  query queryResult {
    locales: allLocale(
      filter: { ns: { in: ["calma-holiday-villa", "index"] }}
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
