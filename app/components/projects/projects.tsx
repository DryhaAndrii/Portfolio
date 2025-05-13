import Image from "next/image";
import SectionRevealer from "../animations/sectionRevealer/sectionRevealer";
import Button from "../button/button";
import Link from "next/link";
import { GithubIcon, TvMinimal } from "lucide-react";
import { projects } from "./projects.data";

import "./projects.scss";

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <h2>Projects</h2>
      {projects.map((project, i, array) => (
        <SectionRevealer classname="projects-item" key={i}>
          <div className="projects-item-info">
            <div className="projects-item-info-description">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
            <Image
              src={project.image}
              width={500}
              height={500}
              alt="musicShop"
            />
          </div>

          <div className="projects-item-buttons">
            <Link href={project.liveUrl}>
              <Button variant="1">
                <TvMinimal />
                Live demo
              </Button>
            </Link>

            <Link href={project.githubUrl}>
              <Button variant="2">
                <GithubIcon />
                GitHub
              </Button>
            </Link>
          </div>
          {i !== array.length - 1 && <hr />}
        </SectionRevealer>
      ))}
    </div>
  );
}
