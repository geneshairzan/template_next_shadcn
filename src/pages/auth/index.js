import Context from "@context";
import React, { useState, useEffect } from "react";

import UI from "@ui";
import Form, { useForm } from "@form";
import { fetcher } from "@lib/useFetch";
import Social from "./_social";
import Signin from "./_signin";
import Signup from "./_signup";

export default function Example() {
  const { auth, r } = React.useContext(Context);

  const [mode, setmode] = useState(1);

  useEffect(() => {
    if (auth?.id) {
      if (auth?.user.role_id == 1) {
        r.push("/super");
      } else if (auth?.user.role_id == 2) {
        r.push("/");
      }
    }
  }, [auth, r]);

  return (
    <UI.Col className="w-screen h-screen justify-center items-center">
      <img src="/assets/img/login.jpg" alt="" className="filled absolute h-screen  top-0 left-0 z-0" />
      <UI.Col className="flex p-4 w-[90%] max-w-[420px] rounded-xl border border-gray-300 z-1 bg-white">
        {mode == 1 && <Signin onSignup={() => setmode(2)} />}
        {mode == 2 && <Signup onSignin={() => setmode(1)} />}
        <Social />
      </UI.Col>
    </UI.Col>
  );
}
