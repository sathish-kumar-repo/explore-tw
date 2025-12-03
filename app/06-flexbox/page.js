import H1 from "@/components/h1";
import React from "react";

export default function page() {
  return (
    <>
      <H1>flex-row</H1>

      <div className="container flex flex-row">
        <div className="bg-green-400">Content 1</div>
        <div className="bg-green-400">Content 2</div>
        <div className="bg-green-400">Content 3</div>
      </div>

      <H1>flex-col</H1>

      <div className="container flex flex-col">
        <div className="bg-green-400">Content 1</div>
        <div className="bg-green-400">Content 2</div>
        <div className="bg-green-400">Content 3</div>
      </div>

      <H1>Responsive (flex-col md:flex-row)</H1>

      <div className="container flex flex-col md:flex-row">
        <div className="bg-green-400">Content 1</div>
        <div className="bg-green-400">Content 2</div>
        <div className="bg-green-400">Content 3</div>
      </div>

      <H1>justify content</H1>

      <div className="container flex flex-row justify-start">
        <div className="bg-green-400">Content 1</div>
        <div className="bg-green-400">Content 2</div>
        <div className="bg-green-400">Content 3</div>
      </div>
      <div className="container flex flex-row justify-center">
        <div className="bg-green-400">Content 1</div>
        <div className="bg-green-400">Content 2</div>
        <div className="bg-green-400">Content 3</div>
      </div>
      <div className="container flex flex-row justify-end">
        <div className="bg-green-400">Content 1</div>
        <div className="bg-green-400">Content 2</div>
        <div className="bg-green-400">Content 3</div>
      </div>
      <div className="container flex flex-row justify-between">
        <div className="bg-green-400">Content 1</div>
        <div className="bg-green-400">Content 2</div>
        <div className="bg-green-400">Content 3</div>
      </div>
      <div className="container flex flex-row justify-around">
        <div className="bg-green-400">Content 1</div>
        <div className="bg-green-400">Content 2</div>
        <div className="bg-green-400">Content 3</div>
      </div>
      <div className="container flex flex-row justify-evenly">
        <div className="bg-green-400">Content 1</div>
        <div className="bg-green-400">Content 2</div>
        <div className="bg-green-400">Content 3</div>
      </div>

      <H1>align items</H1>
      <div className="container flex flex-col items-start">
        <div className="bg-green-400">Content 1</div>
        <div className="bg-green-400">Content 2</div>
        <div className="bg-green-400">Content 3</div>
      </div>
      <div className="container flex flex-col items-center">
        <div className="bg-green-400">Content 1</div>
        <div className="bg-green-400">Content 2</div>
        <div className="bg-green-400">Content 3</div>
      </div>
      <div className="container flex flex-col items-end">
        <div className="bg-green-400">Content 1</div>
        <div className="bg-green-400">Content 2</div>
        <div className="bg-green-400">Content 3</div>
      </div>
      <div className="container flex flex-col items-baseline">
        <div className="bg-green-400">Content 1</div>
        <div className="bg-green-400">Content 2</div>
        <div className="bg-green-400">Content 3</div>
      </div>
      <div className="container flex flex-col items-stretch">
        <div className="bg-green-400">Content 1</div>
        <div className="bg-green-400">Content 2</div>
        <div className="bg-green-400">Content 3</div>
      </div>

      <H1>flex grow</H1>
      <div className="container flex">
        <div className="border border-black bg-green-400 grow">Content 1</div>
        <div className="border border-black bg-green-400">Content 2</div>
        <div className="border border-black bg-green-400">Content 3</div>
      </div>
      <div className="container flex">
        <div className="border border-black bg-green-400 grow">Content 1</div>
        <div className="border border-black bg-green-400 grow">Content 2</div>
        <div className="border border-black bg-green-400">Content 3</div>
      </div>
      <div className="container flex">
        <div className="border border-black bg-green-400 grow">Content 1</div>
        <div className="border border-black bg-green-400 grow">Content 2</div>
        <div className="border border-black bg-green-400 grow">Content 3</div>
      </div>

      <div className="container flex">
        <div className="border border-black bg-green-400 grow-0">Content 1</div>
        <div className="border border-black bg-green-400 grow">Content 2</div>
        <div className="border border-black bg-green-400 grow">Content 3</div>
      </div>

      <H1>flex (short hand property)</H1>
      <div className="container flex">
        <div className="border border-black bg-green-400 flex-1">Content 1</div>
        <div className="border border-black bg-green-400 ">Content 2</div>
        <div className="border border-black bg-green-400 ">Content 3</div>
      </div>

      <H1>Shrink</H1>
      <div className="container flex">
        <div className="w-30 border border-black bg-green-400">Content 1</div>
        <div className="w-30 border border-black bg-green-400">Content 2</div>
        <div className="w-30 border border-black bg-green-400 shrink-4">
          Content 3
        </div>
        <div className="w-30 border border-black bg-green-400">Content 3</div>
        <div className="w-30 border border-black bg-green-400">Content 3</div>
        <div className="w-30 border border-black bg-green-400">Content 3</div>
        <div className="w-30 border border-black bg-green-400">Content 3</div>
        <div className="w-30 border border-black bg-green-400">Content 3</div>
        <div className="w-30 border border-black bg-green-400">Content 3</div>
      </div>
    </>
  );
}
