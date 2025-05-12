import {
  Github,
  Linkedin,
  Send as Telegram,
  Mail as Email,
} from "lucide-react";

import "./icons.scss";

export interface IconProps {
  name: "github" | "linkedin" | "telegram" | "email";
  size?: number|string;
}

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  telegram: Telegram,
  email: Email,
};

export default function Icons({ name, size = "2rem" }: IconProps) {
  const IconComponent = iconMap[name];

  if (!IconComponent) return null;

  return <IconComponent size={size} />;
}
