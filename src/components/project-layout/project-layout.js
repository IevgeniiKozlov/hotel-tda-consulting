import * as React from "react";
import { StyledEngineProvider } from '@mui/material/styles';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);

const ProjectLayout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <main>{children}</main>
      </StyledEngineProvider>
    </ThemeProvider>
  )
}

export default ProjectLayout;