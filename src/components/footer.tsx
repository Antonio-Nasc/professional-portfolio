"use client"

import { Box, Typography, Container, Grid, IconButton, Link, useTheme } from "@mui/material"
import { GitHub, LinkedIn, Instagram } from "@mui/icons-material"

export default function Footer() {
  const theme = useTheme()
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <GitHub />, url: "https://github.com/Antonio-Nasc", label: "GitHub" },
    { icon: <LinkedIn />, url: "https://www.linkedin.com/in/jose-antonio-nascimento-957124211/", label: "LinkedIn" },
    { icon: <Instagram />, url: "https://www.instagram.com/antonio__nasc/", label: "Instagram" },
  ]

  const footerLinks = [
    { title: "Home", url: "#home" },
    { title: "About", url: "#about" },
    { title: "Skills", url: "#skills" },
    { title: "Projects", url: "#projects" },
    { title: "Contact", url: "#contact" },
  ]

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        bgcolor: theme.palette.mode === "dark" ? "background.paper" : "grey.900",
        color: theme.palette.mode === "dark" ? "text.primary" : "common.white",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              José Nascimento
            </Typography>
            <Typography
              variant="body2"
              sx={{ mb: 2, color: theme.palette.mode === "dark" ? "text.secondary" : "grey.400" }}
            >
              Full Stack Developer specializing in building exceptional digital experiences.
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              {socialLinks.map((link, index) => (
                <IconButton
                  key={index}
                  component="a"
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  sx={{
                    color: theme.palette.mode === "dark" ? "text.secondary" : "grey.400",
                    "&:hover": {
                      color: "primary.main",
                    },
                  }}
                >
                  {link.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Quick Links
            </Typography>
            <Box component="nav" sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {footerLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  underline="none"
                  sx={{
                    color: theme.palette.mode === "dark" ? "text.secondary" : "grey.400",
                    "&:hover": {
                      color: "primary.main",
                    },
                  }}
                >
                  {link.title}
                </Link>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Contact
            </Typography>
            <Typography
              variant="body2"
              sx={{ mb: 1, color: theme.palette.mode === "dark" ? "text.secondary" : "grey.400" }}
            >
              Email: joseeantonioo2000@gmail.com
            </Typography>
            <Typography
              variant="body2"
              sx={{ mb: 1, color: theme.palette.mode === "dark" ? "text.secondary" : "grey.400" }}
            >
              Phone: +55 (79) 99802-0511
            </Typography>
            <Typography variant="body2" sx={{ color: theme.palette.mode === "dark" ? "text.secondary" : "grey.400" }}>
              Location: Aracaju, Brazil
            </Typography>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 6,
            pt: 3,
            borderTop: 1,
            borderColor: theme.palette.mode === "dark" ? "divider" : "grey.800",
            textAlign: "center",
          }}
        >
          <Typography variant="body2" sx={{ color: theme.palette.mode === "dark" ? "text.secondary" : "grey.400" }}>
            © {currentYear} José Nascimento. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

