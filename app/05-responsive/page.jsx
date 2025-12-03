import H1 from "../../components/h1";
import React from "react";

export default function page() {
  return (
    <>
      <H1>Responsive Class</H1>
      <div className="bg-gray-200 md:bg-green-300 lg:bg-red-500">
        <p className="text-lg">Background color changes on screen size</p>
      </div>
    </>
  );
}
