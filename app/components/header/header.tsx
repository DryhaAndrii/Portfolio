import FadeInner from "@/app/components/animations/fadeInner/fadeInner";
import "./header.scss";
import AnchorLinks from "../anchorLinks/anchorLinks";

export default function Header() {
  return (
    <header>
      <FadeInner>
        <h1>DA.</h1>
        <AnchorLinks />
      </FadeInner>
    </header>
  );
}
