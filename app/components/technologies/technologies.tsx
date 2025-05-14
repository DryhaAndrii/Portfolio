"use client";

import Marquee from "react-fast-marquee";
import { technologies } from "./technologies.data";
import "./technologies.scss";
import TechnologyCard from "./technologyCard/technologyCard";

export default function Technologies() {
  

  return (
    <div className="technologies">
      <h2>Technologies</h2>
      <Marquee gradient={false} speed={100} pauseOnHover={true} >
        {technologies.map((item, i) => (
          <TechnologyCard item={item} key={i} index={i}/>
        ))}
      </Marquee>
    </div>
  );
}
