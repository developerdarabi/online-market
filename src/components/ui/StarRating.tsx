// src/components/StarRating.js
import { useState } from 'react';
import { HiMiniStar } from "react-icons/hi2";

interface Props {
  rating: number,
  count?: number,
  onRatingChange?: (rate: number) => {},
  readOnly?: boolean
}

const StarRating = ({ rating, count, onRatingChange, readOnly = false }: Props) => {
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);

  const handleMouseEnter = (value: number) => {
    if (!readOnly) {
      setHoveredStar(value);
    }
  };

  const handleMouseLeave = () => {
    if (!readOnly) {
      setHoveredStar(null);
    }
  };

  const handleClick = (value: number) => {
    if (!readOnly) {
      onRatingChange?.(value);
    }
  };

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => {
      const value = index + 1;
      const isFilled = hoveredStar ? value <= hoveredStar : value <= rating;
      const starClass = `cursor-pointer transition duration-200 ${isFilled ? 'text-yellow-400' : 'text-gray-400'
        }`;

      return (
        <span
          key={index}
          className={readOnly ? 'text-yellow-400' : starClass}
          onMouseEnter={() => handleMouseEnter(value)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(value)}
        >
          <HiMiniStar size={15} className={readOnly ? 'text-yellow-400' : starClass} />
        </span>
      );
    });
  };

  return (
    <div className="flex text-xs" >
      {renderStars()}
      <span className="ms-2 text-gray-700">{rating.toFixed(1)}{count?`/${count}`:null}</span>
    </div>
  );
};

export default StarRating;
