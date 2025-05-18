import Link from "next/link";
import AnchorLinks from "../anchorLinks/anchorLinks";
import Icons from "@/app/components/icons/icons";
import "./footer.scss";
import SectionRevealer from "../animations/sectionRevealer/sectionRevealer";

export default function Footer() {
  return (
    <SectionRevealer left>
      <footer>
        <AnchorLinks />
        <hr />
        <div className="bot">
          <p>© {new Date().getFullYear()} Dryha Andrii. All rights reserved.</p>
          <div className="socials">
            <Link href={"mailto:driga.and@gmail.com"}>
              <Icons name="email" />
            </Link>
            <Link href="https://www.linkedin.com/in/andriy-dryha-2362442b7/">
              <Icons name="linkedin" />
            </Link>
            <Link href="https://t.me/Dryha_Andrii">
              <Icons name="telegram" />
            </Link>
            <Link href="https://github.com/DryhaAndrii">
              <Icons name="github" />
            </Link>
          </div>
        </div>
      </footer>
    </SectionRevealer>
  );
}
