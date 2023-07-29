import React from "react";
import PropTypes from "prop-types";

type Props = {
  handlePrevius: () => void;
  isDisabledPrev: boolean;
  currentPage: string | number;
  totalPages: string | number | null;
  handleNext: () => void;
  isDisabledNext: boolean;
};

const Pagination: React.FC<Props> = ({
  handlePrevius,
  isDisabledPrev,
  currentPage,
  totalPages,
  handleNext,
  isDisabledNext,
}) => {
  return (
    <div className="my-4 flex">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2"
        onClick={handlePrevius}
        disabled={isDisabledPrev}
      >
        Previous
      </button>
      <div className="flex">
        <p className="px-4 py-2 rounded-md mx-1  text-gray-700">
          {currentPage}/{totalPages}
        </p>
      </div>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
        onClick={handleNext}
        disabled={isDisabledNext}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
