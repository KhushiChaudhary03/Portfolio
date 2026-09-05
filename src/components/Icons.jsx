import React from "react";

/*
  Small, dependency-free icon set (stroke-based, feather-style).
  Keeps the bundle light instead of pulling in an icon library
  just for a dozen glyphs used across the redesign.
*/

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export const RocketIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
);

export const CodeIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

export const StarIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} {...base} fill="currentColor" stroke="none">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export const TrophyIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M8 21h8" />
    <path d="M12 17v4" />
    <path d="M7 4h10v5a5 5 0 0 1-10 0V4z" />
    <path d="M7 5H4a3 3 0 0 0 3 5" />
    <path d="M17 5h3a3 3 0 0 1-3 5" />
  </svg>
);

export const MedalIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <circle cx="12" cy="15" r="5" />
    <path d="M9.5 11.5L6 3h3l2 5" />
    <path d="M14.5 11.5L18 3h-3l-2 5" />
    <path d="M12 12.5v5" />
  </svg>
);

export const UsersIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export const ZapIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} {...base} fill="currentColor" stroke="none">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

export const TerminalIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" y1="19" x2="20" y2="19" />
  </svg>
);

export const LayersIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

export const DatabaseIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <ellipse cx="12" cy="5" rx="8" ry="3" />
    <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
    <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
  </svg>
);

export const CloudIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M17.5 19a4.5 4.5 0 0 0 0-9 6 6 0 0 0-11.6 1.6A4 4 0 0 0 6.5 19h11z" />
  </svg>
);

export const CpuIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <rect x="6" y="6" width="12" height="12" rx="2" />
    <rect x="9" y="9" width="6" height="6" />
    <path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" />
  </svg>
);

export const GraduationCapIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M22 10L12 5 2 10l10 5 10-5z" />
    <path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" />
  </svg>
);

export const AwardIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <circle cx="12" cy="8" r="6" />
    <path d="M8.5 13.5L7 22l5-3 5 3-1.5-8.5" />
  </svg>
);

export const MailIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M2 6l10 7 10-7" />
  </svg>
);

export const PhoneIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export const DownloadIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

export const ArrowUpRightIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

export const GithubIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" stroke="none">
    <path d="M12 .5C5.73.5.98 5.24.98 11.5c0 4.99 3.24 9.22 7.73 10.72.56.1.77-.24.77-.54 0-.27-.01-1.16-.02-2.1-3.14.68-3.8-1.34-3.8-1.34-.51-1.3-1.25-1.64-1.25-1.64-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.63 1.22 3.27.93.1-.73.39-1.22.71-1.5-2.5-.28-5.13-1.25-5.13-5.56 0-1.23.44-2.23 1.16-3.02-.12-.28-.5-1.42.11-2.96 0 0 .95-.3 3.11 1.16a10.8 10.8 0 0 1 5.66 0c2.16-1.46 3.1-1.16 3.1-1.16.62 1.54.24 2.68.12 2.96.72.79 1.16 1.79 1.16 3.02 0 4.32-2.64 5.27-5.15 5.55.4.35.76 1.04.76 2.1 0 1.52-.01 2.74-.01 3.11 0 .3.2.65.78.54A11.03 11.03 0 0 0 23.02 11.5C23.02 5.24 18.27.5 12 .5z" />
  </svg>
);

export const LinkedinIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" stroke="none">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
  </svg>
);

export const LeetcodeIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M13.5 2.5L5 11l5.5 5.5" />
    <path d="M5 11h13" />
    <path d="M8 17.5l2.5 2.5c1.5 1.5 4 1.5 5.5 0s1.5-4 0-5.5" />
  </svg>
);

export const ChevronRightIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

/* Monogram mark for the "Khushi" wordmark — a geometric K, more personal
   and distinctive than a generic code-bracket glyph. */
export const LogoMark = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="4" x2="7" y2="20" />
    <line x1="7" y1="12.5" x2="17" y2="4" />
    <line x1="7" y1="12.5" x2="17" y2="20" />
  </svg>
);

/* Simple brand-colored logo glyphs for the hero's tech badges — drawn as
   plain vector shapes rather than relying on the repo's raw logo assets,
   some of which (e.g. git.svg's embedded raster pattern) don't scale
   cleanly at small badge sizes. */

export const ReactLogo = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#61dafb" strokeWidth="1.4">
    <circle cx="12" cy="12" r="2.2" fill="#61dafb" stroke="none" />
    <ellipse cx="12" cy="12" rx="10" ry="4.2" />
    <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
  </svg>
);

export const NodeLogo = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="#8cc84b" stroke="none">
    <path d="M12 1.5l8.5 5v11l-8.5 5-8.5-5v-11l8.5-5z" opacity="0.18" />
    <path d="M12 3.2l7 4.1v9.4l-7 4.1-7-4.1V7.3l7-4.1z" fill="none" stroke="#8cc84b" strokeWidth="1.3" />
    <text x="12" y="15.5" textAnchor="middle" fontSize="7" fontWeight="700" fill="#8cc84b" fontFamily="monospace">JS</text>
  </svg>
);

export const PythonLogo = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path d="M12 2c-4 0-3.8 1.7-3.8 1.7v1.8h3.9v.6H6.6S4 5.8 4 9.9s2.3 3.9 2.3 3.9h1.5v-2s-.1-2.3 2.3-2.3h3.7s2.2 0 2.2-2.1V4.2S16.3 2 12 2z" fill="#4B8BBE" />
    <path d="M12 22c4 0 3.8-1.7 3.8-1.7v-1.8h-3.9v-.6h5.5s2.6.3 2.6-3.8-2.3-3.9-2.3-3.9h-1.5v2s.1 2.3-2.3 2.3H10s-2.2 0-2.2 2.1v3.3S7.7 22 12 22z" fill="#FFD43B" />
  </svg>
);

export const GitLogo = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#f34f29" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="3" x2="12" y2="9" />
    <circle cx="12" cy="11" r="2" />
    <path d="M12 13v2a3 3 0 0 0 3 3h1" />
    <circle cx="17" cy="18" r="1.6" />
    <path d="M12 13v2a3 3 0 0 1-3 3H8" />
    <circle cx="7" cy="18" r="1.6" />
  </svg>
);
