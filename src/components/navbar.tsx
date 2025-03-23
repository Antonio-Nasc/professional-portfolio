"use client"

import { useState, useEffect } from "react"
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  Container,
} from "@mui/material"
import { Menu as MenuIcon, LightMode, DarkMode } from "@mui/icons-material"
import { useTheme } from "next-themes"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const isMobile = useMediaQuery("(max-width:768px)")

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Portfolio
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemText
              primary={item.name}
              sx={{
                textAlign: "center",
                "& .MuiTypography-root": {
                  py: 1,
                },
              }}
              onClick={() => {
                const element = document.querySelector(item.href)
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" })
                }
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <AppBar
      position="fixed"
      color="default"
      sx={{
        boxShadow: scrolled ? 1 : 0,
        bgcolor: scrolled ? "background.paper" : "transparent",
        transition: "all 0.3s ease",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0, fontWeight: 700 }}>
            PORTFOLIO
          </Typography>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item.name}
                sx={{ color: "text.primary" }}
                onClick={() => {
                  const element = document.querySelector(item.href)
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>

         
        </Toolbar>
      </Container>

      <Drawer
        anchor={isMobile ? "right" : "top"}
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 240,
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  )
}

