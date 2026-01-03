import { useState, useEffect } from "react";

export default function useLang() {
  const list = [
    { iso2: "id", name: "Indonesia", order: 2 },
    { iso2: "gb", name: "English", order: 1 },
  ];
  const [lang, setLang] = useState("gb");
  const [dict, setDict] = useState({});

  const t = (key) => key.split(".").reduce((o, i) => o?.[i], dict) ?? key;

  useEffect(() => {
    fetch(`/lang/${lang}.json`)
      .then((res) => res.json())
      .then(setDict)
      .catch(() => setDict({}));
  }, [lang]);

  return {
    t,
    set: setLang,
    list: list.sort((a, b) => a.order - b.order),
    current: lang,
  };
}
