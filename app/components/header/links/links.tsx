import Link from "next/link";
import "./links.scss";

export default function Links() {
  return (
    <div className="links">
      <Link href="/#projects" scroll={true}>
        Projects
      </Link>
      <div>
        <p>Resume</p>
      </div>
      <Link href="/#contacts" scroll={true}>
        Contacts
      </Link>
    </div>
  );
}
