import { useEffect, useRef } from "react";

export default function CarbonCursor() {
  const ref = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const el = ref.current;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;
    let raf;
    const move = (e) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    const over = (e) => {
      el.dataset.active = e.target.closest("a, button, [data-cursor='hover']") ? "true" : "false";
    };
    const loop = () => {
      x += (tx - x) * 0.16;
      y += (ty - y) * 0.16;
      el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} data-testid="carbon-cursor" data-active="false" className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block">
      <div className="cursor-ring h-9 w-9 rounded-full border border-[#FF2E00]/70 transition-transform duration-200" />
      <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF2E00]" />
    </div>
  );
}
