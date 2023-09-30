import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer mt-5">
      <p>
        {""}
        🎨{" "}
        <a
          href="https://github.com/SkippyWalnuts/weather-react"
          className="gitHub.source.link"
          target="_blank"
          rel="true noopener noreferrer"
        >
          Source-Code
        </a>{" "}
        by <a href="https://visionary-dragon-63ebd9.netlify.app/"
         target="_blank"
         rel="true noopener noreferrer">
          Becca Early
          </a>{" "}👾{""}
      </p>
    </div>
  );
}
