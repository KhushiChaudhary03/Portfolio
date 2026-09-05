import React from "react";
import { socialImgs } from "../constants";
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from "./Icons";

const ICONS = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  leetcode: LeetcodeIcon,
};

/**
 * size: tailwind size for the badge, e.g. "size-11"
 * iconSize: tailwind size for the glyph, e.g. "size-4"
 */
const SocialLinks = ({ size = "size-11", iconSize = "size-4", className = "" }) => {
  return (
    <>
      {socialImgs.map(({ name, url }) => {
        const Icon = ICONS[name] ?? GithubIcon;
        return (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noreferrer"
            aria-label={name}
            className={`${size} rounded-xl glass flex-center text-white-50 transition-all duration-300 hover:border-violet-400/50 hover:bg-violet-500/10 hover:text-white hover:-translate-y-1 ${className}`}
          >
            <Icon className={iconSize} />
          </a>
        );
      })}
    </>
  );
};

export default SocialLinks;
