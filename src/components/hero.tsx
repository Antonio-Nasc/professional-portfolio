"use client"
/* eslint-disable react/no-unescaped-entities */

import { Box, Typography, Button, Container, Grid, useTheme, IconButton } from "@mui/material"
import { motion } from "framer-motion"
import { ArrowDownward } from "@mui/icons-material"
import perfil from "../asset/image/perfl.jpg"
import Image from 'next/image'

export default function Hero() {

  return (
    <Box
      id="home"
      component="section"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        pt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="overline"
                component="div"
                sx={{
                  mb: 2,
                  color: "primary.main",
                  fontWeight: 500,
                  letterSpacing: 1.5,
                }}
              >
                Welcome to my portfolio
              </Typography>
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                }}
              >
                Hi, I'm{" "}
                <Box component="span" sx={{ color: "primary.main" }}>
                  José Nascimento
                </Box>
              </Typography>
              <Typography
                variant="h5"
                component="h2"
                sx={{
                  fontWeight: 400,
                  mb: 4,
                  color: "text.secondary",
                }}
              >
                Full Stack Developer
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, maxWidth: "90%" }}>
                I build exceptional and accessible digital experiences for the web. Specialized in creating modern,
                responsive web applications with cutting-edge technologies.
              </Typography>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => {
                    const element = document.querySelector("#projects")
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                >
                  View Projects
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => {
                    const element = document.querySelector("#contact")
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                >
                  Contact Me
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                src={perfil}
                alt="Profile"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Box
        sx={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          animation: "bounce 2s infinite",
          "@keyframes bounce": {
            "0%, 100%": {
              transform: "translateX(-50%) translateY(0)",
            },
            "50%": {
              transform: "translateX(-50%) translateY(10px)",
            },
          },
        }}
      >
        <IconButton
          color="primary"
          onClick={() => {
            const element = document.querySelector("#about")
            if (element) {
              element.scrollIntoView({ behavior: "smooth" })
            }
          }}
        >
          <ArrowDownward />
        </IconButton>
      </Box>
    </Box>
  )
}

