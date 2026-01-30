import React, { useState, useEffect } from "react";
import UI from "@ui";
import Form from "@form";
import { useMutation, useQuery } from "convex/react";
import { api } from "@convexAPI";
import { supabase } from "@/lib/supabase/client";

export default function App(props) {
  const [name, setname] = useState("");
  const [selectedType, setselectedType] = useState();

  const handleSubmit = async () => {
    let res = await supabase
      .from("product")
      .insert({
        name: name,
      })
      .select()
      .single();
    console.log(res);
  };

  return (
    <UI.Col className="p-8 gap-4">
      <UI.Text variant="h2" color="primary">
        Product
      </UI.Text>
      <Form.Text label="name" value={name} onChange={setname} />
      {/* <Form.Select options={types} value={selectedType} onChange={setselectedType} /> */}
      <UI.Button onClick={handleSubmit}>Save</UI.Button>
    </UI.Col>
  );
}
