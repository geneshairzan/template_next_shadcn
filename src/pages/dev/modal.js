import UI from "@ui";
import { useSwitch } from "gh-lib";
import Context from "@context";
import React from "react";

export default function DevModal() {
  const { app } = React.useContext(Context);
  const modal = useSwitch();

  return (
    <UI.Row className={"gap-4"}>
      <UI.Button variant="outline" className="w-9" onClick={() => app.set("theme", app.get("theme") == "dark" ? "light" : "dark")}>
        <UI.Icon name="brightness_6" />
      </UI.Button>
      <UI.Dialog
        label="some title"
        body="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis voluptatum mollitia reprehenderit voluptate deleniti aperiam quisquam fuga, numquam accusantium necessitatibus, enim sit quibusdam nostrum itaque? Iure deserunt quasi deleniti enim?"
      />
      <UI.DialogConfirm onConfirm={modal.off} />
      <UI.DialogDrawer />
    </UI.Row>
  );
}
