import { motion } from "framer-motion";
import { ArrowUpRight, Users, Eye, AtSign } from "lucide-react";

const CHANNEL_URL = "https://youtube.com/@oliseee1117";
const PORTRAIT_IMG =
  "https://images.unsplash.com/photo-1761882730474-e9ecbdb4c7ac?crop=entropy&cs=srgb&fm=jpg&q=85";

const craft = ["SOUNDSYNC", "COLOR GRADING", "VELOCITY CUTS", "3D TYPOGRAPHIE"];

const ease = [0.16, 1, 0.3, 1];
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
};

export default function About() {
  return (
    <section id="about" data-testid="about-section" className="relative py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
        <motion.div {...fadeUp} transition={{ duration: 0.7, ease }} className="mb-14 flex flex-col gap-4 sm:mb-16">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-[#FF2E00]">
            01 — Über mich
          </p>
          <h2 className="font-display text-3xl font-extrabold uppercase leading-[1.05] tracking-tight text-[#F2F4F8] sm:text-5xl">
            Edits mit <span className="text-outline">eigener Handschrift</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-12 lg:gap-6">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, ease }}
            data-testid="about-bio-card"
            className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#12151D] md:col-span-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-5">
              <div className="p-8 sm:col-span-3 lg:p-10">
                <h3 className="font-display text-xl font-bold uppercase tracking-tight text-[#F2F4F8] sm:text-2xl">
                  Kreativität ohne Grenzen.
                </h3>
                <p className="mt-5 text-sm leading-relaxed text-[#94A0B8] sm:text-base">
                  m.oliseee.11.17 steht für Edits mit eigener Handschrift: schnelle Cuts, sauberes
                  Sounddesign und Bildkompositionen, die im Kopf bleiben. Kein Schema, kein Bauplan —
                  nur das Gefühl des Moments, Frame für Frame gesetzt.
                </p>
                <blockquote className="mt-7 border-l-2 border-[#FF2E00] pl-5">
                  <p className="font-display text-lg font-semibold text-[#F2F4F8] sm:text-xl">
                    „Nah, imma do my own think."
                  </p>
                  <cite className="mt-2 block font-mono text-[10px] not-italic uppercase tracking-[0.25em] text-[#525E75]">
                    — Channel-Motto
                  </cite>
                </blockquote>
              </div>
              <div className="relative min-h-[240px] sm:col-span-2">
                <img
                  src={PORTRAIT_IMG}
                  alt="Cinematic red-blue studio light"
                  className="absolute inset-0 h-full w-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#12151D] via-[#12151D]/30 to-transparent" />
              </div>
            </div>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            data-testid="about-stats-card"
            className="flex flex-col justify-between gap-8 rounded-2xl border border-white/[0.07] bg-gradient-to-b from-[#12151D] to-[#0A0C10] p-8 md:col-span-4 lg:p-10"
          >
            <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-[#94A0B8]">
              Kanal-Stats
            </h3>
            <div className="flex flex-col gap-6">
              <div className="flex items-end justify-between">
                <div>
                  <p className="font-display text-4xl font-black tracking-tight text-[#F2F4F8] sm:text-5xl">1.31K+</p>
                  <p className="mt-1 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#525E75]">
                    <Users className="h-3.5 w-3.5 text-[#FF2E00]" /> Abonnenten
                  </p>
                </div>
              </div>
              <div className="flex items-end justify-between border-t border-white/[0.06] pt-5">
                <div>
                  <p className="font-display text-3xl font-black tracking-tight text-[#F2F4F8] sm:text-4xl">1.210</p>
                  <p className="mt-1 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#525E75]">
                    <Eye className="h-3.5 w-3.5 text-[#FF2E00]" /> Views · neuester Edit
                  </p>
                </div>
              </div>
              <a
                href={CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="about-handle-link"
                className="group flex items-center justify-between rounded-xl border border-white/[0.08] bg-white/[0.03] px-5 py-4 transition-all duration-300 hover:border-[#FF2E00]/50"
              >
                <span className="flex items-center gap-2 font-mono text-xs tracking-[0.15em] text-[#F2F4F8]">
                  <AtSign className="h-4 w-4 text-[#FF2E00]" /> oliseee1117
                </span>
                <ArrowUpRight className="h-4 w-4 text-[#94A0B8] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#FF2E00]" />
              </a>
            </div>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, ease }}
            data-testid="about-software-stack"
            className="rounded-2xl border border-white/[0.07] bg-[#12151D] p-8 md:col-span-4 lg:p-10"
          >
            <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-[#94A0B8]">Craft</h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {craft.map((c) => (
                <span
                  key={c}
                  className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-[#F2F4F8] transition-colors duration-300 hover:border-[#FF2E00]/50 hover:text-[#FF2E00]"
                >
                  {c}
                </span>
              ))}
            </div>
            <p className="mt-7 text-sm leading-relaxed text-[#94A0B8]">
              Vom Beat-Match bis zum letzten Color Grade — jedes Element dient dem Rhythmus des
              Edits.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="relative overflow-hidden rounded-2xl border border-[#FF2E00]/[0.25] bg-[#0A0C10] p-8 md:col-span-4 lg:p-10"
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#FF2E00]/[0.12] blur-[60px]" />
            <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-[#FF2E00]">
              Edit Ethos
            </h3>
            <p className="mt-6 font-display text-2xl font-extrabold uppercase leading-tight tracking-tight text-[#F2F4F8] sm:text-3xl">
              Kein Schema. Kein Kompromiss.
            </p>
            <p className="mt-5 text-sm leading-relaxed text-[#94A0B8]">
              Jeder Cut hat seine eigene Energie — vom ersten Frame bis zum letzten.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-carbon p-8 md:col-span-4 lg:p-10"
          >
            <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-[#94A0B8]">Format</h3>
            <p className="mt-6 font-display text-5xl font-black tracking-tight text-[#F2F4F8]">EN</p>
            <p className="mt-4 text-sm leading-relaxed text-[#94A0B8]">
              Edits &amp; Kommunikation auf dem Kanal laufen auf Englisch — Edits verstehen sich
              trotzdem überall.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
