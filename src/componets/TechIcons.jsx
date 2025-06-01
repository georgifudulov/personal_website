import { motion } from "framer-motion";

import pythonImage from "../assets/python.png";
import djangoImage from "../assets/django.png";
import jsImage from "../assets/js.png";
import htmlImage from "../assets/html.png";
import cssImage from "../assets/css.png";
import postgresqlImage from "../assets/postgresql.png";
import reactImage from "../assets/reactjs.png";
import dockerImage from "../assets/docker.png";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export default function TechIcons() {
  return (
    <motion.div
      className="wrapper tech"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {[
        pythonImage,
        djangoImage,
        jsImage,
        reactImage,
        htmlImage,
        cssImage,
        postgresqlImage,
        dockerImage,
      ].map((src, i) => {
        const name = src
          .split("/")
          .pop()
          .split(".")[0]
          .replace(/^\w/, (c) => c.toUpperCase());

        return (
          <motion.div
            className="wrapper img-container"
            key={i}
            variants={itemVariants}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <img src={src} alt={name} title={name} draggable="false" />
          </motion.div>
        );
      })}
    </motion.div>
  );
}
