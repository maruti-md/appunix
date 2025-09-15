import React from "react";
import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "#0d0d0d", color: "gray", py: 4, mt: 6, textAlign: "center" }}>
      <Typography variant="body2">© 2025 Appunix IT Solutions. All rights reserved.</Typography>
    </Box>
  );
}
