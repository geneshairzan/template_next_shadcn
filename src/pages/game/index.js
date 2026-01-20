import UI from "@ui";
import Form from "@form";
import { useEffect, useState } from "react";
import Canvas from "./canvas";
import { createEngine } from "./engine";
import { compileUserCode } from "./runner";
import { createAppApi } from "./api";
import Doc from "./doc";
import EditorMock from "./editor";

export default function GamePage() {
  const [player, setPlayer] = useState({
    x: 2,
    y: 2,
    rot: 0,
    color: "#ffd45d",
  });

  const [speed, setSpeed] = useState(1000);
  const [code, setCode] = useState(DEFAULT_CODE);

  // engine is created once
  const [engine] = useState(() =>
    createEngine({
      setPlayer,
      speed,
    })
  );

  // re-apply speed changes
  useEffect(() => {
    engine.setSpeed(speed);
  }, [speed]);

  const runCode = () => {
    engine.reset();

    const api = createAppApi(engine.commandQueue);

    try {
      const { factory, importFunc, userFunc } = compileUserCode(code, engine.level);

      console.log("Imported:", importFunc);
      console.log("User functions:", userFunc);

      const main = factory(api); // inject app API
      main(); // enqueue commands
      engine.start(); // start game loop
    } catch (e) {
      console.error(e);
      alert(e.message);
    }
  };

  return (
    <UI.Col style={{ padding: 16 }} className="p-[5%]" center>
      <UI.Row className="gap-8 w-full">
        <UI.Col className="flex-1">
          <h2>Code Game</h2>
          <Canvas player={player} />
        </UI.Col>
        <UI.Col className="flex-1 gap-4">
          <UI.Row className="gap-2">
            <UI.Button variant="success" onClick={runCode}>
              Run
            </UI.Button>
            <UI.Button variant="destructive" onClick={() => engine.stop()}>
              Stop
            </UI.Button>
          </UI.Row>
          <Doc />
          <Form.Select label="Speed" options={SPEED_OPT} value={SPEED_OPT.find((d) => d.id == speed)} onChange={(e) => setSpeed(e.id)}></Form.Select>
          <EditorMock code={code} setCode={setCode} />
        </UI.Col>
      </UI.Row>
    </UI.Col>
  );
}

const SPEED_OPT = [
  { id: 1000, name: "Slow" },
  { id: 500, name: "Normal" },
  { id: 200, name: "Fast" },
];

const DEFAULT_CODE = `
import { move, rotate } from "app";

export default function main() {
  move(1, 0);
  move(1, 0);
  rotate(90);
  move(0, 1);
}
`.trim();
