import React from "react";

const SectionTitle = ({ heading, subheading }) => {
  return (
    <div>
      <div className="text-center my-8 max-w-md mx-auto">
        <p className="text-yellow-600 italic mb-2">{subheading}</p>
        <div className="border-b border-gray-300 mb-4"></div>
        <h2 className="text-3xl font-semibold text-black mb-4">{heading}</h2>
        <div className="border-b border-gray-300"></div>
      </div>
    </div>
  );
};

export default SectionTitle;
