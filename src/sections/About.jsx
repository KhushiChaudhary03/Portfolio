import React from "react";
import { abilities } from "../constants";
import { useReveal } from "../hooks/useReveal";
import AnimatedCounter from "../components/Models/AnimatedCounter";

const COLOR_MAP = {
  violet: "from-violet-500/25 to-violet-500/5 text-violet-300",
  sky: "from-sky-500/25 to-sky-500/5 text-sky-300",
  fuchsia: "from-fuchsia-500/25 to-fuchsia-500/5 text-fuchsia-300",
};

const AbilityCard = ({ imgPath, title, desc, color, index }) => {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 90}ms` }}
      className="reveal card-border card-hover rounded-2xl p-7 flex flex-col gap-4"
    >
      <div className={`icon-badge bg-gradient-to-br ${COLOR_MAP[color] ?? COLOR_MAP.violet}`}>
        <img src={imgPath} alt={title} className="size-5" />
      </div>
      <h3 className="text-white text-lg font-semibold">{title}</h3>
      <p className="text-white-50 text-sm leading-relaxed">{desc}</p>
    </div>
  );
};

const About = () => {
  const textRef = useReveal();

  return (
    <section id="about" className="section-padding relative">
      <div className="absolute -z-10 blob w-96 h-96 bg-sky-500/10 top-0 right-0" />
      <div className="mx-auto max-w-5xl">
        <div className="section-kicker">Get to know me</div>
        <h2 className="section-heading mb-8">About Me</h2>
        <p ref={textRef} className="reveal text-white-50 md:text-xl text-base leading-relaxed max-w-3xl">
          I'm Khushi, a Computer Science undergraduate who likes turning ideas
          into working products — from full-stack applications and
          AI-powered tools to real-time collaborative systems. I enjoy
          working across the stack with React, Node.js, Flask, and
          SQL/NoSQL databases, while building a strong foundation in data
          structures, algorithms, and system fundamentals.
        </p>

        <div className="grid-3-cols mt-14">
          {abilities.map((ability, index) => (
            <AbilityCard key={ability.title} {...ability} index={index} />
          ))}
        </div>
      </div>

      {/* stat cards now live below the About intro, per feedback */}
      <AnimatedCounter />
    </section>
  );
};

export default About;
