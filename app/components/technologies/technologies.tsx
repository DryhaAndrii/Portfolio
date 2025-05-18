"use client";

import "./technologies.scss";
import Carousel from "./carousel/carousel";
import ListRevealer from "../animations/listRevealer/listRevealer";
import SectionRevealer from "../animations/sectionRevealer/sectionRevealer";
import { stack } from "./stack.data";

export default function Technologies() {
  return (
    <div className="technologies" id="technologies">
      <h2>My Tech Steck</h2>
      <SectionRevealer>
        {stack.map((item, i) => (
          <div className="item" key={i}>
            <ListRevealer>
              <h3>{item.title}</h3>
              <ul>
                {item.stack.map((stackItem, i) => (
                  <li key={i}>{stackItem}</li>
                ))}
              </ul>
            </ListRevealer>
          </div>
        ))}
        <Carousel />
      </SectionRevealer>
    </div>
  );
}
