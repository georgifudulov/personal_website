import "../styles/Hero.css";
import heroImage from "../assets/photoroom_hero.png";

import FadeInWrapper from "./FadeInWrapper";

export default function Hero() {
  return (
    <section id="hero" className="wrapper hero">
      <div className="wrapper hero-content">
        <FadeInWrapper className='wrapper hero-text'>
            <h2>Welcome to My Website</h2>
            <p>Your gateway to modern web design and development.</p>
            <a href="#about">
              <button>Get Started</button>
            </a>
        </FadeInWrapper>
        <FadeInWrapper delay={0.3} className='wrapper hero-image'>
            <img src={heroImage} alt="Hero visual" draggable="false" />
        </FadeInWrapper>
      </div>
    </section>
  );
}
