// src/components/ServicesSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Divider } from "@mui/material";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Box, Typography, Chip, LinearProgress } from "@mui/material";

const services = [
  {
    title: "Flexibility & Security",
    description:
      "Maximise your sales funnels and opportunities with ease. Secure, scalable, and designed for growth.",
    tags: ["Sales", "Engineering", "Marketing", "Legal"],
    price: "$12,567/mo",
    max: "$15,000 max",
  },
  {
    title: "Scalable Solutions",
    description:
      "Grow your business with highly scalable solutions tailored to your unique requirements.",
    tags: ["Cloud", "Integration", "Automation"],
    price: "$8,999/mo",
    max: "$12,000 max",
  },
  {
    title: "24/7 Support",
    description:
      "Dedicated customer support to ensure your business runs smoothly without interruptions.",
    tags: ["Support", "Maintenance", "Uptime"],
    price: "$5,499/mo",
    max: "$7,000 max",
  },
  {
    title: "24/7 Support",
    description:
      "Dedicated customer support to ensure your business runs smoothly without interruptions.",
    tags: ["Support", "Maintenance", "Uptime"],
    price: "$5,499/mo",
    max: "$7,000 max",
  },
  {
    title: "24/7 Support",
    description:
      "Dedicated customer support to ensure your business runs smoothly without interruptions.",
    tags: ["Support", "Maintenance", "Uptime"],
    price: "$5,499/mo",
    max: "$7,000 max",
  },
];

function numericFromCurrency(str = "") {
  const digits = str.replace(/[^\d]/g, "");
  return digits ? parseInt(digits, 10) : 0;
}

export default function ServicesSlider() {
  return (
    <Box sx={{ py: 10, px: 2, background: "transparent" }}>
      <Typography
        variant="h3"
        align="center"
        sx={{
          mb: 2,
          fontWeight: "bold",
          background: "linear-gradient(90deg,rgba(42, 123, 155, 1) 0%, rgba(87, 199, 133, 1) 50%, rgba(237, 221, 83, 1) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        What We Offer
      </Typography>
      <Divider sx={{ mb: 4, bgcolor: "rgba(255,255,255,0.1)", border: "1px solid rgba(106, 121, 104, 0.51)" }} />
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
  navigation
  pagination={{ clickable: true }}
  loop={true}
  loopedSlides={services.length}   // ✅ ensures proper looping
  centeredSlides={true}
  slidesPerView={"auto"}           // ✅ auto width
  spaceBetween={30}                // ✅ spacing between cards
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,   // ✅ keeps autoplay running after user swipes
  }}
  style={{ paddingBottom: "60px" }}
      >
        {services.map((service, idx) => {
          const priceVal = numericFromCurrency(service.price);
          const maxVal = numericFromCurrency(service.max);
          const progress = maxVal ? Math.min(100, (priceVal / maxVal) * 100) : 0;

          return (
            <SwiperSlide key={idx}
            style={{
          maxWidth: "600px", // ✅ controls card width
          width: "100%",
        }}
            >
              <Box
                sx={{
                  p: 3,
                  borderRadius: "16px",
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
                  border: "1px solid rgba(0,255,200,0.06)",
                  boxShadow: "0px -10px 20px rgba(7, 164, 98, 0.6)",
                  backdropFilter: "blur(8px)",
                  color: "white",
                  height: "100%",
                  minHeight: 260,
                  
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography
                    variant="h5"
                    sx={{ mb: 1, fontWeight: 800, color: "#00ffa6ff" }}
                  >
                    {service.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{ mb: 2, color: "rgba(255,255,255,0.8)" }}
                  >
                    {service.description}
                  </Typography>

                  <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 3 }}>
                    {service.tags.map((t, i) => (
                      <Chip
                        key={i}
                        label={t}
                        size="small"
                        sx={{
                          background: "rgba(255,255,255,0.04)",
                          color: "white",
                          border: "1px solid rgba(0,255,200,0.06)",
                          fontWeight: 600,
                        }}
                      />
                    ))}
                  </Box>
                </Box>

                {/* Price + progress */}
                <Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1 }}>
                    
                  </Box>

                 
                </Box>
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
}
