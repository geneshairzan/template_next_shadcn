export function createAppApi(queue) {
  return {
    move(dx, dy) {
      queue.push({ type: "move", dx, dy });
      limit(queue);
    },
    moveTo(dx, dy) {
      queue.push({ type: "moveTo", dx, dy });
      limit(queue);
    },
    rotate(deg) {
      queue.push({ type: "rotate", deg });
      limit(queue);
    },
  };
}

function limit(queue) {
  if (queue.length > 1000) {
    throw new Error("Too many commands (possible infinite loop)");
  }
}
