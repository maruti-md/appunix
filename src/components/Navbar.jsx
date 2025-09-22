import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Stack,
  Menu,
  MenuItem,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const menuItems = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services", hasDropdown: true },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const serviceDropdown = [
 { label: "Software Development", path: "/services/software-development" },
{ label: "E-Commerce Solutions", path: "/services/e-commerce-solutions" },
{ label: "Local Business Digitization", path: "/services/local-business-digitization" },
{ label: "Cloud & DevOps", path: "/services/cloud-devops" },
{ label: "Data & AI Solutions", path: "/services/data-ai" },
{ label: "Digital Marketing Services", path: "/services/digital-marketing" },
{ label: "SaaS & Product Development", path: "/services/saas-product-development" },
// { label: "🔒 Cybersecurity Services", path: "/services/cybersecurity" },
];

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleDropdownOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDropdownClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        // borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        backgroundColor: "rgba(240, 245, 255, 0.07)", // transparent effect
        backdropFilter: "blur(12px)", // blur effect
        WebkitBackdropFilter: "blur(12px)", // Safari support
        px: { xs: 2, md: 4 },
        py: 1,
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left: Logo */}
        <Box
          component={Link}
          to="/"
          sx={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <Box
            component="img"
            src={logo}
            alt="AppUnix Logo"
            sx={{
              height: 60,
              width: "auto",
              mr: 1,
            }}
          />
        </Box>

        {/* Center: Menu items */}
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          sx={{ flexGrow: 1, justifyContent: "center" }}
        >
          {menuItems.map((item) =>
            item.hasDropdown ? (
              <React.Fragment key={item.label}>
                <Button
                  color="inherit"
                  onClick={handleDropdownOpen}
                  endIcon={<KeyboardArrowDownIcon />}
                  sx={{
                    textTransform: "none",
                    fontWeight: 500,
                    fontSize: "1.09rem",
                    color: "white",
                    "&:hover": { color: "white", bgcolor:"#168a652a"},
                  }}
                >
                  {item.label}
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleDropdownClose}
                  PaperProps={{
                    sx: {
                      mt: 1,
                      bgcolor: "rgba(10, 10, 12, 0.94)",
                      borderRadius: 2,
                      border: "1px solid rgba(0,255,255,0.2)",
                      color: "white",
                      
                      
                    },
                  }}
                >
                {serviceDropdown.map((sub) => (
                  <React.Fragment key={sub.path}>
                    <MenuItem
                      component={Link}
                      to={sub.path}
                      onClick={handleDropdownClose}
                      sx={{
                        "&:hover": { bgcolor: "#148d66ab", color: "white" },
                      }}
                    >
                      {sub.label}
                    </MenuItem>
                    <Divider variant="middle" component="li" />
                  </React.Fragment>
                ))}
                </Menu>
              </React.Fragment>
            ) : (
              <Button
                key={item.path}
                component={Link}
                to={item.path}
                sx={{
                  textTransform: "none",
                  fontWeight: 500,
                  fontSize: "1.009rem",
                  color: "white",
                  "&:hover": { bgcolor:"#168a652a", color: "white" },
                }}
              >
                {item.label}
              </Button>
            )
          )}
        </Stack>

        {/* Right: Action button */}
        <Button
          variant="outlined"
          component={Link}
          to="/signup"
          sx={{
            textTransform: "none",
            fontWeight: 500,
            borderColor: "cyan",
            color: "white",
            borderRadius: 2,
            px: 2,
            "&:hover": { bgcolor: "#00ca8a33", color: "white" },
          }}
        >
          Sign Up
        </Button>
      </Toolbar>
    </AppBar>
  );
}
