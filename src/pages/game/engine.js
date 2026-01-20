export function createEngine({ setPlayer, speed }) {
  let interval = speed;
  let timer = null;

  const commandQueue = [];

  function processCommand() {
    const cmd = commandQueue.shift();
    if (!cmd) return;

    setPlayer((p) => {
      console.log(cmd.type);
      switch (cmd.type) {
        case "move":
          return {
            ...p,
            x: clamp(p.x + cmd.dx),
            y: clamp(p.y + cmd.dy),
          };
        case "moveTo":
          return {
            ...p,
            x: clamp(cmd.dx),
            y: clamp(cmd.dy),
          };
        case "rotate":
          return { ...p, rot: p.rot + cmd.deg };
        default:
          return p;
      }
    });
  }

  function start() {
    stop();
    timer = setInterval(processCommand, interval);
  }

  function stop() {
    if (timer) clearInterval(timer);
    timer = null;
  }

  function reset() {
    stop();
    commandQueue.length = 0;
  }

  function setSpeed(ms) {
    interval = ms;
    if (timer) start();
  }

  return {
    start,
    stop,
    reset,
    setSpeed,
    commandQueue,
  };
}

function clamp(v) {
  return Math.max(0, Math.min(10, v));
}
