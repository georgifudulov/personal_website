import "../styles/WhatIDo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faShieldAlt,
  faChartLine,
  faCompass,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

const items = [
  {
    title: "Web Development",
    icon: faCode,
    text: "My website showcases my expertise in building modern, responsive web applications with a focus on creating seamless user experiences. I specialize in using Django for backend development, ensuring high performance and security, while leveraging React for dynamic and interactive frontend components. Creating scalable solutions optimized for speed and mobile responsiveness.",
  },
  {
    title: "Guiding",
    icon: faCompass,
    text: "My aim is to offer technical guidance to help individuals grow and solve problems effectively. My priority is to prepare them for the real-world demands of programming, equipping them with the tools and knowledge necessary to navigate complex systems, collaborate effectively, and adapt to the ever-evolving landscape of technology.",
  },
  {
    title: "Cybersecurity",
    icon: faShieldAlt,
    text: "Currently pursuing a degree in Cybersecurity with a focus on understanding and mitigating modern security threats. This education is helping me develop a deep knowledge of how to design and implement secure applications, safeguard sensitive data, and stay ahead of evolving cyber risks.",
  },
  {
    title: "Investing",
    icon: faChartLine,
    text: "I am passionate about long-term investing, focusing on building concentrated portfolios that are designed to grow above the market while minimizing risks. Through these experiences, I’ve honed my ability to make strategic financial decisions, adapt to market changes, and continuously learn from both successes and challenges.",
  },
];

export default function WhatIDo() {
  const [activeIndex, setActiveIndex] = useState(null);

  function toggle(index) {
    setActiveIndex((prev) => (prev === index ? null : index));
  }

  return (
    <section id="what-i-do" className="wrapper">
      <div className="wrapper whatido-content desktop">
        {items.map((item, index) => (
          <div key={index} className="square">
            <div className="wrapper icon-container">
              <FontAwesomeIcon icon={item.icon} size="2x" className="icon" />
            </div>
            <h3 className="title">{item.title}</h3>
            <p className="text">{item.text}</p>
          </div>
        ))}
      </div>
      <div className="wrapper whatido-content mobile">
        <h2>What I Do</h2>
        {items.map((item, index) => (
          <div
            key={index}
            className={`dropdown ${activeIndex === index ? "open" : ""}`}
            onClick={() => toggle(index)}
          >
            <h3 className="title">
              {item.title}
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`chevron ${activeIndex === index ? "rotate" : ""}`}
              />
            </h3>
            <p className="text">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
