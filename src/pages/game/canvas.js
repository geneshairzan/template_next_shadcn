import { useEffect, useRef } from "react";

const SIZE = 400;
const GRID_MAX = 10;
const PADDING = 40;

export default function Canvas({ player }) {
  const canvasRef = useRef(null);

  const scale = (SIZE - PADDING * 2) / GRID_MAX;

  const toCanvasX = (x) => PADDING + x * scale;
  const toCanvasY = (y) => SIZE - PADDING - y * scale;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, SIZE, SIZE);

    // grid
    ctx.strokeStyle = "#e5e7eb";
    for (let i = 0; i <= GRID_MAX; i++) {
      const p = PADDING + i * scale;

      ctx.beginPath();
      ctx.moveTo(p, PADDING);
      ctx.lineTo(p, SIZE - PADDING);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(PADDING, p);
      ctx.lineTo(SIZE - PADDING, p);
      ctx.stroke();
    }

    // player
    const { x, y, rot, color } = player;
    const cx = toCanvasX(x);
    const cy = toCanvasY(y);

    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate((rot * Math.PI) / 180);

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(0, -12);
    ctx.lineTo(10, 10);
    ctx.lineTo(-10, 10);
    ctx.closePath();
    ctx.fill();

    ctx.restore();
  }, [player]);

  return <canvas ref={canvasRef} width={SIZE} height={SIZE} style={{ border: "1px solid #ccc" }} />;
}
