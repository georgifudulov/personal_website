import "../styles/WhatIDo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faShieldAlt,
  faChartLine,
  faCompass,
} from "@fortawesome/free-solid-svg-icons";

export default function WhatIDo() {
  return (
    <section id="what-i-do" className="wrapper">
      <div className="wrapper whatido-content">
        <div className="square">
          <div className="wrapper icon-container">
            <FontAwesomeIcon icon={faCode} size="2x" className="icon" />
          </div>
          <h3 className="title">Web Development</h3>
          <p className="text">
            My website showcases my expertise in building modern, responsive web
            applications with a focus on creating seamless user experiences. I
            specialize in using Django for backend development, ensuring high
            performance and security, while leveraging React for dynamic and
            interactive frontend components. Creating scalable solutions
            optimized for speed and mobile responsiveness.
          </p>
        </div>

        <div className="square">
          <div className="wrapper icon-container">
            <FontAwesomeIcon icon={faCompass} size="2x" className="icon" />
          </div>
          <h3 className="title">Guiding</h3>
          <p className="text">
            My aim is to offer technical guidance to help individuals grow and
            solve problems effectively. My priority is to prepare them for the
            real-world demands of programming, equipping them with the tools and
            knowledge necessary to navigate complex systems, collaborate
            effectively, and adapt to the ever-evolving landscape of technology.
          </p>
        </div>

        <div className="square">
          <div className="wrapper icon-container">
            <FontAwesomeIcon icon={faShieldAlt} size="2x" className="icon" />
          </div>
          <h3 className="title">Cybersecurity</h3>
          <p className="text">
            Currently pursuing a degree in Cybersecurity with a focus on
            understanding and mitigating modern security threats. This education
            is helping me develop a deep knowledge of how to design and
            implement secure applications, safeguard sensitive data, and stay
            ahead of evolving cyber risks.
          </p>
        </div>

        <div className="square">
          <div className="wrapper icon-container">
            <FontAwesomeIcon icon={faChartLine} size="2x" className="icon" />
          </div>
          <h3 className="title">Investing</h3>
          <p className="text">
            I am passionate about long-term investing, focusing on building
            concentrated portfolios that are designed to grow above the market
            while minimizing risks. Through these experiences, I’ve honed my
            ability to make strategic financial decisions, adapt to market
            changes, and continuously learn from both successes and challenges.
          </p>
        </div>
      </div>
    </section>
  );
}
