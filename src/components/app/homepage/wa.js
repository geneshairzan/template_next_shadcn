"use client";
import React, { useState, useEffect } from "react";
import UI from "@ui";
import Image from "next/image";

export default function App(props) {
  return (
    <UI.Col className="fixed bottom-5 right-5 max-w-[64px]">
      <a
        href="https://wa.me/628119951112?text=Halo%20saya%20ingin%20tahu%20lebih%20lanjut"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with message"
      >
        <UI.Img width={64} height={64} src="https://raw.githubusercontent.com/geneshairzan/shared/refs/heads/master/contact/wa.svg" alt="" />
      </a>
    </UI.Col>
  );
}
