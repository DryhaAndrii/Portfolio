import FadeInner from "@/app/components/animations/fadeInner/fadeInner";
import "./header.scss";
import Links from "./links/links";

export default function Header() {
  return (
    <header>
      <FadeInner>
        <h1>DA.</h1>
        <Links />
      </FadeInner>
    </header>
  );
}
