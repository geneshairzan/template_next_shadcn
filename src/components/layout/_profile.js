import UI from "@ui";
import Context from "@context";
import React from "react";

export default function App({ open }) {
  const { auth } = React.useContext(Context);
  return (
    <UI.Row className="gap-2">
      <UI.Button icon="person" className="w-9" variant="outline" />
      <UI.Text color="primary">Hi, {auth?.user?.name}</UI.Text>
    </UI.Row>
  );
}
