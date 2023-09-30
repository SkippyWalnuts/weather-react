import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer fixed-bottom">
      <p>
        {" "}
        🎨{" "}
        <a
          href="https://github.com/SkippyWalnuts/weather-react"
          className="gitHub.source.link"
          target="_blank"
          rel="true noopener noreferrer"
        >
          Source-Code
        </a>{" "}
        by Becca Early 👾
      </p>
    </div>
  );
}
