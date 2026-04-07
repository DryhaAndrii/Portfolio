import {
  Github,
  Linkedin,
  Send as Telegram,
  Mail as Email,
  Hamburger,
  X,
  Pencil,
} from "lucide-react";

import "./icons.scss";

export const iconNames = [
  "github",
  "linkedin",
  "telegram",
  "email",
  "hamburger",
  "close",
  "pencil",
] as const;

export type IconName = (typeof iconNames)[number];

export interface IconProps {
  name: IconName;
  size?: number | string;
}

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  telegram: Telegram,
  email: Email,
  hamburger: Hamburger,
  close: X,
  pencil: Pencil,
};

export default function Icons({ name, size = "2rem" }: IconProps) {
  const IconComponent = iconMap[name];

  if (!IconComponent) return null;

  return <IconComponent size={size} />;
}
