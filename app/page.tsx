import "@/app/page.scss";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Contacts from "./components/contacts/contacts";
import Background from "./components/background/background";
import Experience from "./components/experience/experience";
import Projects from "./components/projects/projects";

export default function Home() {
  return (
    <div className="container">
      <Background />
      <Header />
      <Hero />
      <Contacts />
      <Experience />
      <hr />
      <Projects />
    </div>
  );
}
