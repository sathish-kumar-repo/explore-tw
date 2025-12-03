import H1 from "../../components/h1";
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

      <H1>font weight</H1>
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

      <p className="leading-tight">
        Lorem Ipsum has been the standard dummy text ever since the 1500s, when
        an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the
        leap into electronic typesetting, remaining essentially unchanged. It
        was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.
      </p>
      <p className="leading-loose">
        Lorem Ipsum has been the standard dummy text ever since the 1500s, when
        an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the
        leap into electronic typesetting, remaining essentially unchanged. It
        was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.
      </p>
      <p className="leading-none">
        Lorem Ipsum has been the standard dummy text ever since the 1500s, when
        an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the
        leap into electronic typesetting, remaining essentially unchanged. It
        was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.
      </p>
      <p className="leading-normal">
        Lorem Ipsum has been the standard dummy text ever since the 1500s, when
        an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the
        leap into electronic typesetting, remaining essentially unchanged. It
        was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.
      </p>
      <p className="leading-[10]">
        Lorem Ipsum has been the standard dummy text ever since the 1500s, when
        an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the
        leap into electronic typesetting, remaining essentially unchanged. It
        was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.
      </p>

      <H1>Tracking (letter spacing)</H1>
      <h1 className="text-3xl tracking-wide">Welcome to our site</h1>
      <h1 className="text-3xl tracking-tight">Welcome to our site</h1>
      <h1 className="text-3xl tracking-tighter">Welcome to our site</h1>
      <h1 className="text-3xl tracking-normal">Welcome to our site</h1>
      <h1 className="text-3xl tracking-widest">Welcome to our site</h1>
      <h1 className="text-3xl tracking-[1.5]">Welcome to our site</h1>

      <H1>Text Alignmenet</H1>
      <p className="text-right">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
        explicabo.
      </p>
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
        explicabo.
      </p>
      <p className="text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
        explicabo.
      </p>

      <H1>Truncate</H1>
      <div className="w-64 truncate">
        This is a very log sentence that will be truncated with an ellipsis
      </div>

      <H1>Line Clamp</H1>
      <div className="line-clamp-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
        reiciendis in modi quos enim dignissimos saepe corporis. Veniam, modi
        suscipit libero consequatur esse provident quas et earum tenetur fugiat
        aut!
      </div>

      <H1>Whitespace nowrap</H1>
      <p className="whitespace-nowrap">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod recusandae
        cumque vero quisquam suscipit ipsa cum architecto nostrum, vel quos
        necessitatibus, quidem laudantium cupiditate libero omnis voluptate
        enim, eius ex?
      </p>
    </>
  );
}
