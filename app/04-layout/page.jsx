import H1 from "../../components/h1";
import React from "react";

export default function page() {
  return (
    <>
      <H1>Simple Layout</H1>
      <div className="container  border-2 border-red-400 mt-10 mx-auto rounded-lg">
        <h1 className="text-white pt-2 pl-4 text-xl">JVLcode Tailwindcss</h1>
        <p className="text-red-400 p-4 mb-3">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text.
        </p>
        <div className="flex justify-center">
          <button className="text-white transform translate-y-8 bg-red-400 p-2 border-2 border-red-700 rounded-3xl hover:bg-white hover:text-black my-3">
            Read More
          </button>
        </div>
      </div>
    </>
  );
}
