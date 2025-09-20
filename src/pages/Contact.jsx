// src/pages/Contact.jsx
import React from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import ContactUsSection from "../components/ContactUsSection";

export default function Contact() {
  return (
    <PageWrapper>
      <ContactUsSection />
    </PageWrapper>
  );
}
