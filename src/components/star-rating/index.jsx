import { useState, useEffect } from "react";
import "./styles.css";

function StarRating({ numberOfStarts = 5 }) {
  const [hover, setHover] = useState(0);
  const [rating, setRating] = useState(-1);
  const [mouseLeft, setMouseLeft] = useState(false);

  const handleMouseClicked = (index) => {
    setRating(index);
  };
  const handleMouseEnter = (index) => {
    setHover(index);
    setMouseLeft(false);
  };
  const handleMouseLeave = () => {
    setHover(rating);
    setMouseLeft(true);
  };

  useEffect(() => {
    if (rating === -1) setRating(0);
    else handleMouseLeave();
  }, [rating]);

  return (
    <div className="sr-app">
      <div className="sr-title">Star Rating</div>
      <div className="stars-container">
        {[...Array(numberOfStarts)].map((_, index) => {
          index += 1;
          return (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              className="sr-icon"
            >
              <path
                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                className={index <= (hover || rating) ? "active" : "inactive"}
                onClick={() => handleMouseClicked(index)}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave()}
              />
            </svg>
          );
        })}
      </div>
      <div className="sr-details">
        <p className="sr-text">
          Rate: <span>{mouseLeft ? rating : hover}</span> stars
        </p>
        <button
          onClick={() => {
            setRating(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default StarRating;
