const { spawn } = require("child_process");

module.exports = function download(link) {
  const childPython = spawn("python", ["python/main.py", link]);

  childPython.stdout.on("data", (data) => {
    console.log(`${data}`);
  });

  childPython.stderr.on("data", (data) => {
    console.log(`stderr: ${data}`);
  });

  childPython.stderr.on("close", (code) => {
    console.log(`child process exited with code: ${code}`);
  });
};
