import ListRevealer from "../animations/listRevealer/listRevealer";
import SectionRevealer from "../animations/sectionRevealer/sectionRevealer";
import "./experience.scss";

export default function Experience() {
  return (
      <SectionRevealer classname="experience">
        <h2>Experience</h2>

        <div className="experience-item">
          <div className="experience-item-header">
            <ListRevealer>
              <h3>Fernir (Remote)</h3>
              <p>Aug 2024 - Feb 2025</p>
            </ListRevealer>
          </div>
          <span>Full-stack developer</span>
          <ul>
            <ListRevealer>
              <li>Development of functional web applications </li>
              <li>Improving and maintaining existing websites</li>
              <li>Testing and debugging of the code</li>
              <li>Integration of web applications with databases</li>
              <li>Development of user interfaces</li>
              <li>Development of responsive websites for different devices</li>
              <li>
                Participation in meetings with the development team and
                management
              </li>
            </ListRevealer>
          </ul>
        </div>
      </SectionRevealer>
  );
}
