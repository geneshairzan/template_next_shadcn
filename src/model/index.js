import { user } from "./user";
import { userrole } from "./userrole";
import { status } from "./status";
import { event } from "./event";
import { area } from "./area";
import { activity } from "./activity";

const default_col = [
  { name: "name", label: "Name", w: 220 },
  { name: "desc", label: "Description", w: "auto" },
];

const default_datamap = (d) => {
  return {
    ...d,
  };
};

function getDefault(target) {
  switch (target) {
    case "datamap":
      return default_datamap;
    case "col":
      return default_col;
    case "includes":
      return {};
    case "idType":
      return "int";
    default:
      return null;
  }
}

export function getInfo(model, target) {
  const lib = {
    user,
    userrole,
    event,
    status,
    area,
    activity,
  };

  return target ? lib?.[model]?.[target] || getDefault(target) : lib?.[model];
}
