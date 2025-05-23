import React from "react";
import Icon from "../../atoms/Icon/Icon";
import Text from "../../atoms/Text/Text";

const StarRating = ({ rating, reviews, showReviews = true }) => {
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);

    for (let i = 0; i < 5; i++) {
      stars.push(
        <Icon
          key={i}
          name="star"
          color={i < fullStars ? "success" : "default"}
          size="small"
        />
      );
    }
    return stars;
  };

  return (
    <div className="flex items-center space-x-1">
      <div className="flex">{renderStars()}</div>
      {showReviews && (
        <Text variant="small" color="muted">
          ({reviews})
        </Text>
      )}
    </div>
  );
};

export default StarRating;
