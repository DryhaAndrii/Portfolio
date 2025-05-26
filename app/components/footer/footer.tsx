import Link from "next/link";
import AnchorLinks from "../anchorLinks/anchorLinks";
import Icons from "@/app/components/icons/icons";
import "./footer.scss";
import SectionRevealer from "../animations/sectionRevealer/sectionRevealer";

export default function Footer() {
  return (
    <SectionRevealer left>
      <footer>
        <div className="top">
          <AnchorLinks />
        </div>

        <hr />
        <div className="bot">
          <div className="copyright">
            <p>© {new Date().getFullYear()} Dryha Andrii.</p>
            <p>All rights reserved.</p>
          </div>

          <div className="socials">
            <Link
              href={"mailto:driga.and@gmail.com"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons name="email" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/andriy-dryha-2362442b7/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons name="linkedin" />
            </Link>
            <Link
              href="https://t.me/Dryha_Andrii"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons name="telegram" />
            </Link>
            <Link
              href="https://github.com/DryhaAndrii"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons name="github" />
            </Link>
          </div>
        </div>
      </footer>
    </SectionRevealer>
  );
}
