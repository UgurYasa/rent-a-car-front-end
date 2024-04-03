import React from "react";

export default function Breadcumbs({ routes }: any) {
  var route = "";
  routes.map((item: any, index: number) => {
    if (index < routes.length - 1) {
      route += item + " > ";
    }
  });

  return (
    <div className="container text-base my-2">
      {route}{" "}
      <span className="text-[#ed5505]">{routes[routes.length - 1]}</span>
    </div>
  );
}
