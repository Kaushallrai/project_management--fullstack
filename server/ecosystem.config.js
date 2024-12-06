module.exports = {
  apps: [
    {
      name: "project_management--fullstack",
      script: "npm",
      args: "run dev",
      env: {
        NODE_ENV: "development",
      },
    },
  ],
};
