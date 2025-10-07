// src/components/AboutUsSection.jsx
import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import PageWrapper from "./PageWrapper";
import aboutUsBg from "../assets/about-us-bg.png";


export default function AboutUsSection() {
  const [showMore, setShowMore] = useState(false);

  return (
    <PageWrapper>
      <Box
        sx={{
          width: "98.78vw",
          // marginLeft: "calc(50% - 50vw)",
          minHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          // background: "radial-gradient(circle at 20% 30%, #204339ff, #000 80%)",
          backgroundImage: `radial-gradient(circle at 20% 30%, rgba(32,67,57,0.8), rgba(0,0,0,0.6)),url(${aboutUsBg})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          // backgroundRepeat: "no-repeat",
          color: "#fff",
          position: "relative",
          overflow: "hidden",
          px: 3,
          py: 7,
          textAlign: "center",
        }}
      >
        {/* glowing blurred accents */}
        {/* <Box
          sx={{
            position: "absolute",
            top: "-10%",
            left: "-10%",
            width: "40%",
            height: "40%",
            background: "radial-gradient(circle, rgba(155,0,255,0.4), transparent 70%)",
            filter: "blur(80px)",
            zIndex: 0,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: "-10%",
            right: "-10%",
            width: "40%",
            height: "40%",
            background: "radial-gradient(circle, rgba(0,128,255,0.35), transparent 70%)",
            filter: "blur(80px)",
            zIndex: 0,
          }}
        /> */}

        {/* top label */}
        <Button
          disableRipple
          sx={{
            background: "rgba(13, 187, 146, 0.39)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "99px",
            px: 3,
            py: 0.5,
            fontSize: "0.8rem",
            fontWeight: 500,
            textTransform: "none",
            mb: 3,
            zIndex: 1,
            color: "#fff",
          }}
        >
          Our Motto
        </Button>

        {/* main headline with ghosted duplicate */}
        <Box sx={{ position: "relative", zIndex: 1, mb: 2 }}>
          <Typography
            component="h1"
            sx={{
              fontSize: { xs: "2.5rem", md: "4rem" },
              fontWeight: 700,
              position: "relative",
              color: "#ffffffd0",
              zIndex: 2,
            }}
          >
            Where Technology Meets Possibility
          </Typography>
          
        </Box>

        {/* subtitle */}
        <Typography
          variant="body1"
          sx={{
            color: "rgba(255,255,255,0.7)",
            maxWidth: 700,
            mx: "auto",
            mb: 4,
            fontSize: "1.5rem",
          }}
        >
          At AppUnix, we transform challenges into opportunities through smart, 
          reliable, and future-ready solutions for all
        </Typography>

        {/* buttons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            flexWrap: "wrap",
            zIndex: 2,
            mb: 8,
          }}
        >
          <Button
          link href="/services"
            variant="outlined"
            sx={{
              borderRadius: "999px",
              px: 3,
              py: 1,
              borderColor: "rgba(255, 255, 255, 0.91)",
              color: "#fff",
              textTransform: "uppercase",
              fontSize: "0.85rem",
              "&:hover": { borderColor: "#fff", color: "#fff", background: "rgba(255, 84, 16, 0.59)" },
            }}
          >
            Our Services
          </Button>
          <Button
          link href="/contact"
            variant="outlined"
            sx={{
              borderRadius: "999px",
              px: 3,
              py: 1,
              borderColor: "rgba(255,255,255,0.91)",
              color: "#fff",
              textTransform: "uppercase",
              fontSize: "0.85rem",
              "&:hover": { borderColor: "#fff", background: "rgba(255, 84, 16, 0.59)" },
            }}
          >
            Get in Touch
          </Button>
        </Box>
      </Box>

      {/* second section: About Us */}
      <Box
        sx={{
          background: "#0b0c0f",
          py: 10,
          px: { xs: 3, md: 8 },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "flex-start", md: "center" },
          justifyContent: "center",
          gap: { xs: 4, md: 8 },
          color: "#fff",
        }}
      >
        {/* left label */}
        <Box sx={{ minWidth: "150px" }}>
          <Typography
            sx={{
              fontSize: "2rem",
              fontWeight: 500,
              color: "#06ff87ff",
              letterSpacing: "2px",
            }}
          >
            [ ABOUT US ]
          </Typography>
        </Box>

        {/* right text */}
        <Box sx={{ maxWidth: 700 }}>
          <Typography
  variant="body1"
  sx={{
    color: "rgba(255, 255, 255, 0.8)",
    lineHeight: 1.4,
    maxWidth: "700px",
    fontOpticalSizing:"auto",
    fontSize:"1.2rem",
    textAlign: "justify"
  }}
>
  At AppUnix, we believe technology should do more than just work — it should empower.
  <br /><br />
  We are a forward-thinking Software & IT Consulting company dedicated to helping businesses, startups,
  and entrepreneurs thrive in the digital age. From building robust applications to creating seamless
  e-commerce experiences, we combine technical expertise, creative strategy, and business insight to deliver
  solutions that drive measurable growth.
  <br /><br />
  Our team brings together years of hands-on experience in{" "}
  <strong>software development, cloud, AI, automation, and digital transformation</strong>. But beyond the code,
  we are problem-solvers at heart — focused on simplifying complexity and turning challenges into opportunities.
  <br /><br />
  </Typography>

{showMore && (
 <Typography
          variant="body1"
          sx={{
            color: "rgba(255, 255, 255, 0.8)",
            lineHeight: 1.4,
            mt: 2,
            fontOpticalSizing:"auto",
            fontSize:"1.2rem",
            textAlign: "justify"
          }}
        >
  <strong>Why AppUnix</strong>
  <ul style={{ margin: "8px 0 16px 20px" }}>
    <li>Client-first approach — we measure success by your success.</li>
    <li>Scalable, future-ready solutions that grow with your business.</li>
    <li>Transparent, reliable, and committed partnership.</li>
  </ul>
  Our mission is clear: to make digital transformation accessible, effective, and sustainable for businesses of
  all sizes — while upholding values of trust, innovation, and long-term impact.
  <br /><br />
  At AppUnix, we don’t just deliver projects. We build partnerships, create impact, and help shape the future.
</Typography>
 )}

          <Button
           onClick={() => setShowMore(!showMore)}
            variant="outlined"
            sx={{
              borderRadius: "999px",
              px: 3,
              py: 1,
              borderColor: "rgba(255,255,255,0.3)",
              color: "#fff",
              fontSize: "0.8rem",
              textTransform: "uppercase",
              "&:hover": { borderColor: "#fff", background: "rgba(255,255,255,0.05)" },
            }}
          >
           {showMore ? "Read Less" : "Read More"}
          </Button>
        </Box>
      </Box>
    </PageWrapper>
  );
}
