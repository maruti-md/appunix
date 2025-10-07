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
import HeroSection from "../components/HeroSection";
import heroBg from "../assets/hero-bg.png";

export default function Home() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <HeroSection />
      {/* Services Preview Section */}
     <ServicesSlider />
    </PageWrapper>
  );
}
