import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  Button,
  Divider
} from "@mui/material";
import { motion } from "framer-motion";
import PageWrapper from "../../components/PageWrapper";
import shopifyServices  from "../../data/services";

export default function ShopifyService() {
  const [selected, setSelected] = useState(shopifyServices[0]); // default first service

  return (
    <PageWrapper>
      <Box sx={{ width: "100vw", bgcolor: "#121212", color: "white", py: 8 }}>
        <Container maxWidth="lg">
          {/* Hero Section */}
          <Box textAlign="left" sx={{ mb: 8 }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                background: "linear-gradient(90deg, #00ffc8d6, #12c256cf)",
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
                maxWidth: "500px",
                // mx: "auto",
                fontSize: "1.1rem",
              }}
            >
              From startups to enterprises, we provide end-to-end Shopify
              solutions to design, build, and scale your eCommerce business.
            </Typography>
          </Box>

<Divider sx={{ mb: 6, borderColor: "#049750ff", borderWidth:3, opacity:0.6}} />
         <Box
  sx={{
    display: "flex",
    flexDirection: { xs: "column", md: "row" }, // stack on mobile, side by side on desktop
    gap: 3,
    alignItems: "stretch", // ✅ makes both columns equal height
  }}
>
  {/* Left Menu */}
  <Paper
    sx={{
      bgcolor: "#1e1e1e",
      borderRadius: "16px",
      p: 1,
      flex: "0 0 280px", // fixed width for menu
      display: "flex",
      flexDirection: "column",
      height: "100%", // full height
    }}
  >
    <List disablePadding sx={{ flex: 1 }}>
      {shopifyServices.map((service, i) => (
        <ListItemButton
          key={i}
          selected={selected.title === service.title}
          onClick={() => setSelected(service)}
          sx={{
            mb: 1,
            "&.Mui-selected": {
              bgcolor: "rgba(0,229,255,0.15)",
              borderRight: "2px solid #049750ff",
            },
          }}
        >
          <ListItemText
            primary={service.title}
            primaryTypographyProps={{
              sx: { color: "white" },
            }}
          />
        </ListItemButton>
        
      ))}
      
    </List>
   
  </Paper>

  {/* Right Content */}
  <motion.div
    key={selected.title}
    initial={{ opacity: 0, x: 40 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    style={{ flex: 1, display: "flex" }}
  >
    <Paper
      sx={{
        p: 5,
        bgcolor: "#1e1e1e",
        borderRadius: "16px",
        border: "1px solid #333",
        flex: 1, // ✅ fills remaining space
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{ mb: 2, fontWeight: 700, color: "#00E5FF" }}
      >
        {selected.title}
      </Typography>
      <Typography  variant="body1" sx={{ whiteSpace: "pre-line", mb: 4, color: "gray", fontSize: "1.05rem" }}>
        {selected.description}
      </Typography>
      <Button
        variant="contained"
        sx={{
          background: "linear-gradient(90deg, #00E5FF, #29FFC6)",
          color: "black",
          fontWeight: 600,
          borderRadius: "10px",
          px: 4,
          py: 1.2,
          alignSelf: "flex-start",
        }}
      >
        Explore {selected.title}
      </Button>
    </Paper>
  </motion.div>
</Box>

          
        </Container>
      </Box>
    </PageWrapper>
  );
}
