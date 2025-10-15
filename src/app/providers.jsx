"use client";
import React, { useState, useEffect } from "react";

import { useRouter } from "next/navigation";
import useApp from "@context/useapp";
// import useAuth from "@context/useauth";
// import { GoogleTagManager } from "@next/third-parties/google";
import { createContext, useContext } from "react";

const GlobalContext = createContext(null);

export function useGlobal() {
  return useContext(GlobalContext);
}

export function Providers({ children }) {
  const r = useRouter();
  // const auth = useAuth();
  const app = useApp();

  useEffect(() => {
    document.body.classList.remove("dark", "light");
    document.body.classList.add(app?.theme || "light");
  }, [app?.theme]);

  //   if (auth?.user === "loading") return <GoogleTagManager gtmId="GTM-XXXXXX" />;

  return <GlobalContext.Provider value={{ app, r }}>{children}</GlobalContext.Provider>;
}
