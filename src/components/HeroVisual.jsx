import React from "react";
import { ReactLogo, NodeLogo, PythonLogo, GitLogo } from "./Icons";

/*
  Replaces the abstract Three.js orbiting-spheres visual with something
  that reads immediately as "tech" — a small code editor showing Khushi's
  actual stack, plus real framework/tool logos as floating badges. Built
  with plain HTML/CSS (no WebGL) so it's crisp, lightweight, and never
  looks like random decorative shapes.
*/

const codeLines = [
  { tokens: [["const", "kw"], [" khushi", "var"], [" = {", "pl"]] },
  { indent: 1, tokens: [["role", "prop"], [": ", "pl"], ["'Full-Stack Dev'", "str"], [",", "pl"]] },
  { indent: 1, tokens: [["stack", "prop"], [": [", "pl"], ["'React'", "str"], [",", "pl"], ["'Flask'", "str"], ["],", "pl"]] },
  { indent: 1, tokens: [["focus", "prop"], [": ", "pl"], ["'AI-powered'", "str"], [",", "pl"]] },
  { indent: 1, tokens: [["available", "prop"], [": ", "pl"], ["true", "kw"], [",", "pl"]] },
  { tokens: [["};", "pl"]] },
];

const tokenColor = {
  kw: "text-fuchsia-300",
  var: "text-sky-300",
  prop: "text-violet-300",
  str: "text-emerald-300",
  pl: "text-white-50/70",
};

const badges = [
  { Icon: ReactLogo, label: "React", pos: "-top-3 -left-3 md:-top-5 md:-left-5", delay: "0s" },
  { Icon: NodeLogo, label: "Node.js", pos: "-top-3 -right-3 md:-top-5 md:-right-5", delay: "1.2s" },
  { Icon: PythonLogo, label: "Python", pos: "-bottom-3 -left-3 md:-bottom-5 md:-left-5", delay: "2.1s" },
  { Icon: GitLogo, label: "Git", pos: "-bottom-3 -right-3 md:-bottom-5 md:-right-5", delay: "0.6s" },
];

const HeroVisual = () => {
  return (
    <div className="relative h-full w-full flex items-center justify-center px-6 md:px-8 xl:px-16">
      <div className="relative w-full max-w-md">
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#0c0c16] to-[#141026] shadow-[0_20px_60px_-20px_rgba(139,92,246,0.35)]">
          {/* window chrome */}
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/10 bg-white/[0.03]">
            <span className="size-2.5 rounded-full bg-red-400/70" />
            <span className="size-2.5 rounded-full bg-amber-400/70" />
            <span className="size-2.5 rounded-full bg-emerald-400/70" />
            <span className="ml-2 text-[11px] font-mono text-white-50/60">khushi.js</span>
          </div>

          {/* code body */}
          <div className="px-3 xl:px-5 py-4 xl:py-5 font-mono text-[11px] xl:text-sm leading-6 xl:leading-7 overflow-x-auto">
            {codeLines.map((line, i) => (
              <div key={i} className="flex gap-2 xl:gap-4 whitespace-nowrap">
                <span className="text-white-50/25 select-none w-2.5 xl:w-3 text-right">{i + 1}</span>
                <span style={{ paddingLeft: `${(line.indent ?? 0) * 16}px` }}>
                  {line.tokens.map(([t, kind], j) => (
                    <span key={j} className={tokenColor[kind]}>{t}</span>
                  ))}
                </span>
              </div>
            ))}
            <div className="flex items-center gap-2 mt-3">
              <span className="w-2 h-4 bg-fuchsia-400 animate-pulse" />
            </div>
          </div>

          <div className="flex items-center gap-2 px-4 py-2.5 border-t border-white/10 bg-white/[0.03]">
            <span className="size-1.5 rounded-full bg-emerald-400" />
            <span className="text-[10px] text-white-50/60 font-mono">building something new</span>
          </div>
        </div>

        {/* floating tech-logo badges — anchored to the card's own corners so
            they always sit against a solid, contrasting edge */}
        {badges.map(({ Icon, label, pos, delay }) => (
          <div
            key={label}
            style={{ animationDelay: delay }}
            className={`hidden sm:flex absolute ${pos} z-20 size-11 md:size-14 rounded-2xl bg-[#12121e] border border-white/15 items-center justify-center shadow-[0_10px_25px_-6px_rgba(0,0,0,0.7)] animate-float-slow`}
          >
            <Icon className="size-5 md:size-7" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroVisual;
