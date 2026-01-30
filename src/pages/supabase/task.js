import { useQuery } from "convex/react";
import { api } from "@convexAPI";

export default function Home() {
  const tasks = useQuery(api.task.get);
  console.log(tasks);
  return (
    <main className="flex min-h-screen flex-col p-24">
      {tasks?.map(({ _id, text }) => (
        <div key={_id} className="border p-2">
          {text}
        </div>
      ))}
    </main>
  );
}
