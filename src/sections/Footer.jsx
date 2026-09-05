import React from "react";
import SocialLinks from "../components/SocialLinks";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© {new Date().getFullYear()} Khushi. All rights reserved.</p>

       
      <p className="text-center md:text-end md:col-start-3">
  Built with React &amp; Tailwind CSS{" "}
  <span className="text-fuchsia-400">♥</span>
</p>
      </div>
    </footer>
  );
};

export default Footer;
