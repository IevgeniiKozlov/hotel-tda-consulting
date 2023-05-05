import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import {
  AppBar,
  Toolbar,
  Box,
  Stack,
  Container,
  Typography,
} from '@mui/material';
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import * as styles from "./header.module.scss"

export default () => (
  <AppBar className={styles.header}>
    <Container>
      <Toolbar className={styles.toolbar} disableGutters>
        <Box className={styles.logo}>
          <Link to="/">
            <StaticImage
              src="../../images/logo.png"
              placeholder="blurred"
              alt="logo"
              width={120}
              height={120}
            />
          </Link>
        </Box>
        <Box className={styles.communication}>
          <Stack className={styles.phone} direction="row">
            <FontAwesomeIcon icon={faPhone} size="2x"/>
            <Typography variant="h4" component="p">050 333 22 11</Typography>
          </Stack>
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
);