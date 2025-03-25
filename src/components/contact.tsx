"use client";
/* eslint-disable react/no-unescaped-entities */

import { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  TextField,
  Button,
  Paper,
  Alert,
  Snackbar,
  useTheme,
  AlertColor,
} from "@mui/material";
import { motion } from "framer-motion";
import { Send, Email, Phone, LocationOn } from "@mui/icons-material";

interface FormErrors {
  [key: string]: string;
}
interface SnackbarState {
  open: boolean;
  message: string;
  severity: AlertColor;
}
export default function Contact() {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [snackbar, setSnackbar] = useState<SnackbarState>({
    open: false,
    message: "",
    severity: "success",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted:", formData);

      setSnackbar({
        open: true,
        message: "Message sent successfully! I'll get back to you soon.",
        severity: "success",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({
      ...prev,
      open: false,
    }));
  };

  const contactInfo = [
    {
      icon: <Email color="primary" />,
      title: "Email",
      content: "joseeantonioo2000@gmail.com",
      link: "mailto:your.email@example.com",
    },
    {
      icon: <Phone color="primary" />,
      title: "Phone",
      content: "+55 (79) 99802-0511",
      link: "tel:+5579998020511",
    },
    {
      icon: <LocationOn color="primary" />,
      title: "Location",
      content: "Aracaju, Brazil",
      link: null,
    },
  ];

  return (
    <Box
      id="contact"
      component="section"
      sx={{
        py: 12,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            variant="h6"
            color="primary"
            gutterBottom
          >
            GET IN TOUCH
          </Typography>
          <Typography
            component={motion.h2}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            variant="h3"
            gutterBottom
            sx={{ fontWeight: 700 }}
          >
            Contact Me
          </Typography>
          <Typography
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 700, mx: "auto", mb: 6 }}
          >
            Have a project in mind or want to discuss potential opportunities?
            Feel free to reach out!
          </Typography>
        </Box>

        <Grid container spacing={6}>
          <Grid item xs={12} md={5}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
                Let's Talk
              </Typography>
              <Typography variant="body1" paragraph color="text.secondary">
                I'm always open to discussing new projects, creative ideas or
                opportunities to be part of your vision.
              </Typography>

              <Box sx={{ mt: 4 }}>
                {contactInfo.map((info, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: 3,
                      p: 2,
                      borderRadius: 2,
                      bgcolor:
                        theme.palette.mode === "dark"
                          ? "rgba(255, 255, 255, 0.05)"
                          : "rgba(0, 0, 0, 0.02)",
                    }}
                  >
                    <Box sx={{ mr: 2 }}>{info.icon}</Box>
                    <Box>
                      <Typography variant="subtitle2" color="text.secondary">
                        {info.title}
                      </Typography>
                      {info.link ? (
                        <Typography
                          variant="body1"
                          component="a"
                          href={info.link}
                          sx={{
                            color: "text.primary",
                            textDecoration: "none",
                            "&:hover": {
                              color: "primary.main",
                            },
                          }}
                        >
                          {info.content}
                        </Typography>
                      ) : (
                        <Typography variant="body1">{info.content}</Typography>
                      )}
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={7}>
            <Paper
              component={motion.form}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              elevation={2}
              onSubmit={handleSubmit}
              sx={{ p: 4, borderRadius: 2 }}
            >
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Your Name"
                    name="name"
                    variant="outlined"
                    value={formData.name}
                    onChange={handleChange}
                    error={Boolean(errors.name)}
                    helperText={errors.name}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Your Email"
                    name="email"
                    variant="outlined"
                    value={formData.email}
                    onChange={handleChange}
                    error={Boolean(errors.email)}
                    helperText={errors.email}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Subject"
                    name="subject"
                    variant="outlined"
                    value={formData.subject}
                    onChange={handleChange}
                    error={Boolean(errors.subject)}
                    helperText={errors.subject}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Your Message"
                    name="message"
                    variant="outlined"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    error={Boolean(errors.message)}
                    helperText={errors.message}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    endIcon={<Send />}
                    fullWidth
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>

        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbar.severity}
            variant="filled"
            sx={{ width: "100%" }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
}
