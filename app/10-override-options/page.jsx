import React from "react";

export default function page() {
  return (
    <>
      <div className="flex flex-col laptop:flex-row desktop:flex-col">
        <div className="bg-red-200">Test 1</div>
        <div className="bg-red-200">Test 2</div>
      </div>
    </>
  );
}
