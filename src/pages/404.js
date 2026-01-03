import React, { useState, useEffect } from "react";

import UI from "@ui";
import { useRouter } from "next/router";

import { isDynamicRoute } from "next/dist/shared/lib/router/utils";
import { getRouteRegex } from "next/dist/shared/lib/router/utils/route-regex";
import { getClientBuildManifest } from "next/dist/client/route-loader";
import Context from "@context";

async function pageExists(location) {
  const { sortedPages } = await getClientBuildManifest();

  const pathname = location === "/" ? location : location.replace(/\/$/, "");

  return (
    sortedPages.includes(pathname) ||
    sortedPages.some((page) => {
      return isDynamicRoute(page) && getRouteRegex(page).re.test(pathname);
    })
  );
}

export default function App({ ispublic = false }) {
  const { auth } = React.useContext(Context);
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      if (!auth.id) return;
      pageExists(router.asPath).then((exists) => {
        if (!exists) {
        } else router.replace(router.asPath);
      });
    }
  }, [router.isReady, router.asPath, router, auth.id]);

  return (
    <UI.Col center className="w-screen h-screen">
      <UI.Col className="max-w-[640px] gap-2" center>
        <UI.Text variant="hero">404</UI.Text>
        <UI.Text variant="body1">you&apos;re looking for something doesnt exist :(</UI.Text>
        {ispublic ? (
          <UI.Text variant="body1">Pease contact your administrator</UI.Text>
        ) : (
          <UI.Button variant="outlined" onClick={() => router.push("/")}>
            Back to homepage
          </UI.Button>
        )}
      </UI.Col>
    </UI.Col>
  );
}
