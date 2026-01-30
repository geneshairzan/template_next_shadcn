import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Context from "@context";
import Layout from "@/components/layout";

export default function AppMiddleware({ children }) {
  const r = useRouter();
  const { auth } = React.useContext(Context);

  let publicurl = ["/privacypolicy", "/tnc", "/tos", "/about", "/download", "/auth", "/dev"];

  function isPublic() {
    if (!r?.asPath) return false;
    if (r.asPath == "/") return true;
    return publicurl.some((p) => r.asPath.startsWith(p));
  }

  function isPrivate() {
    return Boolean(auth?.user?.role_id);
  }

  if (isPublic()) return children;
  if (isPrivate()) return <Layout>{children}</Layout>;

  //escape : Auth
  return <Redirect url="auth" />;
}

function Redirect({ url = "/" }) {
  const { push } = useRouter();

  useEffect(() => {
    push(url);
  }, [push, url]);

  return <></>;
}
