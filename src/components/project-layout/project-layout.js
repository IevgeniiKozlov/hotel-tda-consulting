import * as React from "react";
import { StyledEngineProvider } from '@mui/material/styles';
import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import Header from "../header/header";
import Footer from "../footer/footer";

import theme from '../../theme';
import { wrapper } from "./project-layout.module.scss";

const ProjectLayout = ({ children }) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
          <Box className={wrapper}>
            <Header />
              <main>
                { children }
              </main>
            <Footer /> 
          </Box>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default ProjectLayout;