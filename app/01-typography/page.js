import H1 from "@/components/h1";
import React from "react";

export default function page() {
  return (
    <>
      <H1>Font Family</H1>
      <p className="font-sans">This text uses sans-serif font family </p>
      <p className="font-serif">This text uses serif font family </p>
      <p className="font-mono">This text uses mono family </p>
      <p className="font-bebas">This text uses Bebas family </p>

      <H1> Size </H1>
      <p className="text-xs">Extra Small Text</p>
      <p className="text-sm">Small Text</p>
      <p className="text-base">Base Text</p>
      <p className="text-lg">Large Text</p>
      <p className="text-xl">Extra Large Text</p>

      <H1> Responsive </H1>
      <p className="text-base md:text-lg lg:text-2xl">Responsive Font size</p>

      <H1> Extra large sizes </H1>
      <p className="text-2xl">Extra Large Text 2</p>
      <p className="text-3xl">Extra Large Text 3</p>
      <p className="text-4xl">Extra Large Text 4</p>
      <p className="text-5xl">Extra Large Text 5</p>
      <p className="text-6xl">Extra Large Text 6</p>
      <p className="text-10xl">Extra Large Text 6</p>

      <H1>Other Font Class</H1>
      <h1 className="text-3xl font-bold">
        Sample <span className="font-thin">Title</span>{" "}
      </h1>

      <p>
        <span className="font-bold">Lorem Ipsum</span> is simply dummy text of
        the
        <span className="font-extrabold">
          printing and typesetting industry
        </span>
        .
      </p>

      <span className="leading-relaxed">
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book. It has survived not only five centuries, but
        also the leap into electronic typesetting, remaining essentially
        unchanged. It was popularised in the 1960s with the release of Letraset
        sheets containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.
      </span>

    </>
  );
}
