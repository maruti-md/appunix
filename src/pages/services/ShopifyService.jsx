import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { motion } from "framer-motion";
import PageWrapper from "../../components/PageWrapper";

const shopifyServices = [
  "Store Setup & Custom Theme Design",
  "Shopify Plus Enterprise Solutions",
  "Custom App Development",
  "App Integration & Automation",
  "Migration from WooCommerce/Magento",
  "SEO & Conversion Optimization",
  "Payment Gateway & Checkout Optimization",
  "Multi-Currency & Internationalization",
  "Dropshipping Setup & Automation",
  "Product Upload & Catalog Management",
  "Marketing & Growth Strategy",
  "Speed Optimization & Performance Tuning",
  "Ongoing Support & Maintenance",
  "Training & Consultation",
];

export default function ShopifyService() {
  return (
    <PageWrapper>
      <Box sx={{ width: "100vw", bgcolor: "#121212", color: "white", py: 8 }}>
        <Container maxWidth="lg">
          {/* Hero Section */}
          <Box textAlign="center" sx={{ mb: 8 }}>
            <ShoppingCartIcon sx={{ fontSize: 70, color: "#00E5FF", mb: 2 }} />
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                background: "linear-gradient(90deg, #00E5FF, #29FFC6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Shopify Services
            </Typography>
            <Typography
              sx={{
                mt: 2,
                color: "gray",
                maxWidth: "700px",
                mx: "auto",
                fontSize: "1.1rem",
              }}
            >
              From startups to enterprises, we provide end-to-end Shopify
              solutions to design, build, and scale your eCommerce business
              with trust and performance.
            </Typography>
          </Box>

          {/* Services Grid */}
          <Grid container justifyContent={"center"} spacing={4} sx={{ mb: 8 }}>
            {shopifyServices.map((service, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                 
                  transition={{ delay: i * 0 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 6px 18px rgba(0,229,255,0.3)",
                  }}
                >
                  <Paper
                    sx={{
                      p: 3,
                      bgcolor: "#1e1e1e",
                      borderRadius: "16px",
                      textAlign: "center",
                      border: "1px solid #333",
                      minHeight: "120px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 600,
                    }}
                  >
                    {service}
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* FAQ Section */}
          <Divider variant="inset"/>
          <Box sx={{ mb: 8, maxWidth: "800px", mx: "auto", my: 6 }}>
            <Typography
              variant="h4"
              align="center"
              sx={{ mb: 4, fontWeight: 700 }}
            >
              Frequently Asked Questions
            </Typography>
            {[
              {
                q: "Can you migrate my existing store to Shopify?",
                a: "Yes, we migrate stores from WooCommerce, Magento, Wix, and more without losing data.",
              },
              {
                q: "Do you offer Shopify Plus solutions?",
                a: "Absolutely! We provide advanced customization and automation for Shopify Plus.",
              },
              {
                q: "Do you provide long-term support?",
                a: "Yes, we offer monthly support, performance monitoring, and security updates.",
              },
            ].map((faq, i) => (
              <Accordion
                key={i}
                sx={{ bgcolor: "#1e1e1e", color: "white", mb: 2 }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                >
                  <Typography sx={{ fontWeight: 600 }}>{faq.q}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ color: "gray" }}>{faq.a}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>

          {/* CTA Section */}
          <Box textAlign="center">
            <Button
              variant="contained"
              size="large"
              sx={{
                background: "linear-gradient(90deg, #00E5FF, #29FFC6)",
                color: "black",
                fontWeight: 700,
                borderRadius: "12px",
                px: 6,
                py: 1.5,
              }}
            >
              Get Started with Shopify
            </Button>
          </Box>
        </Container>
      </Box>
    </PageWrapper>
  );
}
