"use client";
import FadeInner from "@/app/components/animations/fadeInner/fadeInner";
import "./header.scss";
import AnchorLinks from "../anchorLinks/anchorLinks";
import HamburgerMenu from "../hamburgerMenu/hamburgerMenu";
import { useMediaQuery } from "react-responsive";
import ClientOnly from "../clientOnly/clientOnly";

export default function Header() {
  const isMobile = useMediaQuery({
    query: "(min-width: 720px)",
  });
  
  return (
    <header>
      <FadeInner>
        <h1>DA.</h1>
        <ClientOnly>
          {!isMobile ? (
            <HamburgerMenu>
              <AnchorLinks />
            </HamburgerMenu>
          ) : (
            <AnchorLinks />
          )}
        </ClientOnly>
      </FadeInner>
    </header>
  );
}