import React, { useState, useEffect } from "react";

import UI from "@ui";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useGoogleLogin, GoogleLogin } from "@react-oauth/google";

import useFetch from "@/lib/useFetch";
import Context from "@context";

export default function Google({ onLogged }) {
  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_OAUTH}>
      <CustomLogin onLogged={onLogged} />
    </GoogleOAuthProvider>
  );
}

function CustomLogin({ onLogged }) {
  const { auth, app } = React.useContext(Context);
  const data = useFetch();

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      let res = await data.fetch({
        url: "auth/sociallogin",
        method: "post",
        data: { access_token: tokenResponse.access_token },
      });
      if (res?.id) {
        auth.signin(res);
      }
    },
    onError: (errorResponse) => {},
  });

  return (
    <UI.Button onClick={login} type="button" variant="outlined">
      <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleLogo.svg" alt="googleLogo" />
    </UI.Button>
  );
}
