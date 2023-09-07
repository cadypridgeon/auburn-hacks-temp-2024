"use client";

import Image from "next/image";
import styles from "../css/app.css";
import {
  faLinkedinIn,
  faInstagram,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import Header from "../components/header.js";
import Socials from "../components/socials.js";
import Stars from "../components/stars";

config.autoAddCss = false;

export default function Home() {
  const sections = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "FAQ", id: "faq" },
    { name: "Sponsors", id: "sponsors" },
  ];

  const socials = [
    {
      icon: faLinkedinIn,
      link: "https://www.linkedin.com/company/auburnhacks/",
    },
    {
      icon: faInstagram,
      link: "https://www.instagram.com/auburnhacks/?hl=en",
    },
    {
      icon: faFacebookF,
      link: "https://www.facebook.com/AuburnHacks/",
    },
    {
      icon: faEnvelope,
      link: "mailto:staff@auburnhacks.com",
    },
  ];

  return (
    <div className="background">
      <Stars />
      {/* <Header sections={sections} /> */}
      <div className="content">
        <div className="home" id="home">
          <h1 className="h1 primary">Auburn Hacks</h1>
          <h2 className="h2 primary">February 3-4, 2024</h2>
          <div className="large-button">
            <a
              href="https://auburn.qualtrics.com/jfe/form/SV_3fl8aWfQOrPETXg"
              target="_blank"
            >
              PRE-REGISTER
            </a>
          </div>
          <div id="placeholder-socials">
            <Socials socials={socials} />
          </div>
        </div>
      </div>
    </div>
  );
}
