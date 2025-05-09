import "./button.scss";

interface ButtonProps {
  variant: "1" | "2" | "3" | "4";
  children: React.ReactNode;
}

export default function Button({ variant, children }: ButtonProps) {
  return <button className={`button variant-${variant}`}>{children}</button>;
}
