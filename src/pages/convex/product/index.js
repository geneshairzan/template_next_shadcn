import { useQuery } from "convex/react";
import { api } from "@convexAPI";
import UI from "@ui";

export default function Home() {
  const datas = useQuery(api.products.get);
  return (
    <UI.Col className="flex min-h-screen flex-col p-24">
      <UI.Text variant="body1"> Product list</UI.Text>
      {console.log(datas)}
      {datas?.map((d) => (
        <UI.Row key={d._id}>
          <div className="border p-2">{d.name}</div>
          <div className="border p-2">{d.name}</div>
        </UI.Row>
      ))}
    </UI.Col>
  );
}
