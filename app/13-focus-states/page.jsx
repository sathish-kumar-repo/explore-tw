import React from "react";

export default function page() {
  return (
    <>
      <input
        type="text"
        className="border focus:outline-none"
        placeholder="Enter text"
      />
      <input
        type="text"
        className="border focus:ring-4 focus:ring-blue-500"
        placeholder="Enter text2"
      />
    </>
  );
}
