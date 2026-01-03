"use client";

import { useState, useEffect } from "react";
import { fetcher } from "@lib/useFetch";
import { useRouter } from "next/navigation";

export default function useAuth() {
  const router = useRouter();
  const [data, setdata] = useState("loading");

  function signin(res) {
    setdata(res);
    localStorage.setItem("AuthUser", JSON.stringify(res));
    res?.token && localStorage.setItem("AuthToken", res?.token);
  }

  function signout(routeCallback = "/") {
    setdata();
    localStorage.removeItem("AuthUser");
    localStorage.removeItem("AuthToken");
    routeCallback && router.push(routeCallback);
  }

  useEffect(() => {
    let cache = getChachedUser();
    if (cache?.id && check()) {
      setdata(cache);
    } else {
      signout(null);
    }
  }, []);

  async function check() {
    let res = await fetcher({
      url: `auth/me`,
      method: "post",
    });
    res?.data?.id ? signin(res.data) : signout();
  }

  function set(target, value) {
    setdata((prev) => {
      let payload = {
        ...prev,
        [target]: value,
      };

      localStorage.setItem("AuthUser", JSON.stringify(payload));
      return payload;
    });
  }

  return {
    id: data?.id,
    user: data,
    signin,
    signout,
    check,
    set,
  };
}

function getChachedUser() {
  try {
    return JSON.parse(localStorage.getItem("AuthUser"));
  } catch (error) {
    return {};
  }
}
