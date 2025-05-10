import "./App.css";

import Header from "./componets/Header";
import Footer from "./componets/Footer";
import Hero from "./componets/Hero";
import About from "./componets/About";
import WhatIDo from "./componets/WhatIDo";
import Projects from "./componets/Projects";
import ContactForm from "./componets/ContactForm";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <WhatIDo />
      <Projects />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
