import H1 from "@/components/h1";

export default function page() {
  return (
    <>
      <H1>Padding & Margin with Border and Hover</H1>
      <button className="text-white bg-red-400 p-2 m-5 border-2 border-red-700 rounded-3xl hover:bg-white hover:text-black">
        Click me
      </button>

      <button className="text-white bg-red-400 px-2 py-2 mt-5 ml-5 border-2 border-red-700 rounded-3xl hover:bg-white hover:text-black">
        Click me
      </button>
    </>
  );
}
