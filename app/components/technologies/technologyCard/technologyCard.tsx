import { useState } from "react";
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

  function handleClick() {
    setFlip(!flip);
  }
  
  return (
    <div
      className={`technologyCard variant-${(i % 4) + 1} ${flip ? "flip" : ""}`}
      key={i}
      onClick={handleClick}
    >
      <img src={item.svg} alt={item.title} />
      <div className="title">{item.title}</div>
    </div>
  );
}