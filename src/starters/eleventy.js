const path = require("path");

const { cmd } = require("../utils/commands");

module.exports = {
  name: "pew-11ty",
  repo: "https://github.com/nlssn/pew-11ty",
  async execute(projectName) {
    // Clone the starters repo
    cmd("git", ["clone", this.repo, projectName]);
    console.log(`Cloned starter from ${this.repo}`);

    // Remove existing .git folder
    cmd("rm", ["-rf", `${process.cwd()}/${projectName}/.git`]);
    console.log("Removed existing .git folder");

    // Install npm dependencies
    cmd("npm.cmd", ["install"], { cwd: `${process.cwd()}/${projectName}` });
    console.log("Installed dependencies");

    // Finish up by telling the user how to run the dev server...
    console.log(
      `All done!\nRun the following commands to start developing:\n\ncd ${projectName}\nnpm run dev`
    );
  },
};
