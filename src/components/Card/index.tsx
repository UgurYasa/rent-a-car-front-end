import React from "react";

const Card = ({ imageUrl, buttonText }: any) => {
  return (
    <div className="md:h-[570px] h-[400px] md:w-3/4 w-full px-2  relative mb-10 flex justify-center">
      <div
        className="h-full w-full bg-cover bg-center bg-no-repeat hover:scale-110  "
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <button className="absolute bottom-5 left-15 bg-orange-600 font-semibold text-white px-4 py-2  w-2/3">
        {buttonText}
      </button>
    </div>
  );
};

export default Card;
