import UI from "@ui";

export default function App({ label, value }) {
  return (
    <UI.Col p={2}>
      <UI.Text variant="body1" bold>
        {label}
      </UI.Text>
      <UI.Text> {value}</UI.Text>
    </UI.Col>
  );
}
