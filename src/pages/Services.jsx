// src/pages/Services.jsx
import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";

// Icons
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloudIcon from "@mui/icons-material/Cloud";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import SecurityIcon from "@mui/icons-material/Security";
import PsychologyIcon from "@mui/icons-material/Psychology";

const services = [
  {
    title: "Shopify Solutions",
    description:
      "End-to-end Shopify services: store setup, theme customization, app integration, SEO & conversion optimization.",
    icon: <ShoppingCartIcon sx={{ fontSize: 50, color: "#00E5FF" }} />,
    path: "/services/shopify",
    highlight: true,
  },
  {
    title: "Cloud Solutions",
    description: "Scalable cloud integration and migration for your business growth.",
    icon: <CloudIcon sx={{ fontSize: 40, color: "#00E5FF" }} />,
    path: "/services/cloud",
  },
  {
    title: "AI & Automation",
    description: "Boost productivity with cutting-edge AI-driven automation tools.",
    icon: <SmartToyIcon sx={{ fontSize: 40, color: "#00E5FF" }} />,
    path: "/services/ai",
  },
  {
    title: "Cybersecurity",
    description: "Protect your digital assets with enterprise-grade security systems.",
    icon: <SecurityIcon sx={{ fontSize: 40, color: "#00E5FF" }} />,
    path: "/services/cybersecurity",
  },
  {
    title: "IT Consulting",
    description: "Strategic planning & digital transformation for long-term success.",
    icon: <PsychologyIcon sx={{ fontSize: 40, color: "#00E5FF" }} />,
    path: "/services/consulting",
  },
];

export default function Services() {
  return (
    <PageWrapper>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Box
          sx={{
            width: "100vw",
            minHeight: "80vh",
            bgcolor: "#121212",
            color: "white",
            py: 6,
          }}
        >
          <Container maxWidth="lg">
            <Typography
              variant="h3"
              align="center"
              sx={{
                fontWeight: 700,
                mb: 6,
                background: "linear-gradient(90deg, #00E5FF, #29FFC6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Our Services
            </Typography>

            <Grid container spacing={4} justifyContent="center">
              {services.map((service, i) => (
  <Grid
    item
    xs={12}
    sm={service.highlight ? 12 : 6}
    md={service.highlight ? 8 : 4}
    key={i}
  >
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={i === 0 ? { opacity: 1, y: 0 } : {}}
      whileInView={i !== 0 ? { opacity: 1, y: 0 } : undefined}
      viewport={i !== 0 ? { once: true, amount: 0.1 } : undefined}
      transition={{ duration: 0.6, delay: i * 0.1 }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 8px 25px rgba(0,229,255,0.5)",
      }}
    >
      <Paper
        sx={{
          p: 4,
          bgcolor: "#1e1e1e",
          borderRadius: "20px",
          textAlign: "center",
          height: "100%",
          border: service.highlight
            ? "2px solid #00E5FF"
            : "1px solid #333",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <Box sx={{ mb: 2 }}>{service.icon}</Box>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
          {service.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "gray", mb: 3 }}>
          {service.description}
        </Typography>
        <Button
          component={Link}
          to={service.path}
          variant="contained"
          sx={{
            background: "linear-gradient(90deg, #00E5FF, #29FFC6)",
            color: "black",
            fontWeight: 600,
            textTransform: "none",
            borderRadius: "10px",
            px: 4,
            py: 1,
          }}
        >
          Explore {service.title}
        </Button>
      </Paper>
    </motion.div>
  </Grid>
))}

            </Grid>
          </Container>
        </Box>
      </motion.div>
    </PageWrapper>
  );
}
