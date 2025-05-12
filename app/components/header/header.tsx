"use client"; // если ты используешь Next.js 13+

import { motion } from "framer-motion";

import "./header.scss";
import Links from "./links/links";
import FadeInner from "../fadeInner/fadeInner";

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
