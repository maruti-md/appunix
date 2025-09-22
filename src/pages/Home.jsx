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
          // background:
          //   "linear-gradient(135deg, #1e2c31ff 0%, #112922ff 50%, #2c644fff 100%)",
            background: "radial-gradient(circle at 20% 30%, #204339ff, #000 80%)",
          color: "white",
          py: { xs: 8, md: 8 },
          overflowX: "hidden",
        }}
      >

         {/* Left glow */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "40%",
                  height: "100%",
                  background: "radial-gradient(circle at left, rgba(12, 43, 100, 0.22), transparent 70%)",
                  zIndex: 0,
                }}
              />
              {/* Right glow */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  width: "40%",
                  height: "100%",
                  background: "radial-gradient(circle at right, rgba(128,0,255,0.15), transparent 70%)",
                  zIndex: 0,
                }}
              />
        
              {/* SVG arc lines */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "300px",
                  zIndex: 1,
                  opacity: 0.2,
                }}
              >
                <svg width="100%" height="100%" viewBox="0 0 1440 300" preserveAspectRatio="none">
                  <path
                    d="M0,300 Q720,-100 1440,300"
                    stroke="white"
                    strokeOpacity="0.1"
                    fill="none"
                  />
                  <path
                    d="M0,300 Q720,-50 1440,300"
                    stroke="white"
                    strokeOpacity="0.08"
                    fill="none"
                  />
                  <path
                    d="M0,300 Q720,0 1440,300"
                    stroke="white"
                    strokeOpacity="0.05"
                    fill="none"
                  />
                </svg>
              </Box>
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
                  xs: "1.6rem",
                  sm: "2.8rem",
                  md: "4rem",
                  lg: "5rem",
                },
                mb: 2,
                textShadow: "0 6px 30px rgba(0,0,0,0.6)",
              }}
            >
              Building Smarter Digital Solutions for a Connected Future
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }} // 👈 animate immediately
    transition={{ duration: 0.8 }}
          >
            <Typography variant="h6" sx={{ mb: 4, fontWeight: 400 }}>
              At AppUnix, we help businesses grow through custom software,
              cloud solutions, and digital transformation services tailored to your needs.
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
                Get a Free Consultation
              </Button>

              <Button
                variant="outlined"
                size="large"
                color="secondary"
                sx={{
                  borderRadius: "30px",
                  px: 4,
                  py: 1.5,
                  borderColor: "rgba(255, 255, 255, 0.91)",
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
