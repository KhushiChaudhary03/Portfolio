import React from "react";
import { contactInfo } from "../constants";
import { MailIcon, PhoneIcon } from "../components/Icons";
import SocialLinks from "../components/SocialLinks";

const Contact = () => {
  return (
    <section id="contact" className="section-padding relative">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl glass p-8 md:p-14">
          <div className="absolute -z-10 blob w-96 h-96 bg-violet-600/15 -top-32 -left-20" />
          <div className="absolute -z-10 blob w-96 h-96 bg-fuchsia-600/12 -bottom-32 -right-20" />

          <div className="flex flex-col items-center text-center gap-6 relative z-10">
            <span className="text-3xl">👋</span>
            <h2 className="text-white text-3xl md:text-5xl font-bold">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-white-50 md:text-lg max-w-xl">
              I'm open to internship opportunities where I can build
              real-world products and grow as a software developer.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
              <a
                href={`mailto:${contactInfo.email}`}
                className="px-6 sm:px-8 py-4 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-semibold text-sm sm:text-base inline-flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_-10px_rgba(217,70,239,0.45)]"
              >
                <MailIcon className="size-4 shrink-0" />
                <span className="break-all">{contactInfo.email}</span>
              </a>

              <a
                href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
                className="px-6 py-4 rounded-xl glass text-white font-semibold text-sm sm:text-base inline-flex items-center gap-2 transition-all duration-300 hover:border-white/30 hover:bg-white/[0.06] hover:-translate-y-0.5"
              >
                <PhoneIcon className="size-4" />
                {contactInfo.phone}
              </a>
            </div>

            <div className="flex gap-4 mt-4">
              <SocialLinks size="size-12" iconSize="size-5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
