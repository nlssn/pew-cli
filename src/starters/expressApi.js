const { cmd } = require("../utils/commands");

module.exports = {
  name: "pew-express-api",
  repo: "https://github.com/nlssn/pew-express-api",
  async execute(projectName) {
    // Clone the starters repo
    cmd("git", ["clone", this.repo, projectName]);
    console.log(`Cloned starter from ${this.repo}`);

    // Remove existing .git folder
    cmd("rm", ["-rf", `${projectName}/.git`]);
    console.log("Removed existing .git folder");

    // Copy .env.example to .env
    cmd("cp", [`${projectName}/.env.example`, `${projectName}/.env`]);
    console.log("Created .env from example file");

    // Install npm dependencies
    cmd("npm.cmd", ["install"], { cwd: process.cwd() + `/${projectName}` });
    console.log("Installed dependencies");

    // Finish up by telling the user how to run the dev server...
    console.log(
      `All done!\nRun the following commands to start developing:\n\ncd ${projectName}\nnpm run dev`
    );
  },
};
