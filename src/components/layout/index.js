import UI from "@ui";
import { useSwitch } from "gh-lib";
import Context from "@context";
import React, { useState, useEffect } from "react";
import Profile from "./_profile";

export default function TeenantLayout({ children }) {
  const { auth } = React.useContext(Context);
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
        <UI.Col className="flex-1 overflow-x-hidden gap-4 ">
          <UI.Row className="items-center">
            <UI.Button variant="outline" className="w-9" onClick={open.toggle}>
              <UI.Icon name="menu" btn />
            </UI.Button>
            <UI.Row className={`items-end ${!open.ison && "hidden"}`}>
              <img src="/assets/img/logo.svg" alt="" className="h-10" />
              <UI.Text variant="small" bold className={"pb-1"}>
                LAB
              </UI.Text>
            </UI.Row>
          </UI.Row>
          <Profile open={open} />
        </UI.Col>
        <UI.Button onClick={auth.signOut} variant="outline">
          <UI.Icon name="power_settings_new" color="error" btn />
          {open.ison && "Sign out"}
        </UI.Button>
      </UI.Col>

      <UI.Col className="flex-1 gap-4 overflow-auto p-6 bg-background">{children}</UI.Col>
    </UI.Row>
  );
}
