import * as React from "react";
import { Trans } from 'gatsby-plugin-react-i18next'
import { useFormik } from "formik";
import * as yup from "yup";
import { TextField, Button, Box } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import * as styles from "./contact-form.module.scss";

import PhoneInput from 'react-phone-number-input'
import "react-phone-number-input/style.css";

const validationSchema = yup.object({
  fullName: yup
    .string()
    .required(<Trans i18nKey="contact-form.errors.name.required">Необхідно вказати ім'я</Trans>),
  phoneNumber: yup
    .number()
    .required(<Trans i18nKey="contact-form.errors.phone.required">Телефон обов'язковий</Trans>),
});

const PhoneInputField = React.forwardRef((props, ref) => {
  return (
    <TextField
      {...props}
      inputRef={ref}
      fullWidth
      label={<Trans i18nKey="contact-form.phone">Ваш номер телефона</Trans>}
      variant="outlined"
      name="phoneNumber"
    />
  );

});

export const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      phoneNumber: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Box className={styles.contactForm}>
      <form onSubmit={formik.handleSubmit}>
        <Box className={styles.formControl}>
          <AccountCircleIcon />
          <TextField
            fullWidth
            id="fullName"
            name="fullName"
            label={<Trans i18nKey="contact-form.name">Ваше им'я</Trans>}
            value={formik.values.fullName}
            onChange={formik.handleChange}
            error={formik.touched.fullName && Boolean(formik.errors.fullName)}
            helperText={formik.touched.fullName && formik.errors.fullName}
          />
        </Box>
        <PhoneInput
          id="phoneNumber"
          value={formik.values.phoneNumber}
          onChange={e => formik.setFieldValue("phoneNumber", e)}
          error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
          helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
          inputComponent={PhoneInputField}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          <Trans i18nKey="contact-form.btn">Відправка</Trans>
        </Button>
      </form>
    </Box>
  );
}