import H1 from "../../components/h1";
import React from "react";

export default function page() {
  return (
    <>
      <H1>Colors</H1>
      <div className="h-8 bg-green-50"></div>
      <div className="h-8 bg-green-100"></div>
      <div className="h-8 bg-green-200"></div>
      <div className="h-8 bg-green-300"></div>
      <div className="h-8 bg-green-400"></div>
      <div className="h-8 bg-green-500"></div>
      <div className="h-8 bg-green-600"></div>
      <div className="h-8 bg-green-700"></div>
      <div className="h-8 bg-green-800"></div>
      <div className="h-8 bg-green-900"></div>
      <div className="h-8 bg-green-950"></div>

      <H1>Custom Colors and adding Opacity</H1>
      <p className="text-[#50d71e] ...">Lorem ipsum dolor sit amet...</p>
      <p className="text-(--my-color) ...">Lorem ipsum dolor sit amet...</p>

      <p className="text-sathish-blue">Lorem ipsum dolor sit amet...</p>
      <p className="text-sathish-blue/50">Lorem ipsum dolor sit amet...</p>
    </>
  );
}
