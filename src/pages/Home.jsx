// src/pages/Home.jsx
import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Paper,
} from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import services from "../data/services";
import ServicesSlider from "../components/ServicesSlider";

export default function Home() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <Box
        component="section"
        sx={{
          width: "100%",
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
          background:
            "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
          color: "white",
          py: { xs: 8, md: 12 },
          overflowX: "hidden",
        }}
      >
        <Container maxWidth="lg">
          <motion.div
           initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }} // 👈 animate immediately
    transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                letterSpacing: 0.5,
                lineHeight: 1.05,
                fontSize: {
                  xs: "2.6rem",
                  sm: "3.8rem",
                  md: "5rem",
                  lg: "6rem",
                },
                mb: 2,
                textShadow: "0 6px 30px rgba(0,0,0,0.6)",
              }}
            >
              Innovating IT Solutions
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }} // 👈 animate immediately
    transition={{ duration: 0.8 }}
          >
            <Typography variant="h6" sx={{ mb: 4, fontWeight: 400 }}>
              Empowering businesses with next-gen technology, AI, and cloud
              services.
            </Typography>

            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  bgcolor: "#00e5ff",
                  color: "#000",
                  fontWeight: 700,
                  borderRadius: "30px",
                  px: 4,
                  py: 1.5,
                  "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: "0px 10px 30px rgba(0,229,255,0.25)",
                  },
                }}
              >
                Get Started
              </Button>

              <Button
                variant="outlined"
                size="large"
                color="secondary"
                sx={{
                  borderRadius: "30px",
                  px: 4,
                  py: 1.5,
                  borderColor: "rgba(255,64,129,0.5)",
                  color: "rgba(255, 255, 255, 1)",
                  "&:hover": { transform: "translateY(-3px)" },
                }}
              >
                Learn More
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Services Preview Section */}
     <ServicesSlider />
    </PageWrapper>
  );
}
