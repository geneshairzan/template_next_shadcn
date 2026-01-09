import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Context from "@context";

export default function AppMiddleware({ children }) {
  const r = useRouter();
  const { auth } = React.useContext(Context);

  let publicurl = ["/", "/privacypolicy", "/tnc", "/tos", "/about", "/download", "/auth", "/dev"];

  function isPublic() {
    if (!r?.asPath) return false;
    return publicurl.some((p) => r.asPath.startsWith(p));
  }

  function isPrivateUser() {
    return r.asPath.includes("/u/") && auth?.user?.role_id == 2;
  }

  function isPrivateAdmin() {
    return r.asPath.includes("/super") && auth?.user?.role_id == 1;
  }

  if (isPublic()) return children;
  if (isPrivateUser()) return <>{children}</>;
  if (isPrivateAdmin()) return <>{children}</>;

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
