// src/pages/About.jsx
import React from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import AboutUsSection from "../components/AboutUsSection";

export default function About() {
  return (
    <PageWrapper>
     <AboutUsSection />
    </PageWrapper>
  );
}
