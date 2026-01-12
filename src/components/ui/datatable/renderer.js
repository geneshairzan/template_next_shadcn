import UI from "@ui";

export default function Renderer({ row, col }) {
  if (col?.type == "elipsis")
    return (
      <UI.Tooltip label={row[col.key]}>
        <UI.Text variant="small" className={`hover:cursor-pointer ${col?.type == "elipsis" ? "truncate" : ""}`}>
          {row[col.key]}
        </UI.Text>
      </UI.Tooltip>
    );

  return <UI.Text variant="small">{row[col.key]}</UI.Text>;
}
