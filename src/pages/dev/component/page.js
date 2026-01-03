"use client";

import Button from "./button";
import React, { useState, useEffect } from "react";
import UI from "@ui";
import { useGlobal } from "@/appx/providers";

export default function Home() {
  const { app } = useGlobal();
  const [onmodal, setonmodal] = useState(false);

  function toggleTheme() {
    app.set("theme", app.theme === "dark" ? "light" : "dark");
  }

  return (
    <UI.Col className="p-2 gap-2">
      <Button />

      <UI.Row>
        <UI.Button onClick={() => setonmodal(true)}>modal open</UI.Button>
      </UI.Row>
      <UI.Modal open={onmodal} onClose={setonmodal}>
        <UI.ModalContainer variant="wide">
          <UI.Row spaced>
            <UI.Text>title</UI.Text>
            <UI.Col onClick={() => setonmodal(false)}>X</UI.Col>
          </UI.Row>
        </UI.ModalContainer>
      </UI.Modal>
      <UI.Icon name="home" color="#f4713a" />
      <UI.Text
        sx={{
          fontSize: 64,
        }}
      >
        Title HERO
      </UI.Text>
      <UI.Text variant="title" bold>
        Title bold
      </UI.Text>
      <UI.Text variant="subtitle" italic>
        Subtitle italic
      </UI.Text>
      <UI.Text variant="body">
        body. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis voluptatum mollitia reprehenderit voluptate deleniti aperiam quisquam fuga,
        numquam accusantium necessitatibus, enim sit quibusdam nostrum itaque? Iure deserunt quasi deleniti enim?
      </UI.Text>
      <UI.Text variant="small">
        small. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis voluptatum mollitia reprehenderit voluptate deleniti aperiam quisquam fuga,
        numquam accusantium necessitatibus, enim sit quibusdam nostrum itaque? Iure deserunt quasi deleniti enim?
      </UI.Text>
      <UI.Text variant="caption">
        caption. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis voluptatum mollitia reprehenderit voluptate deleniti aperiam quisquam fuga,
        numquam accusantium necessitatibus, enim sit quibusdam nostrum itaque? Iure deserunt quasi deleniti enim?
      </UI.Text>
      <UI.Text variant="blockquote">
        blockquote. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis voluptatum mollitia reprehenderit voluptate deleniti aperiam quisquam
        fuga, numquam accusantium necessitatibus, enim sit quibusdam nostrum itaque? Iure deserunt quasi deleniti enim?
      </UI.Text>
      <UI.Row>
        <UI.Button onClick={toggleTheme}>toggle</UI.Button>
      </UI.Row>
    </UI.Col>
  );
}
