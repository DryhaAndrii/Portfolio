import Link from "next/link";
import "./links.scss";
import { ContactRound, FileText, FolderOpen } from "lucide-react";

export default function Links() {
  return (
    <div className="links">
      <div>
        <FileText /> <p>Resume</p>
      </div>
      <Link href="/#contacts" scroll={true}>
        <ContactRound /> Contacts
      </Link>
      <Link href="/#projects" scroll={true}>
        <FolderOpen /> Projects
      </Link>
    </div>
  );
}
