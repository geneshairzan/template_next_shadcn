import serverMiddleware from "@/components/middleware/server";

export function createHandler(handler) {
  return serverMiddleware(async (req, res) => {
    res.setHeader("Cache-Control", "no-store");

    const originalJson = res.json.bind(res);
    res.json = (data) => originalJson(jsonSafe(data));
    return handler(req, res);
  });
}

export function jsonSafe(data) {
  return JSON.parse(JSON.stringify(data, (_, v) => (typeof v === "bigint" ? v.toString() : v)));
}
