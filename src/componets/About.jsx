import "../styles/About.css";

import FadeInWrapper from "./FadeInWrapper";
import TechIcons from "./TechIcons";

export default function About() {
  return (
    <>
      <section id="about" className="wrapper about">
        <div className="wrapper about-content">
          <FadeInWrapper className="heading">
            <h2 className="line-1">I'm Georgi Fudulov</h2>
            <h2 className="line-2">Python, ReactJS Developer & Investor</h2>
          </FadeInWrapper>
          <FadeInWrapper className="description" delay={0.3}>
            <p>
              Aspiring Web Developer with 4 years of hands-on experience
              in building responsive and user-focused web applications. I
              specialize in Python and the Django framework, complemented by
              strong front-end skills in HTML, CSS, JavaScript, and ReactJS. My
              work emphasizes clean design, performance optimization, and
              intuitive user experience. Gained 4 years of experience in
              personal finance, investing, and money management—skills that
              enhance my problem-solving abilities, analytical and strategic
              thinking. Currently pursuing a Bachelor's degree in Cybersecurity,
              further strengthening my understanding of secure web development
              practices.
            </p>
          </FadeInWrapper>
          <TechIcons />
        </div>
      </section>
    </>
  );
}
