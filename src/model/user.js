export const user = {
  idType: "string",
  includes: {
    type: {
      select: {
        name: true,
      },
    },
    role: {
      select: {
        name: true,
        color: true,
      },
    },
  },
  col: [
    { name: "name", label: "Name", w: 220, type: "elipsis" },
    { name: "role", label: "role", w: 220 },
    { name: "type", label: "type", w: 120 },
    { name: "seq", label: "Card#", w: 120 },
    { name: "company", label: "company", w: 220 },
    { name: "email", label: "email", w: "auto" },
  ],
  datamap: (d) => {
    return {
      ...d,
      role: d.role?.name,
      type: d.type?.name,
    };
  },
};
