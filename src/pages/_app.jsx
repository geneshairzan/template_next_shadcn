import "../style/default.css";
import "../style/global.css";
// import "../style/themed/orange.css"; // sample color theme
import "../style/themed/blue.css"; // sample color theme
// import "../style/background.css"; // sample color theme
// import "../style/table.css";

import React, { useState, useEffect } from "react";

import Context from "@context";
import useauth from "@context/useauth";
import useapp from "@context/useapp";
import uselang from "@context/uselang";
import ClientMiddleware from "@/components/middleware/client";
import { Geist, Poppins } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});
import { useRouter } from "next/router";

export default function MyApp({ Component, pageProps }) {
  const r = useRouter();
  const auth = useauth();
  const app = useapp();
  const lang = uselang();

  if (auth?.user == "loading") return <></>;

  return (
    <main className={`${app.theme === "dark" ? "dark" : ""} ${geist.variable} antialiased `}>
      <GoogleAnalytics gaId="G-QN4K0NGDBD" />
      <Context.Provider
        value={{
          auth,
          app,
          r,
          lang,
        }}
      >
        <ClientMiddleware>
          <Component {...pageProps} key={r?.asPath} />
        </ClientMiddleware>
      </Context.Provider>
    </main>
  );
}
