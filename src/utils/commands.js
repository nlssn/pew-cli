const { spawnSync } = require("child_process");

const cmd = (cmd, args, options = undefined) => {
  const spawned = spawnSync(cmd, args, options);

  if (spawned.error) {
    console.error(spawned.error);
  }
};

module.exports = { cmd };
