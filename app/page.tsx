import "@/app/page.scss";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Contacts from "./components/contacts/contacts";

export default function Home() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <Contacts />
    </div>
  );
}
