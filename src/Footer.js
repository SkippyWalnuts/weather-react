import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer mt-4">
      <p>
        {""}
        🎨{" "}
        <a
          href="https://github.com/SkippyWalnuts/weather-react"
          id="link to github page with website's source code"
          target="_blank"
          rel="true noopener noreferrer"
        >
          Source-Code
        </a>{" "}
        by{" "} <a href="https://becca-early.com/"
        id="link to Becca Early's website portfolio"
         target="_blank"
         rel="true noopener noreferrer">
          Becca Early
          </a>{" "}👾{""}
      </p>
    </div>
  );
}
