import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <p>
        {" "}
        🎨{" "}
        <a
          href="https://github.com/SkippyWalnuts/weather-react"
          className="gitHub.source.link"
        >
          Source-Code
        </a>{" "}
        by Rebecca Early 👾
      </p>
    </div>
  );
}
