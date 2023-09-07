import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/components.css";

const Socials = ({ socials }) => {
  return (
    <div className="socials">
      {socials.map((social, index) => (
        <a
          href={`${social.link}`}
          target="_blank"
          className="circle"
          key={index}
        >
          <FontAwesomeIcon icon={social.icon} className="logo" />
        </a>
      ))}
    </div>
  );
};

export default Socials;
