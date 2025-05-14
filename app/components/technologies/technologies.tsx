"use client";

import "./technologies.scss";
import Carousel from "./carousel/carousel";
import ListRevealer from "../animations/listRevealer/listRevealer";
import SectionRevealer from "../animations/sectionRevealer/sectionRevealer";

export default function Technologies() {
  return (
    <div className="technologies">
      <h2>My Tech Steck</h2>
      <SectionRevealer>
        <h3>Frontend</h3>
        <ul>
          <ListRevealer>
            <li>React, Next.js</li>
            <li>HTML, CSS, JavaScript, TypeScript</li>
            <li>SCSS, Tailwind, MaterialUI</li>
            <li>Redux, Zustand, Jotai</li>
          </ListRevealer>
        </ul>
        <h3>Backend</h3>
        <ul>
          <ListRevealer>
            <li>Node.JS, Express.JS, Nest.JS</li>
            <li>MongoDB, Mongoose, PostgreSQL</li>
            <li>Mongoose, TypeORM</li>
          </ListRevealer>
        </ul>
        <h3>Other</h3>
        <ul>
          <li>Git, Docker, Webpack, ESLint, Vite, GitLab</li>
        </ul>
        <Carousel />
      </SectionRevealer>
    </div>
  );
}
