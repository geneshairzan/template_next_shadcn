import serverMiddleware from "@/components/middleware/server";

export function createHandler(handler) {
  return serverMiddleware(async (req, res) => {
    return handler(req, res);
  });
}
