import UI from "@ui";
import Context from "@context";
import React from "react";

export default function App(props) {
  const { auth, r } = React.useContext(Context);
  return (
    <UI.Col center p={2}>
      {auth?.id ? (
        <UI.Row className="body1 justify-between w-full p-2">
          <UI.Text>APP NAME</UI.Text>
          <UI.Row className="gap-2 items-center">
            <UI.Text variant="body">{`Hi, ${auth.user.name}`}</UI.Text>
            <UI.Button onClick={auth.signout}>Signout</UI.Button>
          </UI.Row>
        </UI.Row>
      ) : (
        <UI.Row className="w-full justify-end">
          <UI.Button className="w-[200px]" onClick={() => r.push("/auth")}>
            Sign In
          </UI.Button>
        </UI.Row>
      )}

      <UI.Text variant="h2" color="primary">
        user home
      </UI.Text>
    </UI.Col>
  );
}
