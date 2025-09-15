// src/pages/About.jsx
import React from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";

export default function About() {
  return (
    <PageWrapper>
      <Box
        sx={{
          width: "100vw",
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          bgcolor: "#121212",
          color: "white",
          py: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            
            {/* Left: Image / Illustration */}
            <Grid item xs={12} md={6}>
              <motion.img
                src="/assets/about-team.png" // replace with your own image in assets
                alt="Our Team"
                style={{ width: "100%", borderRadius: "16px" }}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
            </Grid>

            {/* Right: Text */}
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Typography variant="h3" sx={{ fontWeight: 700, mb: 3 }}>
                  About <span style={{ color: "#00e5ff" }}>TechNova</span>
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, color: "gray" }}>
                  We are a forward-thinking IT solutions company dedicated to helping
                  businesses innovate and scale. Our team specializes in cloud
                  solutions, AI-driven automation, and cybersecurity.
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, color: "gray" }}>
                  With over a decade of experience, we’ve partnered with startups,
                  enterprises, and global clients to accelerate their digital
                  transformation journey.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#00e5ff",
                    color: "#000",
                    fontWeight: 700,
                    borderRadius: "30px",
                    px: 4,
                    py: 1.2,
                    "&:hover": { transform: "translateY(-3px)", boxShadow: "0px 10px 25px rgba(0,229,255,0.3)" },
                  }}
                >
                  Learn More
                </Button>
              </motion.div>
            </Grid>

          </Grid>
        </Container>
      </Box>
    </PageWrapper>
  );
}
