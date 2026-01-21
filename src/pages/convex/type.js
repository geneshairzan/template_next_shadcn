import React, { useState, useEffect } from "react";
import UI from "@ui";
import Form from "@form";
import { useMutation } from "convex/react";
import { api } from "@convexAPI";

export default function App(props) {
  const [name, setname] = useState("");
  const createType = useMutation(api.types.post);

  const handleSubmit = async () => {
    try {
      const id = await createType({ name: name, model: "product" });
      console.log("Created task with ID:", id);
    } catch (error) {
      console.error("Failed to create task:", error);
    }
  };

  return (
    <UI.Col className="p-8 gap-4">
      <UI.Text variant="h2" color="primary">
        Types
      </UI.Text>
      <Form.Text label="name" value={name} onChange={setname} />
      <UI.Button onClick={handleSubmit}>Save</UI.Button>
    </UI.Col>
  );
}
