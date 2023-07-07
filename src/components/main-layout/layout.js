import * as React from "react"
import {
  Box
} from '@mui/material';
import { StyledEngineProvider, ThemeProvider  } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Header from "../header/header";
import Footer from "../footer/footer";
import theme from "../../theme";
import { wrapper } from "./layout.module.scss";

const MainLayout = ({ children }) => (
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
);

export default MainLayout;