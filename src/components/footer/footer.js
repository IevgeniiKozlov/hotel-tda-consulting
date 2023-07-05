import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCopyright } from "@fortawesome/free-solid-svg-icons"
import {
  Paper,
  Container,
  Typography,
  Stack
} from '@mui/material';
import * as styles from "./footer.module.scss";

export default () => (
  <Paper className={styles.footer} component="footer">
    <Container>
      <Stack direction="row" spacing={1} justifyContent="center" alignItems="center">
        <FontAwesomeIcon icon={faCopyright} />
        <Typography>{new Date().getFullYear()} TDA Development</Typography>
      </Stack>
    </Container>
  </Paper>
);