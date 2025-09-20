// src/components/AboutUsSection.jsx
import React from "react";
import { Box, Typography } from "@mui/material";
import logo from "../assets/logo.png";
import PageWrapper from "./PageWrapper";
import { FaJava, FaDocker, FaAws } from "react-icons/fa";
import { SiFlutter, SiSpringboot, SiTensorflow, SiAndroid, SiKubernetes, SiShopify } from "react-icons/si";


export default function AboutUsSection() {
  return (
    <PageWrapper>
    <Box
      sx={{
        position: "relative",
    width: "98vw",          // full width
    minHeight: "100vh",      // full screen height
    textAlign: "center",
    py: { xs: 5, md: 7 },
    px: 2,
    // background: "linear-gradient(135deg, #182428ff 0%, #12211dff 50%, #2c644fff 100%)",
    background: "linear-gradient(135deg, #609dac68 0%, #204339ff 50%, #244c54ff 100%)",

    overflow: "hidden",
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
          background: "radial-gradient(circle at left, rgba(0,255,0,0.15), transparent 70%)",
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

      {/* Center logo */}
     

      {/* Heading */}
     <Typography
  variant="h2"
  sx={{
    fontFamily: "'Inter', sans-serif",
    fontWeight: 800,
    mb: 3,
    zIndex: 2,
    position: "relative",
    fontSize: { xs: "2.2rem", md: "3rem" },
    color: "#fff",
    lineHeight: 1.25,
    letterSpacing: "-0.5px",
  }}
>
  Building a{" "}
  <span style={{ color: "#00ff80" }}>great team</span> <br />
  is as easy as recruiting{" "}
  <span style={{ color: "#00e5ff" }}>great talent</span>
</Typography>


      {/* Subtext */}
     <Typography
  variant="body1"
  sx={{
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 400,
    fontSize: "1.05rem",
    lineHeight: 1.6,
    maxWidth: "650px",
    mx: "auto",
    mb: 8,
    color: "rgba(255,255,255,0.75)",
    zIndex: 2,
    position: "relative",
  }}
>
  We are building a home for the next generation of talent curated by
  communities, organizations, and thought leaders.
</Typography>


      {/* Partner logos */}
    <Box
  sx={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
    flexWrap: "wrap",
    mt: 6,
    "& > *": {
      transition: "transform 0.3s ease, opacity 0.3s ease",
      opacity: 0.85,
    },
    "& > *:hover": {
      transform: "scale(1.15)",
      opacity: 1,
    },
  }}
>
  <SiFlutter size={70} color="#02569B" />
  <FaJava size={70} color="#f89820" />
  <SiShopify size={70} color="#14b81a" />
  <SiAndroid size={70} color="#3DDC84" />
  <SiSpringboot size={70} color="#6DB33F" />
  <FaAws size={70} color="#FF9900" />
  <FaDocker size={70} color="#2496ED" />
  <SiKubernetes size={70} color="#326ce5" />
</Box>



    </Box>
     </PageWrapper>
  );
}
