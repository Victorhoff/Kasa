import React from "react";

const Stars = ({ rating }) => {
  const ratingScale = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {ratingScale.map((star) =>
        rating >= star ? (
          <img
            key={ratingScale.toString()}
            className="rating__icon"
            src={"/img/redstar.png"}
            alt="étoile rouge"
          />
        ) : (
          <img
            key={ratingScale.toString()}
            className="rating__icon"
            src={"/img/greystar.png"}
            alt="étoile grise"
          />
        )
      )}
    </div>
  );
};

export default Stars;
