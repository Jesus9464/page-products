export const renderStars = (rating: number) => {
  const stars = Array.from({ length: 5 }, (_, index) => {
    const starValue = index + 1;
    const isFilled = starValue <= Math.floor(rating);
    const isHalfFilled = starValue === Math.ceil(rating) && rating % 1 >= 0.5;

    if (isFilled) {
      return (
        <span key={index} className="text-yellow-500 font-bold">
          &#9733;
        </span>
      );
    }

    if (isHalfFilled) {
      return (
        <span key={index} className="text-yellow-500 font-bold">
          &#9733;&#9734;
        </span>
      );
    }

    return (
      <span key={index} className="text-gray-500 font-bold">
        &#9734;
      </span>
    );
  });

  return stars;
};
