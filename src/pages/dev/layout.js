import React, { useState } from "react";

import UI from "@ui";
import Form from "@form";
import TeenantLayout from "@/components/layout/teenant";
import Modal from "./modal";

export default function App(props) {
  const [comboboxState, setcomboboxState] = useState();
  return (
    <TeenantLayout>
      <Modal />
      <UI.Row className="gap-4">
        <Card />
        <Card />
        <Card />
      </UI.Row>
      <Form.Combobox
        label="Combobox"
        value={comboboxState}
        onChange={setcomboboxState}
        options={[
          { id: "a", name: "label a" },
          { id: "b", name: "label b" },
          { id: "c", name: "label c" },
        ]}
      />
      <UI.Row>
        <UI.Button
          onClick={() =>
            alert(
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis voluptatum mollitia reprehenderit voluptate deleniti aperiam quisquam fuga, numquam accusantium necessitatibus, enim sit quibusdam nostrum itaque? Iure deserunt quasi deleniti enim?"
            )
          }
        >
          Alert
        </UI.Button>
      </UI.Row>
    </TeenantLayout>
  );
}

function Card(params) {
  return (
    <div className=" bg-card  border border-border flex-none w-[220px]">
      <UI.Draft className="aspect-16/9 rounded-none" />
      <UI.Col className="p-4">
        <UI.Text variant="body1" bold>
          Some title
        </UI.Text>
        <UI.Text variant="small" color="grey">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </UI.Text>
      </UI.Col>
    </div>
  );
}
