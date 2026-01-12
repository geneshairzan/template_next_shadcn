export const area = {
  idType: "string",
  includes: {
    event: {
      select: {
        name: true,
      },
    },
    access: {
      select: {
        role_id: true,
        role: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    },
  },
  col: [
    { name: "name", label: "Name", w: 200 },
    { name: "desc", label: "Description", w: "auto" },
    { name: "eventName", label: "Event", w: 200 },
    { name: "group", label: "Group", w: 300 },
    { name: "access_length", label: "Assigned Role", w: 300 },
  ],
  datamap: (d) => {
    return {
      ...d,
      eventName: d.event?.name,
      access_length: access_prep(d.access),
    };
  },
  list: {
    deleteable: true,
  },
};

function access_prep(raw) {
  let temp = raw?.map((d) => d.role.name);
  let extra = temp?.length > 2 ? `and ${temp.length - 2} more` : "";

  return temp?.slice(0, 2).reduce((a, b) => a.concat(b + ", "), "") + extra;
}
