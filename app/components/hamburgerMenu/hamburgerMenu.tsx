"use client";
import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import "./hamburgerMenu.scss";
import Button from "../button/button";
import Icons from "@/app/components/icons/icons";

export default function HamburgerMenu({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node | null)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <Button onClick={toggleMenu} variant="1">
        <Icons name="hamburger" size={"1.5rem"}/>
      </Button>

      {createPortal(
        <div className={`hamburger-menu ${isOpen ? "open" : ""}`}>
          <div ref={menuRef} className="hamburger-menu__content">
            <Button onClick={toggleMenu} variant="2">
              <Icons name="close" size={"1.5rem"}/>
            </Button>
            {children}
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
