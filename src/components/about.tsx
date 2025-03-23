"use client";

import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { Code, Devices, Rocket } from "@mui/icons-material";

export default function About() {
  const theme = useTheme();

  const features = [
    {
      icon: <Code fontSize="large" color="primary" />,
      title: "Clean Code",
      description:
        "I write clean, maintainable, and efficient code following best practices and industry standards.",
    },
    {
      icon: <Devices fontSize="large" color="primary" />,
      title: "Responsive Design",
      description:
        "I create responsive layouts that work seamlessly across all devices and screen sizes.",
    },
    {
      icon: <Rocket fontSize="large" color="primary" />,
      title: "Performance Focused",
      description:
        "I optimize applications for maximum speed and scalability, ensuring the best user experience.",
    },
  ];

  return (
    <Box
      id="about"
      component="section"
      sx={{
        py: 12,
        bgcolor: theme.palette.mode === "dark" ? "background.paper" : "grey.50",
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
            ABOUT ME
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
            Who I Am
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
            I'm a passionate Full Stack Developer with expertise in building
            modern web applications. With a strong foundation in both frontend
            and backend technologies, I create seamless digital experiences.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                elevation={2}
                sx={{
                  p: 4,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  borderRadius: 2,
                  transition:
                    "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: 8,
                  },
                }}
              >
                <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={6} sx={{ mt: 6, display: "flex", justifyContent: "center" }}>
          <Grid item xs={12} md={6}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
                My Journey
              </Typography>
              <Typography variant="body1" paragraph>
                My journey in technology began with a solid foundation in
                backend and frontend development, gaining enriching experiences
                that shaped the way I build efficient and scalable solutions.
              </Typography>
              <Typography variant="body1" paragraph>
                In 2022, I had the opportunity to intern at Compass.UOL, where I
                enhanced my knowledge in Java with Spring Boot, following the
                Scrum methodology to develop practical projects at the end of
                each sprint. This experience gave me a broad perspective on
                backend development and the importance of organization in the
                software development lifecycle.
              </Typography>
              <Typography variant="body1" paragraph>
                My journey at Serveloja started in 2023 as a Junior Developer,
                focusing on building solutions for customer onboarding, payment
                systems, and debt renegotiation. Additionally, I contributed to
                the development of internal dashboards and the modernization of
                legacy systems, improving both the user experience and the
                company's operational efficiency.
              </Typography>
              <Typography variant="body1" paragraph>
                In 2024, I was promoted to Junior Developer I, where I took on
                even more complex challenges, including implementing
                authentication and authorization with Keycloak and developing
                integrations for sending receipts via WhatsApp, email, and SMS.
                Moreover, I continued enhancing APIs for payments and debt
                renegotiation, ensuring security and scalability in our
                solutions.
              </Typography>
              <Typography variant="body1" paragraph>
                Throughout this journey, I have worked in all stages of the
                software development lifecycle, from planning and design to
                implementation, testing, and continuous maintenance. I have
                worked with technologies such as JavaScript, TypeScript,
                React.js, ASP.NET Core, SQL Server, Tailwind, Material UI, Ant
                Design, and React Query, always striving to create intuitive and
                high-performance solutions.
              </Typography>
              <Typography variant="body1" paragraph>
                My mission is to continue evolving as a developer, learning new
                technologies, and contributing to the creation of innovative
                systems that positively impact user experience.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
