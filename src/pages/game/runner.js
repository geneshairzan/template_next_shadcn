const LEVEL_RULES = {
  1: ["move"],
  2: ["move", "rotate"],
  3: ["move", "rotate", "moveTo"],
};

function detectIllegalApiUsage(code, imported, allowed) {
  const used = new Set();

  for (const api of allowed) {
    const regex = new RegExp(`\\b${api}\\s*\\(`, "g");
    if (regex.test(code)) used.add(api);
  }

  for (const api of used) {
    if (!imported.includes(api)) {
      throw new Error(`❌ '${api}' is used but not imported from app`);
    }
  }
}

function parseUserFunctions(code) {
  const funcs = [];
  const regex = /function\s+([a-zA-Z_$][\w$]*)\s*\(/g;
  let m;

  while ((m = regex.exec(code))) {
    funcs.push(m[1]);
  }

  return funcs;
}

function parseImports(code) {
  const match = code.match(/import\s*{\s*([^}]+)\s*}\s*from\s*["']app["']/);

  if (!match) return [];

  return match[1]
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

export function compileUserCode(code, level = 3) {
  const imported = parseImports(code);
  const userFunc = parseUserFunctions(code);
  const allowedApi = LEVEL_RULES[level] || [];

  // 🔒 ENFORCEMENT
  detectIllegalApiUsage(code, imported, allowedApi);

  if (!userFunc.includes("main")) {
    throw new Error("❌ main() function is required");
  }

  // strip imports + export
  const cleaned = code.replace(/import\s+.*from\s+["']app["'];?/g, "").replace(/export\s+default\s+/g, "");

  const expose = imported.join(", ");

  const wrapped = `
    "use strict";
    return function(app) {
      const { ${expose} } = app;
      ${cleaned}
      return main;
    }
  `;

  return {
    importFunc: imported,
    userFunc,
    factory: new Function(wrapped)(),
  };
}
