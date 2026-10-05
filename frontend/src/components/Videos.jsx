import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Eye, CalendarDays, ArrowUpRight } from "lucide-react";

const CHANNEL_URL = "https://youtube.com/@oliseee1117/videos";
const VIDEO_ID = "kOiFUeLBZJ4";
const VIDEO_TITLE = "Olise is different | Olise edit";

const ease = [0.16, 1, 0.3, 1];

export default function Videos() {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="videos" data-testid="videos-section" className="relative border-t border-white/[0.05] py-24 lg:py-36">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[40vh] w-[50vw] -translate-x-1/2 rounded-full bg-[#FF2E00]/[0.06] blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease }}
          className="mb-14 flex flex-col justify-between gap-6 sm:mb-16 md:flex-row md:items-end"
        >
          <div className="flex flex-col gap-4">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-[#FF2E00]">
              02 — Videos
            </p>
            <h2 className="font-display text-3xl font-extrabold uppercase leading-[1.05] tracking-tight text-[#F2F4F8] sm:text-5xl">
              Neuester <span className="text-outline">Upload</span>
            </h2>
          </div>
          <a
            href={CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="videos-all-link"
            className="group inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-[#94A0B8] transition-colors duration-300 hover:text-[#FF2E00]"
          >
            Alle Videos auf YouTube
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.9, ease }}
          className="mx-auto max-w-5xl"
        >
          <div
            data-testid="video-item-card"
            data-cursor="hover"
            className="group relative aspect-video overflow-hidden rounded-2xl border border-white/[0.08] bg-[#12151D] shadow-[0_40px_90px_-30px_rgba(0,0,0,0.9)]"
          >
            {playing ? (
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
                title={VIDEO_TITLE}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <>
                <img
                  src={`https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                  alt={VIDEO_TITLE}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = `https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg`;
                  }}
                  className="absolute inset-0 h-full w-full object-cover opacity-80 transition-all duration-700 group-hover:scale-[1.03] group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060709]/90 via-transparent to-[#060709]/30" />

                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  data-testid="video-modal-trigger"
                  aria-label={`Video abspielen: ${VIDEO_TITLE}`}
                  className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#060709]/50 backdrop-blur-md transition-all duration-500 hover:scale-110 hover:border-[#FF2E00] hover:bg-[#FF2E00]/90 hover:shadow-[0_0_50px_rgba(255,46,0,0.5)]"
                >
                  <Play className="h-7 w-7 fill-white text-white" />
                </button>

                <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-[#060709]/70 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-[#F2F4F8] backdrop-blur-md">
                  Latest Upload
                </span>

                <span className="corner-bracket left-3 top-3" />
                <span className="corner-bracket right-3 top-3" />
                <span className="corner-bracket bottom-3 left-3" />
                <span className="corner-bracket bottom-3 right-3" />
              </>
            )}
          </div>

          <div className="mx-auto mt-8 flex max-w-5xl flex-col justify-between gap-4 border-b border-white/[0.06] pb-8 sm:flex-row sm:items-center">
            <h3 className="font-display text-lg font-bold tracking-tight text-[#F2F4F8] sm:text-2xl">
              {VIDEO_TITLE}
            </h3>
            <div className="flex items-center gap-6 font-mono text-[10px] uppercase tracking-[0.2em] text-[#525E75]">
              <span className="flex items-center gap-2">
                <Eye className="h-3.5 w-3.5 text-[#FF2E00]" /> 1.210 Views
              </span>
              <span className="flex items-center gap-2">
                <CalendarDays className="h-3.5 w-3.5 text-[#FF2E00]" /> Sep 2026
              </span>
              <a
                href={`https://www.youtube.com/watch?v=${VIDEO_ID}`}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="video-direct-watch-link"
                className="flex items-center gap-2 text-[#94A0B8] transition-colors duration-300 hover:text-[#FF2E00]"
              >
                <Youtube className="h-3.5 w-3.5" /> Auf YouTube
              </a>
            </div>
          </div>

          <div className="mt-10 text-center">
            <a
              href={CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="videos-more-button"
              className="group inline-flex items-center gap-3 rounded-full border border-white/15 px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#F2F4F8] transition-all duration-300 hover:border-[#FF2E00]/60 hover:text-[#FF2E00]"
            >
              Weitere Edits auf dem Kanal
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
