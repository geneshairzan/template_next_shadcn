module.exports = {
  apps: [
    {
      name: "project_xpenditur_ems",
      // script: "npm",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 7032",
      // watch: false,
      autorestart: true,
      ignore_watch: ["node_modules"],
      watch: [".next"],
    },
  ],
};
