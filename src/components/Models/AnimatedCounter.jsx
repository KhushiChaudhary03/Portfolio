import React, { useRef } from "react";
import { counterItems } from "../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RocketIcon, CodeIcon, StarIcon } from "../Icons";

gsap.registerPlugin(ScrollTrigger);

const ICONS = { rocket: RocketIcon, code: CodeIcon, star: StarIcon };
const COLOR_MAP = {
  violet: "from-violet-500/25 to-violet-500/5 text-violet-300",
  sky: "from-sky-500/25 to-sky-500/5 text-sky-300",
  fuchsia: "from-fuchsia-500/25 to-fuchsia-500/5 text-fuchsia-300",
};

const AnimatedCounter = () => {
  const counterRefs = useRef([]);

  useGSAP(() => {
    counterRefs.current.forEach((el, index) => {
      const item = counterItems[index];
      if (!el || !item) return;

      const obj = { val: 0 };
      gsap.to(obj, {
        val: item.value,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
        onUpdate: () => {
          el.textContent = Number.isInteger(item.value)
            ? Math.floor(obj.val).toString()
            : obj.val.toFixed(2);
        },
      });
    });
  }, []);

  return (
    <div id="counter" className="mt-14 md:mt-16 relative z-10">
      <div className="mx-auto max-w-5xl grid-3-cols">
        {counterItems.map((item, index) => {
          const Icon = ICONS[item.icon] ?? RocketIcon;
          return (
            <div
              key={item.label}
              className="card-border card-hover rounded-2xl p-7 flex items-center gap-5"
            >
              <div className={`icon-badge bg-gradient-to-br ${COLOR_MAP[item.color] ?? COLOR_MAP.violet}`}>
                <Icon className="size-5" />
              </div>
              <div>
                <div className="counter-number text-white text-3xl md:text-4xl font-bold mb-1 flex items-end gap-1">
                  <span ref={(el) => (counterRefs.current[index] = el)}>0</span>
                  <span>{item.suffix}</span>
                </div>
                <div className="text-white-50 text-sm md:text-base">{item.label}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AnimatedCounter;
