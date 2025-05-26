import "./button.scss";

interface ButtonProps {
  variant: "1" | "2" | "3" | "4";
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ variant, children, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className={`button variant-${variant}`}>
      {children}
    </button>
  );
}

