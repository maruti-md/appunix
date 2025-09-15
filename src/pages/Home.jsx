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

export default function Home() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <Box
        component="section"
        sx={{
          width: "100vw",
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
      <Box
        component="section"
        sx={{
          width: "100%",
          bgcolor: "#121212",
          color: "white",
          py: 10,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            align="center"
            sx={{ fontWeight: 700, mb: 6 }}
          >
            What We Offer
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {services.slice(0, 3).map((service, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                >
                  <Paper
                    sx={{
                      p: 4,
                      bgcolor: "#1e1e1e",
                      borderRadius: "16px",
                      textAlign: "center",
                      height: "100%",
                    }}
                  >
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "gray" }}>
                      {service.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: "center", mt: 6 }}>
            <Button
              component={Link}
              to="/services"
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
              View All Services
            </Button>
          </Box>
        </Container>
      </Box>
    </PageWrapper>
  );
}
