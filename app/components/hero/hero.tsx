"use client";

import FadeInner from "../fadeInner/fadeInner";

import { motion } from "framer-motion";

import "./hero.scss";

export default function Hero() {
  return (
    <section className="hero">
      <FadeInner>
        <p>Hey, I'm</p>
      </FadeInner>
      <FadeInner highlight>
        <h1>Dryha Andrii</h1>
      </FadeInner>

      <FadeInner>
        <p>
          I'm a Full Stack Developer with a higher education degree and
          practical experience in building modern web applications. Skilled in
          Next.js, React.js, and Node.js, I work across both frontend and
          backend, delivering efficient and maintainable solutions. With a
          strong focus on clean architecture and performance, I'm constantly
          improving and keeping up with the latest trends in web development.
        </p>
      </FadeInner>
    </section>
  );
}
