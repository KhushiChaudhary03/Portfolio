import React from "react";

/*
  The repo's original project1/2/3.png files are leftover stock template
  images (a ride-share app onboarding screen, a "BookWise" library UI) that
  have nothing to do with ResumeIQ / SyncWrite / CampusQuery. Rather than
  keep those or drop in more generic stock art, each project gets a small
  hand-built mockup below that represents its actual screen/functionality
  described in the resume — an ATS score screen, a live code editor with
  collaborator cursors, and a mobile query feed.
*/

const WindowChrome = ({ label }) => (
  <div className="flex items-center gap-2 px-4 py-2.5 bg-white/[0.04] border-b border-white/10">
    <span className="size-2.5 rounded-full bg-red-400/70" />
    <span className="size-2.5 rounded-full bg-amber-400/70" />
    <span className="size-2.5 rounded-full bg-emerald-400/70" />
    <span className="ml-3 text-[11px] text-white-50/70 font-mono truncate">{label}</span>
  </div>
);

function ResumeIQVisual() {
  return (
    <div className="h-full w-full flex flex-col bg-gradient-to-br from-[#0d0d16] to-[#131022]">
      <WindowChrome label="resumeiq.app — dashboard" />
      <div className="flex-1 grid grid-cols-5 gap-3 p-4">
        {/* left: upload / JD panel */}
        <div className="col-span-3 flex flex-col gap-3">
          <div className="rounded-lg border border-dashed border-violet-400/40 bg-violet-500/[0.06] p-3 flex items-center gap-3">
            <div className="size-8 rounded-md bg-violet-500/20 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" className="size-4 text-violet-300" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="h-1.5 w-24 rounded-full bg-white/20 mb-1.5" />
              <div className="h-1.5 w-14 rounded-full bg-white/10" />
            </div>
          </div>
          <div className="rounded-lg bg-white/[0.04] border border-white/10 p-3 flex-1 flex flex-col gap-2">
            <div className="h-1.5 w-16 rounded-full bg-white/15" />
            {[92, 70, 84, 55, 78].map((w, i) => (
              <div key={i} className="h-1.5 rounded-full bg-white/[0.07]" style={{ width: `${w}%` }} />
            ))}
          </div>
          <div className="flex gap-2">
            {["React.js", "Flask", "SQL"].map((t) => (
              <span key={t} className="text-[10px] px-2 py-1 rounded-full bg-white/[0.06] text-white-50 border border-white/10">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* right: ATS score gauge */}
        <div className="col-span-2 rounded-lg bg-white/[0.04] border border-white/10 p-3 flex flex-col items-center justify-center gap-2">
          <div className="relative size-20">
            <svg viewBox="0 0 36 36" className="size-20 -rotate-90">
              <circle cx="18" cy="18" r="15.5" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="3" />
              <circle
                cx="18" cy="18" r="15.5" fill="none"
                stroke="url(#atsGrad)" strokeWidth="3" strokeLinecap="round"
                strokeDasharray="97 100"
              />
              <defs>
                <linearGradient id="atsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#a78bfa" />
                  <stop offset="100%" stopColor="#f472b6" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex-center flex-col">
              <span className="text-white text-sm font-bold">ATS</span>
            </div>
          </div>
          <span className="text-[10px] text-white-50/70 uppercase tracking-wide">Score preview</span>
          <div className="w-full flex flex-col gap-1.5 mt-1">
            {["Skills", "Keywords"].map((label) => (
              <div key={label} className="flex items-center gap-2">
                <span className="text-[9px] text-white-50/60 w-14 shrink-0">{label}</span>
                <div className="h-1 flex-1 rounded-full bg-white/10">
                  <div className="h-1 rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-400" style={{ width: label === "Skills" ? "82%" : "68%" }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SyncWriteVisual() {
  const lines = [
    { indent: 0, tokens: [["const", "kw"], [" room", "var"], [" = ", "pl"], ["io", "fn"], ["(", "pl"], ["'/editor'", "str"], [")", "pl"]] },
    { indent: 1, tokens: [["socket", "var"], [".", "pl"], ["on", "fn"], ["(", "pl"], ["'join'", "str"], [", cb)", "pl"]] },
    { indent: 2, tokens: [["cb", "fn"], ["(", "pl"], ["file", "var"], [")", "pl"]] },
    { indent: 1, tokens: [["})", "pl"]] },
    { indent: 0, tokens: [] },
    { indent: 0, tokens: [["export default", "kw"], [" Editor", "var"]] },
  ];
  const tokenColor = { kw: "text-fuchsia-300", var: "text-sky-300", fn: "text-violet-300", str: "text-emerald-300", pl: "text-white-50/70" };

  return (
    <div className="h-full w-full flex flex-col bg-gradient-to-br from-[#0b0b14] to-[#12111f]">
      <WindowChrome label="syncwrite — room: dsa-prep" />
      <div className="flex-1 flex text-[11px] font-mono">
        {/* file tabs + tree */}
        <div className="w-20 shrink-0 border-r border-white/10 py-2 px-2 flex flex-col gap-1.5">
          {["editor.jsx", "server.js", "room.js"].map((f, i) => (
            <div key={f} className={`truncate text-[9px] px-1.5 py-1 rounded ${i === 0 ? "bg-violet-500/20 text-violet-200" : "text-white-50/50"}`}>
              {f}
            </div>
          ))}
        </div>
        {/* code area */}
        <div className="flex-1 relative py-3 px-3 overflow-hidden">
          {lines.map((line, i) => (
            <div key={i} className="flex gap-3 leading-5">
              <span className="text-white-50/30 select-none w-3 text-right">{i + 1}</span>
              <span style={{ paddingLeft: `${line.indent * 12}px` }} className="whitespace-nowrap">
                {line.tokens.map(([t, kind], j) => (
                  <span key={j} className={tokenColor[kind]}>{t}</span>
                ))}
              </span>
            </div>
          ))}

          {/* live collaborator cursors */}
          <div className="absolute top-[34px] left-[128px] flex items-center gap-1">
            <span className="w-[1.5px] h-4 bg-sky-400 animate-pulse" />
            <span className="text-[8px] px-1.5 py-0.5 rounded bg-sky-400 text-black font-semibold whitespace-nowrap">Khushi</span>
          </div>
          <div className="absolute top-[58px] left-[70px] flex items-center gap-1">
            <span className="w-[1.5px] h-4 bg-amber-400 animate-pulse" />
            <span className="text-[8px] px-1.5 py-0.5 rounded bg-amber-400 text-black font-semibold whitespace-nowrap">Guest 1</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 px-3 py-1.5 border-t border-white/10 bg-white/[0.03]">
        <span className="size-1.5 rounded-full bg-emerald-400" />
        <span className="text-[9px] text-white-50/60">2 collaborators connected · WebSocket live</span>
      </div>
    </div>
  );
}

function CampusQueryVisual() {
  const posts = [
    { tag: "Placements", title: "Backend role eligibility criteria?", replies: 6 },
    { tag: "DBMS", title: "Normalization doubt — 3NF example", replies: 3 },
  ];
  const tagColor = { Placements: "bg-fuchsia-500/20 text-fuchsia-200", DBMS: "bg-sky-500/20 text-sky-200" };

  return (
    <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-[#0d0d17] to-[#141024] py-3">
      <div className="w-[150px] h-[300px] rounded-[1.4rem] border-2 border-white/15 bg-[#0a0a12] shadow-2xl overflow-hidden flex flex-col">
        <div className="h-4 flex items-center justify-center bg-black/60">
          <div className="w-8 h-1 rounded-full bg-white/30" />
        </div>
        <div className="px-2.5 py-2 flex items-center justify-between bg-white/[0.04] border-b border-white/10">
          <span className="text-[9px] font-bold text-white">CampusQuery</span>
          <span className="size-4 rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-400" />
        </div>
        <div className="flex-1 px-2 py-2 flex flex-col gap-2 overflow-hidden">
          {posts.map((p) => (
            <div key={p.title} className="rounded-lg bg-white/[0.05] border border-white/10 p-2 flex flex-col gap-1.5">
              <span className={`text-[7px] px-1.5 py-0.5 rounded-full w-fit ${tagColor[p.tag]}`}>{p.tag}</span>
              <p className="text-[8px] text-white-50 leading-snug">{p.title}</p>
              <div className="flex items-center gap-1 text-[7px] text-white-50/50">
                <svg viewBox="0 0 24 24" className="size-2.5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                {p.replies} replies
              </div>
            </div>
          ))}
          <div className="mt-auto flex justify-end">
            <div className="size-6 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex-center text-white text-[10px] font-bold shadow-lg">+</div>
          </div>
        </div>
        <div className="h-6 flex items-center justify-around bg-white/[0.04] border-t border-white/10">
          {[0, 1, 2].map((i) => (
            <span key={i} className={`size-1.5 rounded-full ${i === 0 ? "bg-fuchsia-400" : "bg-white/20"}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

const VISUALS = {
  resumeiq: ResumeIQVisual,
  syncwrite: SyncWriteVisual,
  campusquery: CampusQueryVisual,
};

const ProjectVisual = ({ type }) => {
  const Visual = VISUALS[type];
  if (!Visual) return null;
  return <Visual />;
};

export default ProjectVisual;
