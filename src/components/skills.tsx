"use client"

import { Box, Typography, Container, Grid, LinearProgress, Paper, useTheme } from "@mui/material"
import { motion } from "framer-motion"

export default function Skills() {
  const theme = useTheme()

  const technicalSkills = [
    { name: "JavaScript/TypeScript", level: 80 },
    { name: "C#/Asp.net Core", level: 60 },
    { name: "React.js", level: 70 },
    { name: "Next.js", level: 65 },
    { name: "Node.js", level: 30 },
    { name: "SQL Server/My SQL", level: 50 },
    { name: "HTML/CSS", level: 90 },
    { name: "Tailwind", level: 70 },
    { name: "Material UI/Antd/Radix ui", level: 85 },
    { name: "Zod/Yup", level: 85 },
    { name: "React Query", level: 70 },
    { name: "Context API", level: 80 },

  ]

  const softSkills = [
    { name: "Problem Solving", level: 90 },
    { name: "Communication", level: 85 },
    { name: "Teamwork", level: 90 },
    { name: "Time Management", level: 80 },
  ]

  return (
    <Box
      id="skills"
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
            MY EXPERTISE
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
            Skills & Technologies
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
            I've worked with a range of technologies in the web development world, from frontend to backend. Here's an
            overview of my technical skills and expertise.
          </Typography>
        </Box>

        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Paper
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              elevation={2}
              sx={{ p: 4, borderRadius: 2 }}
            >
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                Technical Skills
              </Typography>
              <Box sx={{ mt: 2 }}>
                {technicalSkills.map((skill, index) => (
                  <Box key={index} sx={{ mb: 3 }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                      <Typography variant="body1">{skill.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {skill.level}%
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={skill.level}
                      sx={{
                        height: 8,
                        borderRadius: 4,
                        bgcolor: theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
                        "& .MuiLinearProgress-bar": {
                          borderRadius: 4,
                        },
                      }}
                    />
                  </Box>
                ))}
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              elevation={2}
              sx={{ p: 4, borderRadius: 2 }}
            >
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                Soft Skills
              </Typography>
              <Box sx={{ mt: 2 }}>
                {softSkills.map((skill, index) => (
                  <Box key={index} sx={{ mb: 3 }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                      <Typography variant="body1">{skill.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {skill.level}%
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={skill.level}
                      sx={{
                        height: 8,
                        borderRadius: 4,
                        bgcolor: theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
                        "& .MuiLinearProgress-bar": {
                          borderRadius: 4,
                        },
                      }}
                    />
                  </Box>
                ))}
              </Box>
            </Paper>

            <Paper
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              elevation={2}
              sx={{ p: 4, borderRadius: 2, mt: 3 }}
            >
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                Tools & Platforms
              </Typography>
              <Grid container spacing={2}>
                {["Git", "GitHub", "GitLab", "VS Code", "Vercel", "Figma"].map((tool, index) => (
                  <Grid item xs={6} sm={4} key={index}>
                    <Box
                      sx={{
                        p: 2,
                        textAlign: "center",
                        bgcolor: theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.03)",
                        borderRadius: 2,
                        transition: "all 0.3s ease",
                        "&:hover": {
                          bgcolor: theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.05)",
                          transform: "translateY(-3px)",
                        },
                      }}
                    >
                      <Typography variant="body2">{tool}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

