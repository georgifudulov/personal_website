import "../styles/Projects.css";

import ProjectItem from "./ProjectItem";
import FadeInWrapper from "./FadeInWrapper";

import portfolioTracker from "../assets/portfolio_tracker.png";
import wizardwash from "../assets/wizardwash.png";

const projectData = [
  {
    title: "WizardWash",
    description:
      "Developed a professional web platform for a nationally operating cleaning company with 5 years of experience, using ReactJS and Vanilla CSS. Showcasing services, real client results, and SEO-optimized content.",
    img: wizardwash,
    url: "https://wizardwash.bg",
    alt: "WizardWash image",
  },
  ,
  {
    title: "Portfolio Tracker",
    description:
      "Developed a financial management tool integrating real-time API data for tracking equity investments using Django, HTML, CSS, and JavaScript. Deployed on AWS EC2 for scalability.",
    img: portfolioTracker,
    url: "http://152.70.190.66/",
    alt: "Portfolio Tracker image",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="wrapper">
      <div className="wrapper projects-content">
        <h3 className="projects-heading">My Projects</h3>
        {projectData.map((item, index) => (
          <FadeInWrapper>
            <ProjectItem
              key={index}
              title={item.title}
              description={item.description}
              img={item.img}
              url={item.url}
              alt={item.alt}
            />
          </FadeInWrapper>
        ))}
        <a href="https://github.com/georgifudulov" target="_blank" rel="noopener noreferrer">
          <button>View All My Projects</button>
        </a>
      </div>
    </section>
  );
}
