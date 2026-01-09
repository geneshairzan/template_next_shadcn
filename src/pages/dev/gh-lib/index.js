import UI from "@ui";
import Form from "@form";
import React, { useState, useEffect } from "react";

import { hello, useArray, useDebounce, useInterval } from "gh-lib";

export default function App(props) {
  const [search, setsearch] = useState("");
  const user = useArray();
  const [finder, setfinder] = useState();
  const [count, setcount] = useState(1);

  useEffect(() => {
    user.set([
      { id: 1, name: "jogn" },
      { id: 2, name: "jogn B" },
      { id: 3, name: "jogn C" },
    ]);
  }, []);

  useDebounce(
    () => {
      console.log(user.data, search);
      setfinder(user.data.find((d) => d.id == search));
    },
    [search],
    1000
  );

  useInterval(
    () => {
      setcount((p) => p + 1);
    },
    [],
    1000
  );

  return (
    <UI.Col center p={2}>
      {hello("joghn")}
      <div>
        <p>useArray</p>
        {user.data.map((item) => (
          <div key={item.id}>{`${item.id}-${item.name}`}</div>
        ))}
        <div
          style={{
            display: "flex",
            gap: 8,
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <UI.Button onClick={() => user.push({ id: 4, name: "jogn D" })}>push</UI.Button>
          <UI.Button onClick={() => user.remove(2)}>remove user id2</UI.Button>
          <UI.Button onClick={() => user.update(1, { name: "jogn EDIT" })}>update</UI.Button>
        </div>
      </div>
      <Form.Text value={search} onChange={setsearch} />
      <UI.Text>{finder?.name || "not found"}</UI.Text>
      <UI.Text>Count (useInterval) {count}</UI.Text>
    </UI.Col>
  );
}
