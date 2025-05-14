"use client";

import Marquee from "react-fast-marquee";
import { technologies } from "../technologies.data";
import TechnologyCard from "../technologyCard/technologyCard";

export default function Carousel() {
  return (
    <Marquee gradient={false} speed={100} pauseOnHover={true}>
      {technologies.map((item, i) => (
        <TechnologyCard item={item} key={i} index={i} />
      ))}
    </Marquee>
  );
}
