import { Trans } from 'gatsby-plugin-react-i18next'
import { graphql } from 'gatsby'
import * as React from "react"
import {
  Paper,
  Box,
  Container,
  Stack,
  Grid,
  Typography,
} from '@mui/material'
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCompassDrafting, faTrowelBricks, faLock, faShieldHalved } from "@fortawesome/free-solid-svg-icons" 

import Layout from "../components/main-layout/layout"
import * as styles from "./index.module.scss"

import ContactForm from "../components/form/contact-form";
import {ProjectsSwiper} from "../components/swiper/projects-swiper/projects-swiper";

const IndexPage = (props) => {
  const projectsData = props.data.allProjectsJson.edges.map(({ node }) => ({ ...node}));
  const { language, pageContext } = props;

  return (
    <Layout>
      <Paper className={styles.intro} component="section">
        <StaticImage
          className={styles.bgIntroImage}
          placeholder="blurred"
          src="../images/main-page-intro-background.jpg"
          alt="test"
        />
        <Container>
          <Grid className={styles.content} container>
            <Grid item xs={12} md={6}>
              <Stack className={styles.presentationBlock}>
                <Box className={styles.title}>
                  <Box className={styles.block} component="span"></Box>
                  <Typography variant="h1" component="h1">TDA<span></span></Typography>
                </Box>
                <Box className={styles.role}>
                  <Box className={styles.block} component="span"></Box>
                  <Typography variant="h1" component="p">DEVELOPMENT</Typography>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} md={5}></Grid>
          </Grid>
        </Container>
      </Paper>
      <Paper className={styles.aboutCompany} component="section">
        <Container>
          <Box className={styles.aboutCompanyBehindTitle}>
            <Trans i18nKey="about-company.intro.title">Про компанію</Trans>
          </Box>
          <Grid container spacing={6} justifyContent="center">
            <Grid item container xs={12} md={6} rowSpacing={4} justifyContent="center">
              <Grid item xs={11}>
                <Stack className={styles.aboutCompanyIntroBlock} spacing={4}>
                  <Typography className={styles.aboutCompanyIntroBlockTitle} variant="h2" component="h2" >
                    <Trans i18nKey="about-company.intro.title">Про компанію</Trans>
                  </Typography>
                  <Typography className={styles.aboutCompanyIntroBlockDescription} variant="body1" component="p">
                    <Trans i18nKey="about-company.intro.description">«TDA Develop» будівельна компанія - сучасна та динамічно розвивається, що надає широкий спектр послуг у будівельному бізнесі від проектування до здачі об'єктів під ключ. Свою діяльність у будівельному бізнесі почала здійснювати з 2013 року та міцно зарекомендувала себе надійною Українською будівельною компанією не лише на території України, а й за кордоном. Засновником та генеральним директором будівельної компанії «TDA Develop» є – Lorem Ipsum.</Trans>
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={11}>
                <Stack className={styles.aboutCompanyMissionBlock} spacing={2}>
                  <Typography className={styles.aboutCompanyMissionBlockTitle} variant="h5" component="h3">
                    <Trans i18nKey="about-company.mission.title">Місія</Trans>
                  </Typography>
                  <Typography className={styles.aboutCompanyMissionBlockDescription} variant="body1" component="p">
                    <Trans i18nKey="about-company.mission.description">Пріоритетом групи будівельних компаній «TDA Develop» є професійний підхід із застосуванням інноваційних рішень у будівництві об'єктів, що споруджуються, досвідчений колектив, якісні матеріали та своєчасність здачі об'єктів з доступною можливістю придбання не тільки житла, а й інших об'єктів нерухомості."</Trans>
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={11}>
                <Box className={styles.aboutCompanyImagesBlock}>
                  <StaticImage
                    className={styles.aboutCompanyImagesBlockDotsGrid}
                    src="../images/dots-grid-design-by-vexels.png"
                    alt="test"
                    width={450}
                    height={450}
                  />
                </Box>
              </Grid>
            </Grid>
            <Grid item container xs={12} md={6} rowGap={6} justifyContent="center">
              <Grid item xs={10}>
                <Stack className={styles.aboutCompanyImagesBlock}>
                  <Box className={styles.aboutCompanyImagesBlockOverlay}></Box>
                  <StaticImage
                    className={styles.aboutCompanyImagesBlockImage}
                    placeholder="blurred"
                    src="../images/main-intro-build.jpg"
                    alt="test"
                    width={450}
                    height={450}
                  />
                  <Box className={styles.aboutCompanyImagesBlockSquare}></Box>
                  <StaticImage
                    className={styles.aboutCompanyImagesBlockDotsGridSecond}
                    src="../images/dots-grid-design-by-vexels.png"
                    alt="test"
                    width={450}
                    height={550}
                  />
                  <StaticImage
                    className={styles.aboutCompanyImagesBlockDotsGridThird}
                    src="../images/dots-grid-design-by-vexels.png"
                    alt="test"
                    width={450}
                    height={450} 
                  /> 
                </Stack>
              </Grid>
              <Grid item xs={10} sm={8}>
                <Stack className={styles.aboutCompanyTargetBlock} spacing={2}>
                  <Typography className={styles.aboutCompanyTargetBlockTitle} variant="h5" component="h3">
                    <Trans i18nKey="about-company.target.title">Ціль</Trans>
                  </Typography>
                  <Typography className={styles.aboutCompanyTargetBlockDescription} variant="body1" component="p">
                    <Trans i18nKey="about-company.target.description">Зміцнення статусу компанії, яка здатна забезпечити споживача доступною та якісною нерухомістю у строк. Розвиток, надійність та якість!</Trans>
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Paper>
      <Paper className={styles.projects} component="section">
        <Container>
          <Grid container justifyContent="center">
            <Grid item xs={12}>
              <Typography className={styles.projectsTitle} variant="h2" component="h2" hidden>
                <Trans i18nKey="projects.title">Проекти</Trans>
              </Typography>
              <Box className={styles.projectsBehindTitle}>
                <Trans i18nKey="projects.title">Проекти</Trans>
              </Box>
            </Grid>
            <Grid item xs={9}>
              <Stack className={styles.projectsContentBlock}>
                <ProjectsSwiper language={pageContext.language} data={projectsData}/>
                <StaticImage
                  className={styles.projectsImageDotsGrid}
                  src="../images/dots-grid-design-by-vexels.png"
                  alt="test"
                  width={400}
                  height={400} 
                />
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Paper>
      <Paper className={styles.services} component="section">
        <Container>
          <Box className={styles.servicesBehindTitle}>
            <Trans i18nKey="services.title">Чому TDA DEVELOPMENT?</Trans>
          </Box>
          <Grid container>
            <Grid item xs={12}>
              <Typography className={styles.servicesTitle} variant="h2" component="h2">
                <Trans i18nKey="services.title">Чому TDA DEVELOPMENT?</Trans>
              </Typography>
            </Grid>
            <Grid item container xs={12} columnGap={5} rowGap={15} justifyContent="center" alignItems="center">
              <Grid item xs={10} md={6}>
                <Stack className={styles.servicesImagesBlock}>
                  <Box className={styles.servicesImagesBlockOverlay}></Box>
                  <StaticImage
                    className={styles.servicesImagesBlockImage}
                    placeholder="blurred"
                    src="../images/main-finish-hotel.jpg"
                    alt="test"
                    width={450}
                    height={420}
                  />
                  <Box className={styles.servicesImagesBlockSquare}></Box>
                  <StaticImage
                    className={styles.servicesImagesBlockDotsGrid}
                    src="../images/dots-grid-design-by-vexels.png"
                    alt="test"
                    width={450}
                    height={420}
                  />
                </Stack>
              </Grid>
              <Grid item container xs={8} md={5} columnSpacing={3} rowSpacing={4} alignContent="center" textAlign="center">
                <Grid item xs={12} md={6}>
                  <Stack spacing={2}>
                    <FontAwesomeIcon icon={faCompassDrafting} size="2x" />
                    <Typography variant="h5" component="h5">
                      <Trans i18nKey="services.list-services.item-1.title">Розробляємо унікальні проекти</Trans>
                    </Typography>
                    <Typography variant="body1" component="p">
                      <Trans i18nKey="services.list-services.item-1.description">Комплексна розробка технічного проекту з урахуванням усіх особливостей об'єкта та місцевості</Trans>
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Stack spacing={2}>
                    <FontAwesomeIcon icon={faTrowelBricks} size="2x" />
                    <Typography variant="h5" component="h5">
                      <Trans i18nKey="services.list-services.item-2.title">Будуємо об'єкти будь-якого типу</Trans>
                    </Typography>
                    <Typography variant="body1" component="p">
                      <Trans i18nKey="services.list-services.item-2.description">Об'єкти будь-якого промислового призначення – від невеликого переробного цеху до виробничого комплексу</Trans>
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Stack spacing={2}>
                    <FontAwesomeIcon icon={faShieldHalved} size="2x" />
                    <Typography variant="h5" component="h5">
                      <Trans i18nKey="services.list-services.item-3.title">Гарантія на будівництво</Trans>
                    </Typography>
                    <Typography variant="body1" component="p">
                      <Trans i18nKey="services.list-services.item-3.description">Використання якісних матеріалів та сучасних технологій будівництва дозволяє нам гарантувати чудову якість зведених об'єктів</Trans>
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Stack spacing={2}>
                    <FontAwesomeIcon icon={faLock} size="2x" />
                    <Typography variant="h5" component="h5">
                      <Trans i18nKey="services.list-services.item-4.title">Будівництво під ключ</Trans>
                    </Typography>
                    <Typography variant="body1" component="p">
                      <Trans i18nKey="services.list-services.item-4.description">Від розробки проекту до генерального підряду – ви отримуєте готовий до використання об'єкт у потрібний термін</Trans>
                    </Typography>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Paper>
      <Paper className={styles.contacts} component="section">
        <StaticImage
          className={styles.bgContactsImage}
          src="../images/main-home.jpg"
          alt="test"
        />
        <Container>
          <Box className={styles.contactsBehindTitle}>
            <Trans i18nKey="contacts.title">Зв'яжіться з нами</Trans>
          </Box>
          <Grid className={styles.content} container columnGap={10} justifyContent="center">
            <Grid item xs={12}>
              <Typography className={styles.contactsTitle} variant="h2" component="h2">
                <Trans i18nKey="contacts.title">Зв'яжіться з нами</Trans>
              </Typography>
            </Grid>
            <Grid className={styles.contactsFormBlock} item xs={10} md={5}>
              <ContactForm />
            </Grid>
            <Grid item xs={8} md={5}></Grid>
          </Grid>
        </Container>
      </Paper>
    </Layout>
  )
}

export default IndexPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["index", "calma-holiday-villa"] }, language: { eq: $language } }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    allProjectsJson {
      edges {
        node {
          path
          projectPhoto {
            alt
            src {
              childImageSharp {
                gatsbyImageData(width: 300, height: 300, formats: WEBP)
              }
            }
          }
          slug
        }
      }
    }
  }
`