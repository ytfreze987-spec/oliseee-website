import { useId } from "react";

export const LogoMark = ({ className = "h-9 w-9" }) => {
  const id = useId();
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={`hex-${id}`} x1="0" y1="0" x2="48" y2="48">
          <stop stopColor="#4A5266" />
          <stop offset="1" stopColor="#12151D" />
        </linearGradient>
      </defs>
      <path d="M24 2 43 13v22L24 46 5 35V13L24 2Z" stroke={`url(#hex-${id})`} strokeWidth="2.5" />
      <path d="M24 11.5 34.7 17.75v12.5L24 36.5 13.3 30.25v-12.5L24 11.5Z" stroke="#FF2E00" strokeWidth="1.8" />
      <path d="M13.3 17.75 34.7 30.25M34.7 17.75 13.3 30.25" stroke="rgba(242,244,248,0.3)" strokeWidth="1" />
      <circle cx="24" cy="24" r="3.2" fill="#FF2E00" />
    </svg>
  );
};

export default LogoMark;
