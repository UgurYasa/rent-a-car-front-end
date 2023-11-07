import React from "react";

const Card = ({ imageUrl, buttonText }: any) => {
  return (
    <div className="h-[570px] w-[500px] relative mb-10 flex justify-center">
      <div
        className="h-full w-full bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <button className="absolute bottom-5 left-15 bg-orange-600 font-semibold text-white px-4 py-2  w-2/3">
        {buttonText}
      </button>
    </div>
  );
};

export default Card;
