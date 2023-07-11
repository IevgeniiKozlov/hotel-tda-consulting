import * as React from "react";
import { useState } from "react";
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import { useFormik } from "formik";
import axios from "axios";
import * as yup from "yup";
import { TextField, Box, Typography } from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import CheckIcon from '@mui/icons-material/Check';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
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

const CustomIcon = ({state}) => {
    switch(state.status) {
      case 'failed':
        return <ErrorOutlineIcon />;
      case 'success':
        return <CheckIcon />;
      default:
        return <AttachEmailIcon/>
    }
}

const ContactForm = () => {

  const { t } = useTranslation();

  const [loadingBtn, setLoadingBtn] = useState({
    status: null,
    message: null
  })

  const formik = useFormik({
    initialValues: {
      fullName: "",
      phoneNumber: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      setLoadingBtn({ status: 'pending', message: null })
      axios({
        method: "POST",
        url: "https://formspree.io/f/mknlnvvw",
        data: values,
      })
      .then(response => {
        actions.setSubmitting(false);
        actions.resetForm();
        setLoadingBtn({status: 'success', message: t('contact-form.status.success')});
        // handleServerResponse(true, "Thanks!");
      })
      .catch(error => {
        actions.setSubmitting(false);
        setLoadingBtn({status: 'failed', message: t('contact-form.status.failed')})
        // handleServerResponse(false, error.response.data.error);
      });
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
            label={<Trans i18nKey="contact-form.name">Ваше ім'я</Trans>}
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
        <LoadingButton 
          color="primary" 
          variant="contained" 
          fullWidth
          type="submit"
          endIcon={<CustomIcon state={loadingBtn} />}
          loading={loadingBtn.status === 'pending'}
          loadingPosition="end"
        >
          <Trans i18nKey="contact-form.btn">Відправка</Trans>
        </LoadingButton>
        {loadingBtn.message && <Typography variant="body1" component="p" textAlign="center" mt={-4} color={loadingBtn.status === 'failed' ? "red" : "green"}>{loadingBtn.message}</Typography>}
      </form>
    </Box>
  );
}

export default ContactForm;