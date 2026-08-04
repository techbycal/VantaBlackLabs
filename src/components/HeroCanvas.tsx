"use client";

import { useEffect, useRef } from "react";

const CELL_SIZE = 28;
const RADIUS = 220;
const MAX_ALPHA = 0.85;
const BASE_ALPHA = 0.05;
const DOT_SIZE = 1.5;

/**
 * Lightweight canvas grid that reacts to the cursor with a soft
 * spotlight falloff, plus a subtle ambient flicker so the grid
 * never looks fully static.
 */
export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let cols = 0;
    let rows = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const mouse = { x: -9999, y: -9999, targetX: -9999, targetY: -9999 };
    let frame = 0;
    let rafId = 0;

    function resize() {
      const parent = canvas!.parentElement;
      width = parent ? parent.clientWidth : window.innerWidth;
      height = parent ? parent.clientHeight : window.innerHeight;
      cols = Math.ceil(width / CELL_SIZE) + 1;
      rows = Math.ceil(height / CELL_SIZE) + 1;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function handleMouseMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    }

    function handleMouseLeave() {
      mouse.targetX = -9999;
      mouse.targetY = -9999;
    }

    function draw() {
      frame++;
      mouse.x += (mouse.targetX - mouse.x) * 0.12;
      mouse.y += (mouse.targetY - mouse.y) * 0.12;

      ctx!.clearRect(0, 0, width, height);

      for (let i = 0; i < cols; i++) {
        const x = i * CELL_SIZE;
        const dx = x - mouse.x;
        for (let j = 0; j < rows; j++) {
          const y = j * CELL_SIZE;
          const dy = y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          let alpha = BASE_ALPHA;
          if (dist < RADIUS) {
            alpha = BASE_ALPHA + (1 - dist / RADIUS) * MAX_ALPHA;
          }

          const flicker =
            0.5 + 0.5 * Math.sin(frame * 0.02 + i * 0.5 + j * 0.3);
          alpha = Math.min(1, alpha * (0.85 + flicker * 0.15));

          ctx!.fillStyle = `rgba(255,255,255,${alpha.toFixed(3)})`;
          ctx!.fillRect(x, y, DOT_SIZE, DOT_SIZE);
        }
      }

      rafId = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    rafId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
