import React from "react";

const Loading = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <span className="sr-only">Loading...</span>
      <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="h-8 w-8 bg-black rounded-full animate-bounce"></div>
      {/* <img className="w-20 h-20 animate-spin" src="https://www.svgrepo.com/show/173880/loading-arrows.svg" alt="Loading icon"></img> */}
      {/* <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-orange-900"></div> */}
    </div>
  );
};

export default Loading;
