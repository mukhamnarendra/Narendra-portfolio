import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi I'm <span>Narendra Mukham</span>
        </motion.h1>

        <h2 className="typing">
          <Typewriter
            words={[
              "Frontend Developer",
              "React Developer",
              "JavaScript Developer"
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>

        <p className="hero-desc">
          I build modern, responsive web applications using React and modern JavaScript.
        </p>

        <a href="#projects" className="btn">View Projects</a>

      </div>

    </section>
  );
}

export default Hero;