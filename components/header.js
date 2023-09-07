import React from "react";
import Image from "next/image";
import "../css/components.css";

const Header = ({ sections }) => {
  return (
    <div>
      <a
        id="mlh-trust-badge"
        style={{
          display: "block",
          position: "absolute",
          right: "32px",
          top: "0",
          width: "5rem",
          zIndex: "10000",
        }}
        href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2024-season&utm_content=white"
        target="_blank"
      >
        <img
          src="https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-white.svg"
          alt="Major League Hacking 2024 Hackathon Season"
          style={{ width: "100%" }}
        />
      </a>
      <div className="header">
        <div className="logo">
          <Image
            src="/images/logo.svg"
            width={48}
            height={48}
            alt="Auburn Hacks white outline logo"
          />
          <p className="body-m bold primary">Auburn Hacks</p>
        </div>
        <div className="navigation">
          {sections.map((section, index) => (
            <div className="tertiary-button" key={index}>
              <a href={`#${section.id}`}>{section.name}</a>
            </div>
          ))}
          <div className="secondary-button">Pre-Register</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
