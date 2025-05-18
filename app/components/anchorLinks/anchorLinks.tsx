import Link from "next/link";
import "./anchorLinks.scss";
import { ContactRound, FileText, FolderOpen, Wrench } from "lucide-react";

export default function AnchorLinks() {
  return (
    <div className="anchorLinks">
      <div>
        <FileText /> <p>Resume</p>
      </div>
      <Link href="#contacts" scroll={true}>
        <ContactRound /> Contacts
      </Link>
      <Link href="#projects" scroll={true}>
        <FolderOpen /> Projects
      </Link>
      <Link href="#technologies" scroll={true}>
        <Wrench /> Techs
      </Link>
    </div>
  );
}
