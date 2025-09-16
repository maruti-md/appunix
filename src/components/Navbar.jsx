import React from "react";
import { AppBar, Toolbar, Button, Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";


// Define menus in one place
const menuItems = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
  { label: "Signup", path: "/signup" },
];

export default function Navbar() {
  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      sx={{
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(8px)",
      }}
    >
      <Toolbar>
         <Box
          component={Link}
          to="/"
          sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <Box
            component="img"
            src={logo} // 👈 replace with your logo path
            alt="AppUnix Logo"
            sx={{
              height: 60, // adjust as needed
              width: "auto",
            }}
          />
        </Box>

        <Box>
          <Stack direction="row" spacing={2}>
            {menuItems.map((item) => (
              <Button
                key={item.path}
                component={Link}
                to={item.path}
                color="primary"
                sx={{fontWeight: 500 }}
              >
                {item.label}
              </Button>
            ))}
          </Stack>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
