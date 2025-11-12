"use client";
import React, { useState, useEffect } from "react";
import UI from "@ui";
import Anim1 from "./anim1";
import Menu from "@/components/app/homepage/menu";
import Footer from "@/components/app/homepage/footer";

import Capabilities from "./capabilities";
import Values from "./values";
import Clients from "./clients";

export default function App(props) {
  const [opacity, setOpacity] = useState(0);

  const handleScroll = (event) => {
    const scrollTop = event.target.scrollTop;
    const scrollPercentage = scrollTop / 600;
    let easedValue = 0;
    if (scrollPercentage < 0.8) {
      easedValue = 0; // Opacity stays 0 until 80% of the scroll
    } else {
      easedValue = (scrollPercentage - 0.8) / 0.4; // Apply easing to the progress
    }
    setOpacity(easedValue);
  };

  return (
    <div
      className="items-center bg-[#f0f0f0] overflow-y-auto overflow-x-hidden h-[100dvh] bg-[#f0f0f0] flex-grow flex-[1_1_0%] flex-shrink-0"
      onScroll={handleScroll}
    >
      <Menu opacity={opacity} />
      <Anim1 />
      <Capabilities />
      <Values />
      <Clients />
      <Footer />
    </div>
  );
}
