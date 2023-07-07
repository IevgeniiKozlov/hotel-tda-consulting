import * as React from "react";
import { StyledEngineProvider } from '@mui/material/styles';
import { Box } from '@mui/material';
import {
  ThemeProvider,
} from '@mui/material/styles';

import Header from "../header/header";
import Footer from "../footer/footer";

import theme from '../../theme';
import { wrapper } from "./project-layout.module.scss";

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