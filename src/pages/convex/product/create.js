import React, { useState, useEffect } from "react";
import UI from "@ui";
import Form from "@form";
import { useMutation, useQuery } from "convex/react";
import { api } from "@convexAPI";

export default function App(props) {
  const [name, setname] = useState("");
  const [selectedType, setselectedType] = useState();
  const types = useQuery(api.types.input);
  const createProduct = useMutation(api.products.post);

  const handleSubmit = async () => {
    try {
      const id = await createProduct({ name: name, type_id: selectedType.id });
      console.log("Created task with ID:", id);
    } catch (error) {
      console.error("Failed to create task:", error);
    }
  };

  return (
    <UI.Col className="p-8 gap-4">
      <UI.Text variant="h2" color="primary">
        Product
      </UI.Text>
      <Form.Text label="name" value={name} onChange={setname} />
      <Form.Select options={types} value={selectedType} onChange={setselectedType} />
      <UI.Button onClick={handleSubmit}>Save</UI.Button>
    </UI.Col>
  );
}
