import ListRevealer from "../animations/listRevealer/listRevealer";
import SectionRevealer from "../animations/sectionRevealer/sectionRevealer";
import experienceData from "./experienceData.json";
import "./experience.scss";

export default function Experience() {
  return (
    <SectionRevealer classname="experience">
      <h2>Experience</h2>

      {experienceData.map((item) => (
        <div
          key={`${item.company}-${item.period}`}
          className="experience-item"
        >
          <div className="experience-item-header">
            <ListRevealer>
              <h3>{item.company}</h3>
              <p>{item.period}</p>
            </ListRevealer>
          </div>
          <span>{item.role}</span>
          <ul>
            <ListRevealer amount={0.1}>
              {item.bullets.map((text) => (
                <li key={text}>{text}</li>
              ))}
            </ListRevealer>
          </ul>
        </div>
      ))}
    </SectionRevealer>
  );
}
