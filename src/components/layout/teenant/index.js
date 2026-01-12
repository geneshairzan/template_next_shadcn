import UI from "@ui";
import { useSwitch } from "gh-lib";
import Context from "@context";
import React, { useState, useEffect } from "react";

export default function TeenantLayout({ children }) {
  const open = useSwitch();

  return (
    <UI.Row className="h-screen max-h-dvh overflow-auto">
      <UI.Col
        className={`
          px-2 py-6 overflow-auto bg-card z-2
          transition-[width] duration-300 ease-out
          shadow-[1px_0_24px_rgba(0,0,0,0.01)]
          ${open.ison ? "w-60" : "w-13"}
        `}
      >
        <UI.Button variant="outline" className="w-9" onClick={open.toggle}>
          <UI.Icon name="menu" />
        </UI.Button>
      </UI.Col>

      <UI.Col className="flex-1 gap-4 overflow-auto p-6 bg-background">{children}</UI.Col>
    </UI.Row>
  );
}
