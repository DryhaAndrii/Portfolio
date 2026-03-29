import { useCallback, useState, type MouseEvent } from "react";
import "./technologyCard.scss";

interface Props {
  index: number;
  item: {
    svg: string;
    title: string;
  };
}

export default function TechnologyCard({ index: i, item }: Props) {
  const [flip, setFlip] = useState(false);

  const handleClick = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setFlip((prev) => !prev);
  }, []);

  return (
    <button
      type="button"
      className={`technologyCard variant-${(i % 4) + 1} ${flip ? "flip" : ""}`}
      onClick={handleClick}
      aria-pressed={flip}
      aria-label={`${item.title}. Click to ${flip ? "show icon" : "show name"}.`}
    >
      <span className="technologyCard-face technologyCard-face--front">
        <img src={item.svg} alt="" aria-hidden />
      </span>
      <span className="technologyCard-face technologyCard-face--back">
        {item.title}
      </span>
    </button>
  );
}
