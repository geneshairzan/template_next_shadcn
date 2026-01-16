import serverMiddleware from "@/components/middleware/server";

export function createHandler(handler) {
  return serverMiddleware(async (req, res) => {
    res.setHeader("Cache-Control", "no-store");
    return handler(req, res);
  });
}
