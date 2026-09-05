import React from "react";
import { achievementCards, certifications, education } from "../constants";
import { TrophyIcon, StarIcon, MedalIcon, AwardIcon, GraduationCapIcon } from "../components/Icons";
import { useReveal } from "../hooks/useReveal";

const ICONS = { trophy: TrophyIcon, star: StarIcon, medal: MedalIcon };
const COLOR_MAP = {
  amber: "from-amber-500/25 to-amber-500/5 text-amber-300",
  emerald: "from-emerald-500/25 to-emerald-500/5 text-emerald-300",
  violet: "from-violet-500/25 to-violet-500/5 text-violet-300",
};

const AchievementCard = ({ title, date, icon, color, responsibilities, index }) => {
  const ref = useReveal();
  const Icon = ICONS[icon] ?? TrophyIcon;
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 90}ms` }}
      className="reveal card-border card-hover rounded-2xl p-7 flex flex-col gap-3"
    >
      <div className={`icon-badge bg-gradient-to-br ${COLOR_MAP[color] ?? COLOR_MAP.amber}`}>
        <Icon className="size-5" />
      </div>
      <h3 className="text-white font-semibold leading-snug">{title}</h3>
      <p className="text-violet-300/80 text-xs font-medium uppercase tracking-wide">{date}</p>
      <p className="text-white-50 text-sm leading-relaxed">
        {responsibilities[0]}
      </p>
    </div>
  );
};

const Achievements = () => {
  return (
    <section id="achievements" className="section-padding relative">
      <div className="absolute -z-10 blob w-[26rem] h-[26rem] bg-fuchsia-600/10 top-40 right-0" />
      <div className="mx-auto max-w-5xl">
        <div className="section-kicker">Milestones</div>
        <h2 className="section-heading mb-14">Achievements &amp; Education</h2>

        {/* Achievements */}
        <div className="grid-3-cols mb-16">
          {achievementCards.map((item, index) => (
            <AchievementCard key={item.title} {...item} index={index} />
          ))}
        </div>

        {/* Certifications */}
        <div className="flex items-center gap-3 mb-6">
          <AwardIcon className="size-5 text-violet-300" />
          <h3 className="text-white text-xl md:text-2xl font-semibold">
            Certifications
          </h3>
        </div>
        <div className="grid-3-cols mb-16">
          {certifications.map(({ title, issuer }) => (
            <div
              key={title}
              className="card-border card-hover rounded-2xl p-7 flex flex-col gap-3"
            >
              <div className="icon-badge bg-gradient-to-br from-violet-500/25 to-violet-500/5 text-violet-300">
                <AwardIcon className="size-5" />
              </div>
              <h4 className="text-white text-base font-semibold leading-snug">
                {title}
              </h4>
              <p className="text-white-50 text-sm">{issuer}</p>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="flex items-center gap-3 mb-6">
          <GraduationCapIcon className="size-5 text-violet-300" />
          <h3 className="text-white text-xl md:text-2xl font-semibold">
            Education
          </h3>
        </div>
        <div className="relative flex flex-col gap-6 pl-8">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-violet-400/60 via-fuchsia-400/40 to-transparent" />
          {education.map(({ school, degree, period, detail }) => (
            <div key={school + degree} className="relative">
              <span className="absolute -left-8 top-1.5 size-3.5 rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-400 ring-4 ring-[#05050a]" />
              <div className="card-border card-hover rounded-2xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <h4 className="text-white text-base md:text-lg font-semibold leading-snug">{degree}</h4>
                  <p className="text-white-50/70 text-xs mt-1">{school}</p>
                </div>
                <div className="md:text-right">
                  <p className="text-white-50 text-sm">{period}</p>
                  <p className="text-white text-sm font-semibold">{detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
