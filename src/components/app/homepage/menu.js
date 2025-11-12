import UI from "@ui";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function App({ opacity = 1 }) {
  return (
    <div className="fixed flex flex-row w-screen h-[64px] z-[999] p-3 items-center " style={{ background: `rgba(10, 33, 61, ${opacity})` }}>
      <Link href="/" passHref>
        <UI.Img src="/assets/img/logo-white.svg" alt="" width={200} height={32} />
      </Link>
    </div>
  );
}
