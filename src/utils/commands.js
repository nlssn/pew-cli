const spawn = require("cross-spawn");

const cmd = (cmd, args, options = undefined) => {
  const spawned = spawn.sync(cmd, args, options);

  if (spawned.error) {
    console.error(spawned.error);
  }
};

module.exports = { cmd };
