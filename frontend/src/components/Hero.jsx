import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { Play, ArrowUpRight } from "lucide-react";

const CHANNEL_URL = "https://youtube.com/@oliseee1117";
const HERO_IMG =
  "https://images.unsplash.com/photo-1762618621440-7082e14bc8c0?crop=entropy&cs=srgb&fm=jpg&q=85";

const lines = ["NEXT-LEVEL", "VIDEO EDITS", "& MOTION DESIGN"];

const chips = ["1.31K+ ABOS", "VELOCITY CUTS", "SOUNDSYNC"];

const ease = [0.16, 1, 0.3, 1];

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const cardY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 120, damping: 14 });
  const sry = useSpring(ry, { stiffness: 120, damping: 14 });

  return (
    <section
      id="top"
      ref={sectionRef}
      data-testid="hero-section"
      className="bg-carbon relative flex min-h-screen items-center overflow-hidden pt-28 pb-20"
    >
      <motion.div
        style={{ y: glowY }}
        className="pointer-events-none absolute -top-40 right-[-10%] h-[70vh] w-[60vw] rounded-full bg-[#FF2E00]/[0.13] blur-[140px]"
      />
      <div className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-[50vh] w-[40vw] rounded-full bg-[#00E5FF]/[0.05] blur-[140px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-4 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:px-16">
        <div className="lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="mb-7 flex items-center gap-3 font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-[#FF2E00] sm:text-xs"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF2E00] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FF2E00]" />
            </span>
            Nah, imma do my own think.
          </motion.p>

          <h1 data-testid="hero-headline" className="font-display text-[clamp(2.6rem,7.5vw,5.2rem)] font-black uppercase leading-[0.95] tracking-tight text-[#F2F4F8]">
            {lines.map((line, i) => (
              <span key={line} className="block overflow-hidden pb-1">
                <motion.span
                  className={`block ${i === 2 ? "text-outline" : ""}`}
                  initial={{ y: "115%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.95, delay: 0.2 + i * 0.13, ease }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75, ease }}
            className="mt-7 max-w-xl text-base leading-relaxed text-[#94A0B8] sm:text-lg"
          >
            Hochauflösende Visuals, präzise Velocity-Cuts und ein eigenwilliger Stil — willkommen im
            Carbon-Black-Universum von <span className="font-semibold text-[#F2F4F8]">m.oliseee.11.17</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease }}
            className="mt-6 flex flex-wrap items-center gap-3"
          >
            {chips.map((c) => (
              <span
                key={c}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-[#94A0B8]"
              >
                {c}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.05, ease }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href={CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="hero-cta-subscribe"
              className="group inline-flex items-center gap-3 rounded-full bg-[#FF2E00] px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,46,0,0.5)]"
            >
              Kanal entdecken
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#videos"
              data-testid="hero-cta-videos"
              className="inline-flex items-center gap-3 rounded-full border border-white/15 px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#F2F4F8] transition-all duration-300 hover:border-[#FF2E00]/60 hover:text-[#FF2E00]"
            >
              <Play className="h-4 w-4" />
              Videos ansehen
            </a>
          </motion.div>
        </div>

        <motion.div
          style={{ y: cardY }}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.5, ease }}
          className="lg:col-span-5"
        >
          <div style={{ perspective: 1000 }}>
            <motion.a
              href="#videos"
              data-testid="hero-featured-video-card"
              data-cursor="hover"
              onMouseMove={(e) => {
                const r = e.currentTarget.getBoundingClientRect();
                ry.set(((e.clientX - r.left) / r.width - 0.5) * 10);
                rx.set(-((e.clientY - r.top) / r.height - 0.5) * 8);
              }}
              onMouseLeave={() => {
                rx.set(0);
                ry.set(0);
              }}
              style={{ rotateX: srx, rotateY: sry }}
              className="group relative block aspect-[4/5] overflow-hidden rounded-2xl border border-white/[0.08] bg-[#12151D] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] sm:aspect-[5/6] lg:aspect-[4/5]"
            >
              <img
                src={HERO_IMG}
                alt="Cinematic light trails — Edit Visual"
                className="absolute inset-0 h-full w-full object-cover opacity-70 transition-all duration-700 group-hover:scale-105 group-hover:opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060709] via-transparent to-[#060709]/40" />

              <span className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/10 bg-[#060709]/70 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-[#F2F4F8] backdrop-blur-md">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#FF2E00]" />
                REC · 4K
              </span>

              <span className="absolute right-4 top-4 font-mono text-[10px] uppercase tracking-[0.25em] text-[#94A0B8]">
                @oliseee1117
              </span>

              <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#060709]/50 backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:border-[#FF2E00] group-hover:bg-[#FF2E00]/90">
                <Play className="h-7 w-7 fill-white text-white" />
              </span>

              <span className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-[#94A0B8]">
                <span>Latest: Olise is different</span>
                <span className="text-[#FF2E00]">▶ Watch now</span>
              </span>

              <span className="corner-bracket left-3 top-3" />
              <span className="corner-bracket right-3 top-3" />
              <span className="corner-bracket bottom-3 left-3" />
              <span className="corner-bracket bottom-3 right-3" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-[#525E75]">Scroll</span>
        <span className="scroll-line block h-10 w-px bg-gradient-to-b from-[#FF2E00] to-transparent" />
      </motion.div>
    </section>
  );
}
