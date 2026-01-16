import { getUser } from "@lib/helper/encryption";

const auth = (handler) => async (r, res) => {
  // let request_buffer = r;
  // request_buffer.auth = await getUser(r);
  // return handler(request_buffer, res);
  const user = await getUser(r);

  // if (!user?.id && !r.url.includes("/auth/")) {
  //   if (!r.query._token) return res.status(401).json("un autorized");
  // }

  if (!r.query._token && !user?.id && !r.url.includes("/auth/")) return res.status(401).json("unauthorized");

  return handler({ ...r, auth: user }, res);
};

export default auth;
