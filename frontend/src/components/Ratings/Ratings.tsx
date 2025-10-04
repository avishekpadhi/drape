import React from "react";
import { Product } from "../../types";

type RatingsProps = {
  rating: Product["rating"];
};

const Ratings = ({ rating }: RatingsProps) => {
  return (
    <div className="flex gap-3 bg-background p-2 rounded-lg shadow-sm w-fit">
      {/* Rating value */}
      <div className="flex items-center gap-1 px-3 py-1  rounded-md font-semibold text-foreground">
        <span>{rating.rate.toFixed(1)}</span>
        <span className="text-yellow-500 text-sm">★</span>
      </div>

      {/* Ratings count */}
      <div className="px-3 py-1 bg-muted rounded-md text-foreground font-medium">
        {rating.count} Ratings
      </div>
    </div>
  );
};

export default Ratings;
