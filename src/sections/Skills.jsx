import React from "react";
import { skillGroups } from "../constants";
import { TerminalIcon, LayersIcon, CpuIcon, DatabaseIcon, CloudIcon, AwardIcon } from "../components/Icons";
import { useReveal } from "../hooks/useReveal";

const ICONS = {
  terminal: TerminalIcon,
  layers: LayersIcon,
  cpu: CpuIcon,
  database: DatabaseIcon,
  cloud: CloudIcon,
  award: AwardIcon,
};

const COLOR_MAP = {
  violet: "from-violet-500/25 to-violet-500/5 text-violet-300",
  sky: "from-sky-500/25 to-sky-500/5 text-sky-300",
  emerald: "from-emerald-500/25 to-emerald-500/5 text-emerald-300",
  amber: "from-amber-500/25 to-amber-500/5 text-amber-300",
  fuchsia: "from-fuchsia-500/25 to-fuchsia-500/5 text-fuchsia-300",
  rose: "from-rose-500/25 to-rose-500/5 text-rose-300",
};

const SkillCard = ({ title, skills, icon, color, index }) => {
  const ref = useReveal();
  const Icon = ICONS[icon] ?? TerminalIcon;

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 70}ms` }}
      className="reveal card-border card-hover rounded-2xl p-7 flex flex-col gap-4"
    >
      <div className="flex items-center gap-3">
        <div className={`icon-badge bg-gradient-to-br ${COLOR_MAP[color] ?? COLOR_MAP.violet}`}>
          <Icon className="size-5" />
        </div>
        <h3 className="text-white-50 text-sm font-semibold tracking-widest uppercase">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="section-padding relative">
      <div className="absolute -z-10 blob w-[28rem] h-[28rem] bg-violet-600/10 top-20 left-0" />
      <div className="mx-auto max-w-5xl">
        <div className="section-kicker">What I work with</div>
        <h2 className="section-heading mb-14">Skills</h2>

        <div className="grid-3-cols">
          {skillGroups.map((group, index) => (
            <SkillCard key={group.title} {...group} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
