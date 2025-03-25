"use client";
/* eslint-disable react/no-unescaped-entities */

import { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import { GitHub, Language, Close } from "@mui/icons-material";
import stream from "../asset/image/stream.png";
import catalog from "../asset/image/spaceship-catalog.png";
import Image, { StaticImageData } from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string | StaticImageData;
  tags: string[];
  demoLink: string;
  githubLink: string;
  fullDescription: string;
}
export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects = [
    {
      id: 1,
      title: "Stream Series",
      description:
        "Project with React.Js + Typescript + SCSS stacks, where I integrate 2 endpoints (One about episodes and another about the series), displaying posts about the series, seasons and episodes and some information about them.",
      image: stream.src,
      tags: ["React.js", "TypeScript", "SCSS", "API"],
      demoLink: "https://stream-series.vercel.app/",
      githubLink: "https://github.com/Antonio-Nasc/stream_series",
      fullDescription:
        "Project with React.Js + Typescript + SCSS stacks, where I integrate 2 endpoints (One about episodes and another about the series), displaying posts about the series, seasons and episodes and some information about them.",
    },
    {
      id: 2,
      title: "Spaceship Catalog",
      description:
        "Spaceship project where I understand better how next.js works. Flow of routes, use of tailwind, fonts, searching for data in json to list categories and spaceships, etc.",
      image: catalog.src,
      tags: ["Next.js", "TypeScript", "Material UI", "Tailwind CSS"],
      demoLink: "https://spaceship-catalog.vercel.app/",
      githubLink: "https://github.com/Antonio-Nasc/spaceship_catalog",
      fullDescription:
        "Spaceship project where I understand better how next.js works. Flow of routes, use of tailwind, fonts, searching for data in json to list categories and spaceships, etc.",
    },
  ];

  const handleOpenDetails = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseDetails = () => {
    setSelectedProject(null);
  };

  return (
    <Box
      id="projects"
      component="section"
      sx={{
        py: 12,
        bgcolor: "grey.50",
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
            MY WORK
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
            Recent Projects
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
            Here are some of the projects I've worked on recently. Each project
            showcases different skills and technologies.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={6} key={project.id}>
              <Card
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 2,
                  overflow: "hidden",
                  boxShadow: 2,
                  transition:
                    "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: 8,
                  },
                }}
              >
                <Image
                  height="200"
                  width="800"
                  src={project.image}
                  alt={project.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ fontWeight: 600 }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {project.description}
                  </Typography>
                  <Box
                    sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}
                  >
                    {project.tags.map((tag, i) => (
                      <Chip key={i} label={tag} size="small" />
                    ))}
                  </Box>
                </CardContent>
                <CardActions sx={{ p: 2, pt: 0 }}>
                  <Button
                    size="small"
                    onClick={() => handleOpenDetails(project)}
                  >
                    Learn More
                  </Button>
                  <Box sx={{ ml: "auto", display: "flex", gap: 1 }}>
                    <IconButton
                      size="small"
                      href={project.githubLink}
                      target="_blank"
                      aria-label="GitHub repository"
                    >
                      <GitHub fontSize="small" />
                    </IconButton>
                    <IconButton
                      size="small"
                      href={project.demoLink}
                      target="_blank"
                      aria-label="Live demo"
                    >
                      <Language fontSize="small" />
                    </IconButton>
                  </Box>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Dialog
          open={Boolean(selectedProject)}
          onClose={handleCloseDetails}
          maxWidth="md"
          fullWidth
        >
          {selectedProject && (
            <>
              <DialogTitle sx={{ pr: 6 }}>
                {selectedProject.title}
                <IconButton
                  aria-label="close"
                  onClick={handleCloseDetails}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                  }}
                >
                  <Close />
                </IconButton>
              </DialogTitle>
              <DialogContent dividers>
                {/* <Box sx={{ mb: 3 }}>
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    style={{
                      width: "100%",
                      borderRadius: "8px",
                      maxHeight: "300px",
                      objectFit: "cover",
                    }}
                  />
                </Box> */}
                <Typography variant="body1" paragraph>
                  {selectedProject.fullDescription}
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 600, mb: 1 }}
                  >
                    Technologies Used:
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {selectedProject.tags.map((tag, i) => (
                      <Chip key={i} label={tag} />
                    ))}
                  </Box>
                </Box>
              </DialogContent>
              <DialogActions>
                <Button
                  href={selectedProject.githubLink}
                  target="_blank"
                  startIcon={<GitHub />}
                >
                  GitHub
                </Button>
                <Button
                  href={selectedProject.demoLink}
                  target="_blank"
                  variant="contained"
                  startIcon={<Language />}
                >
                  Live Demo
                </Button>
              </DialogActions>
            </>
          )}
        </Dialog>
      </Container>
    </Box>
  );
}
