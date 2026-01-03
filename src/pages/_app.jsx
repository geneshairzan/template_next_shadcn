import "../style/global.css";
import "../style/table.css";

import React, { useState, useEffect } from "react";

import Context from "@context";
import useauth from "@context/useauth";
import useapp from "@context/useapp";
import uselang from "@context/uselang";
import ClientMiddleware from "@/components/middleware/client";
import { Geist, Poppins } from "next/font/google";

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
    <main className={`${geist.variable} antialiased`}>
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
