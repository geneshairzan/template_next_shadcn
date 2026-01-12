import UI from "@ui";
import Form from "@form";
import React, { useState, useEffect } from "react";

export default function App(props) {
  const [input, setinput] = useState("");
  const [test, settest] = useState(1);
  return (
    <UI.Col center p={2}>
      <ChildComponent />
      <UI.Button onClick={() => settest((p) => p + 1)}>Up</UI.Button>
      <Form.Text value={input} onChange={setinput} />
      <UI.Text variant="h2" color="primary">
        Chat {test}
      </UI.Text>
    </UI.Col>
  );
}

function ChildComponent(params) {
  return (
    <UI.Col center p={2}>
      <UI.Text variant="h2" color="primary">
        ChildComponent
      </UI.Text>
    </UI.Col>
  );
}
