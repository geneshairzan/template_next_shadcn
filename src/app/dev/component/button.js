import UI from "@UI";

export default function Home() {
  return (
    <UI.Col className="flex flex-col p-2 gap-2">
      <div className="flex-row gap-2 flex">
        <UI.Button>Button Contained</UI.Button>
        <UI.Button variant="outlined">Button Outlined</UI.Button>
        <UI.Button variant="text">Button Text</UI.Button>
      </div>
      <div className="flex-row gap-2 flex">
        <UI.Button color="secondary">Secondary</UI.Button>
        <UI.Button disabled>Disabled</UI.Button>
        <UI.Button loading>loading</UI.Button>
      </div>
      <div>
        <p className="">Typography</p>
        <p className="text-red-500">Lets goo!</p>
        <p className="" style={{ color: "var(--color-joni)" }}>
          Lets goo!
        </p>
      </div>
    </UI.Col>
  );
}
