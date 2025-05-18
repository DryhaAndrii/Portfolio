'use client'

import Link from "next/link";
import "./anchorLinks.scss";
import { ContactRound, FileText, FolderOpen, Wrench } from "lucide-react";

export default function AnchorLinks() {
  function downloadResume() {
    const link = document.createElement("a");
    link.href = `${window.location.pathname.replace(/\/$/, "")}/CV.pdf`; 
    link.download = "DryhaAndriiCV.pdf";
    link.click();
  }

  return (
    <div className="anchorLinks">
      <div onClick={downloadResume}>
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
