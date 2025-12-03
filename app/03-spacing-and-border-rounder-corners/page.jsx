import H1 from "../../components/h1";
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

      <div className="bg-blue-500 p-4 md:p-8 lg:p-12">
        this div has different sizes for mobile (p-4), medium (p-8) and large
        (p-12)
      </div>

      <H1>Negative margins</H1>
      <div className="-mt-4">This div move up</div>

      <H1>Spaces classes</H1>
      <div className="flex space-x-2">
        <div className="bg-green-500">Item-1</div>
        <div className="bg-green-500">Item-2</div>
        <div className="bg-green-500">Item-3</div>
      </div>
      <div className="flex flex-col space-y-2">
        <div className="bg-green-500">Item-1</div>
        <div className="bg-green-500">Item-2</div>
        <div className="bg-green-500">Item-3</div>
      </div>

      <button className="border-2 border-red-500 p-4 rounded-full">
        Button with border
      </button>

      <H1> Borders & Rounded corners</H1>
      <div className="border-t-2 border-b-2 border-blue-600 p-4">
        This div has top border and bottom border
      </div>
      <div className="border-10">This div has custom width</div>
      <div className="border-[1rem]">This div has custom width</div>
      <img
        src="https://picsum.photos/200"
        className="rounded-full"
        alt=""
      ></img>
    </>
  );
}
