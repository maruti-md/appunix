import React from "react";
import { Box, TextField, Button, Typography, Paper, Grid } from "@mui/material";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";

export default function ContactUs() {
  return (
    <Box
      sx={{
        width: "98vw",
        fontFamily: "'Inter'",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
    background: "linear-gradient(135deg, #609dac68 0%, #204339ff 50%, #245442ff 100%)",
        
        color: "white",
        p: 2,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          maxWidth: 1000,
          borderRadius: "20px",
          overflow: "hidden",
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // responsive
          width: "100%",
          bgcolor: "rgba(18, 18, 18, 1)", // glass effect
          backdropFilter: "blur(12px)",
         
        }}
      >
        {/* Left Section */}
        <Box
  sx={{
    flex: 1,
    p: 3,
    display: "flex",               // ✅ Make it flex
    flexDirection: "column",       // ✅ Stack items vertically
    justifyContent: "center",      // ✅ Vertical center
    alignItems: "center",          // ✅ Horizontal center
    textAlign: "center",           // ✅ Center align text
  }}
>
  <Typography variant="h4" sx={{ fontWeight: "bold", mt: 1 }}>
    Have Any Project on Your Mind?
  </Typography>

  <Typography variant="body1" sx={{ mt: 2, color: "#ddd" }}>
    We’re excited to hear from you! Let’s start something amazing
    together. Share your ideas and let’s bring them to life.
  </Typography>

  <Box
    sx={{
      mt: 4,
      p: 2,
      background: "rgba(255, 255, 255, 0.1)", // semi-transparent
      backdropFilter: "blur(12px)", // glass blur
      WebkitBackdropFilter: "blur(12px)", // Safari support
      borderRadius: "16px",
      border: "1px solid rgba(255, 255, 255, 0.2)", // light border
      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)", // subtle shadow
    }}
  >
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <MdEmail size={28} color="#00e676" />
      <Typography sx={{ ml: 2 }}>john@example.com</Typography>
    </Box>
  </Box>
</Box>


        {/* Right Section - Form */}
        <Box
          sx={{
            flex: 1.2,
            p: 4,
            display: "flex",
            flexDirection: "column",
            bgcolor: "rgba(30, 30, 30, 1)",
            boxShadow: "0 8px 32px rgba(4, 105, 58, 0.34)",
            scale: "1.03",
            // backdropFilter: "blur(12px)",
          }}
        >
          <Typography variant="h5" sx={{ mb: 3, fontWeight: "bold" }}>
            Contact Form
          </Typography>

          {/* Input Fields */}
          <TextField
            fullWidth
            label="Full Name"
            variant="outlined"
            margin="normal"
            InputLabelProps={{ style: { color: "#aaa" } }}
            sx={{
              input: { color: "white" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#444" },
                "&:hover fieldset": { borderColor: "#00e676" },
                "&.Mui-focused fieldset": { borderColor: "#00e676" },
              },
            }}
          />
          <TextField
            fullWidth
            label="Email Address"
            variant="outlined"
            margin="normal"
            InputLabelProps={{ style: { color: "#aaa" } }}
            sx={{
              input: { color: "white" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#444" },
                "&:hover fieldset": { borderColor: "#00e676" },
                "&.Mui-focused fieldset": { borderColor: "#00e676" },
              },
            }}
          />
          <TextField
            fullWidth
            label="Website Link (Optional)"
            variant="outlined"
            margin="normal"
            InputLabelProps={{ style: { color: "#aaa" } }}
            sx={{
              input: { color: "white" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#444" },
                "&:hover fieldset": { borderColor: "#00e676" },
                "&.Mui-focused fieldset": { borderColor: "#00e676" },
              },
            }}
          />
          <TextField
            fullWidth
            multiline
            rows={4}
            label="How Can We Help You?"
            variant="outlined"
            margin="normal"
            InputLabelProps={{ style: { color: "#aaa" } }}
            sx={{
              textarea: { color: "white" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#444" },
                "&:hover fieldset": { borderColor: "#00e676" },
                "&.Mui-focused fieldset": { borderColor: "#00e676" },
              },
            }}
          />

          {/* Button at the bottom */}
          <Button
            variant="contained"
            sx={{
              bgcolor: "#00e676",
              color: "black",
              fontWeight: "bold",
              mt: "auto", // pushes button to bottom
              "&:hover": { bgcolor: "#00c853" },
            }}
          >
            Send Message
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};



