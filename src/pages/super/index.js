import UI from "@ui";
import Context from "@context";
import React from "react";

export default function App(props) {
  const { auth } = React.useContext(Context);
  return (
    <UI.Col p={2} className="">
      <UI.Text variant="body1">thios is admion home</UI.Text>
    </UI.Col>
  );
}
