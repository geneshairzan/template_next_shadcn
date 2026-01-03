import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Context from "@context";

export default function AppMiddleware({ children }) {
  const r = useRouter();
  const { auth } = React.useContext(Context);

  let publicurl = ["/", "/privacypolicy", "/tnc", "/tos", "/about", "/download", "/auth"];

  function isPublic() {
    if (publicurl.includes(r?.asPath)) return true;

    return false;
  }

  function isPrivateUser() {
    if (r.asPath.includes("/u/") && auth?.user?.role_id == 2) {
      return true;
    }
    return false;
  }

  function isPrivateAdmin() {
    if (r.asPath.includes("/super") && auth?.user?.role_id == 1) {
      return true;
    }
    return false;
  }

  if (isPublic()) return children;
  if (isPrivateUser()) return <>{children}</>;
  if (isPrivateAdmin()) return <>{children}</>;

  //escape : Auth
  return <Redirect url="auth" />;
}

function Redirect({ url = "/" }) {
  const r = useRouter();

  useEffect(() => {
    r.push(url);
  }, []);

  return <></>;
}
