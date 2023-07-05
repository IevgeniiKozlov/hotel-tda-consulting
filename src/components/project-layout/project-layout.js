import * as React from "react";
import { StyledEngineProvider } from '@mui/material/styles';
import { Box } from '@mui/material';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';

import Header from "../header/header";
import Footer from "../footer/footer";

import { wrapper } from "./project-layout.module.scss";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const ProjectLayout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <Box className={wrapper}>
          <Header />
            <main>
              { children }
            </main>
          <Footer /> 
        </Box>
      </StyledEngineProvider>
    </ThemeProvider>
  )
}

export default ProjectLayout;