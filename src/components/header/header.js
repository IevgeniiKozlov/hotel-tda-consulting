import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link, useI18next } from 'gatsby-plugin-react-i18next';
import {
  AppBar,
  Toolbar,
  Box,
  Stack,
  Container,
  Typography,
  ToggleButtonGroup,
  ToggleButton
} from '@mui/material';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import * as styles from "./header.module.scss";

const Header = () => {
  const { languages, originalPath, i18n } = useI18next();

  return (
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
          <Stack className={styles.communication} direction="column">
            <Box className={styles.communicationItem}>
              <FontAwesomeIcon icon={faEnvelope} size="1x" beat />
              <Typography variant="h5" component="p">contact@tda-development.com.ua</Typography>
            </Box>
            <Box className={styles.communicationItem}>
              <FontAwesomeIcon icon={faPhone} size="1x" beat />
              <Typography variant="h5" component="p">+380 67 634 04 22</Typography>
            </Box>
          </Stack>
          <ToggleButtonGroup
            className={styles.languageToggleBtn}
            value={i18n.language}
            exclusive
            aria-label="Platform"
          >
            {languages.map((lng) => (
              <ToggleButton
                className={styles.languageToggleBtnLink}
                key={lng}
                component={Link}
                to={originalPath}
                language={lng}
                value={lng}
              >{ lng }</ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;