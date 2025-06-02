import React from "react";

const Listcard = () => {
  return (
    <div className="w-64 rounded-lg p-4 shadow hover:shadow-md transition">
      <img
        src="https://www.apple.com/newsroom/images/product/watch/standard/Apple_watch-series7_hero_09142021_big.jpg.large_2x.jpg"
        alt="apple watch image"
        className="w-full h-40 object-contain rounded bg-white"
      />
      <h3 className="mt-2 font-semibold text-lg">Apple Watch Series 3</h3>
      <p className="text-gray-600">INR 26,999/-</p>
    </div>
  );
};

export default Listcard;
