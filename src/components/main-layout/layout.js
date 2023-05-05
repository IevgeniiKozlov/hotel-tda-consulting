import * as React from "react"
import {
  Box
} from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';

import Header from "../header/header";
import Footer from "../footer/footer";

import { wrapper } from "./layout.module.scss";

const MainLayout = ({ children }) => (
  <StyledEngineProvider injectFirst>
    <Box className={wrapper}>
      <Header />
      <main>
        { children }
      </main>
      <Footer />
    </Box>
  </StyledEngineProvider>
);

export default MainLayout;