"use client";

import { useState, useEffect } from "react";

// Function to get stored data from localStorage
function getStoredData(defaultValue) {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("app");
    return stored ? JSON.parse(stored) : defaultValue;
  }

  return defaultValue;
}

export default function useApp() {
  const [data, setdata] = useState(
    getStoredData({
      isLoading: false,
      theme: "light",
    })
  );

  // Save to localStorage whenever `user` changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedApp = localStorage.getItem("app");
      if (storedApp) {
        setdata(JSON.parse(storedApp));
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && data !== null) {
      localStorage.setItem("app", JSON.stringify(data));
    }
    if (data === null) {
      localStorage.removeItem("app");
    }
  }, [data]);

  function get(target) {
    return data?.[target];
  }

  function set(target, value) {
    const keys = target.split(".");
    const newData = { ...data };
    let temp = newData;

    for (let i = 0; i < keys.length - 1; i++) {
      if (!temp[keys[i]]) {
        temp[keys[i]] = {};
      }
      temp = temp[keys[i]];
    }

    temp[keys[keys.length - 1]] = value;
    setdata(newData);
  }

  function setOnLoading() {
    setdata({ ...data, isLoading: true });
  }

  function setOffLoading() {
    setdata({ ...data, isLoading: false });
  }

  function closeSnack() {
    setdata({ ...data, snack: null });
  }

  return {
    ...data,
    theme: data.theme,
    set,
    get,
    setOnLoading,
    setOffLoading,
    closeSnack,
    setApp: setdata,
  };
}
