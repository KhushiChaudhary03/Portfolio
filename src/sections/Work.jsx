import React from "react";
import { projects } from "../constants";
import ProjectVisual from "../components/ProjectVisual";
import { GithubIcon, ArrowUpRightIcon } from "../components/Icons";
import { useReveal } from "../hooks/useReveal";

const ProjectCard = ({ project, index }) => {
  const ref = useReveal();
  const { title, desc, tags, visual, githubLink, liveLink } = project;

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 90}ms` }}
      className="reveal card-border card-hover rounded-2xl overflow-hidden flex flex-col group"
    >
      <div className="h-60 md:h-64 relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.05]">
          <ProjectVisual type={visual} />
        </div>
        {/* integrate the mockup into the card with a soft top-down vignette + hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/0 to-fuchsia-600/0 group-hover:from-violet-600/10 group-hover:to-fuchsia-600/[0.06] transition-all duration-500 pointer-events-none" />
        <span className="absolute top-3 left-3 text-xs font-mono text-white/70 bg-black/40 backdrop-blur px-2 py-1 rounded-md border border-white/10">
          0{index + 1}
        </span>
      </div>

      <div className="p-6 flex flex-col gap-3 flex-1">
        <h3 className="text-white text-xl font-bold leading-snug tracking-tight">
          {title}
        </h3>
        <p className="text-white-50 text-sm leading-relaxed">
          {desc}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-white/[0.04] border border-white/10 text-white-50 text-xs px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-5 pt-3 mt-1 border-t border-white/10 text-sm font-semibold">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-white-50 hover:text-white transition-colors"
            >
              <GithubIcon className="size-4" />
              GitHub
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-white-50 hover:text-white transition-colors"
            >
              Live Demo
              <ArrowUpRightIcon className="size-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Work = () => {
  return (
    <section id="work" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <div className="section-kicker">Selected Work</div>
            <h2 className="section-heading">Projects</h2>
          </div>
          <a
            href="https://github.com/KhushiChaudhary03"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-white-50 hover:text-white transition-colors flex items-center gap-1.5"
          >
            View all on GitHub
            <ArrowUpRightIcon className="size-4" />
          </a>
        </div>

        <div className="grid-3-cols">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
