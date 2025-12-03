import H1 from "@/components/h1";
export default function page() {
  return (
    <>
      <H1>Grid</H1>
      <div className="container grid grid-cols-1">
        <div className="bg-green-400">content-1</div>
        <div className="bg-green-400">content-2</div>
        <div className="bg-green-400">content-3</div>
        <div className="bg-green-400">content-4</div>
        <div className="bg-green-400">content-5</div>
        <div className="bg-green-400">content-6</div>
      </div>
      <br />
      <div className="container grid grid-cols-2">
        <div className="bg-green-400">content-1</div>
        <div className="bg-green-400">content-2</div>
        <div className="bg-green-400">content-3</div>
        <div className="bg-green-400">content-4</div>
        <div className="bg-green-400">content-5</div>
        <div className="bg-green-400">content-6</div>
      </div>
      <br />
      <div className="container grid grid-cols-3">
        <div className="bg-green-400">content-1</div>
        <div className="bg-green-400">content-2</div>
        <div className="bg-green-400">content-3</div>
        <div className="bg-green-400">content-4</div>
        <div className="bg-green-400">content-5</div>
        <div className="bg-green-400">content-6</div>
      </div>
      <H1>Gap</H1>
      <div className="container grid grid-cols-3 gap-2">
        <div className="bg-green-400">content-1</div>
        <div className="bg-green-400">content-2</div>
        <div className="bg-green-400">content-3</div>
        <div className="bg-green-400">content-4</div>
        <div className="bg-green-400">content-5</div>
        <div className="bg-green-400">content-6</div>
      </div>
      <H1>Place items</H1>
      <div className="grid h-48  grid-cols-3 gap-2 place-items-center bg-green-200">
        <div className="bg-red-300 p-2">01</div>
        <div className="bg-red-300 p-2">02</div>
        <div className="bg-red-300 p-2">03</div>
        <div className="bg-red-300 p-2">04</div>
        <div className="bg-red-300 p-2">05</div>
        <div className="bg-red-300 p-2">06</div>
      </div>
      <H1>Place content</H1>
      <div className="mt-5 h-48 grid  grid-cols-2 gap-2 place-content-around bg-red-200">
        <div className="bg-blue-300 p-2">01</div>
        <div className="bg-blue-300 p-2">02</div>
        <div className="bg-blue-300 p-2">03</div>
        <div className="bg-blue-300 p-2">04</div>
        <div className="bg-blue-300 p-2">05</div>
        <div className="bg-blue-300 p-2">06</div>
      </div>
      <div className="mt-5 h-48 grid  grid-cols-2 gap-2 place-content-center place-items-center bg-red-200">
        <div className="bg-blue-300 p-2">01</div>
        <div className="bg-blue-300 p-2">02</div>
        <div className="bg-blue-300 p-2">03</div>
        <div className="bg-blue-300 p-2">04</div>
        <div className="bg-blue-300 p-2">05</div>
        <div className="bg-blue-300 p-2">06</div>
      </div>

      <H1>Complex Layout </H1>
      <div className="grid grid-cols-3 gap-2">
        <div className="col-span-2 bg-blue-300 p-2">01</div>
        <div className="bg-blue-300 p-2">02</div>
        <div className="row-span-2 bg-blue-300 p-2">03</div>
        <div className="bg-blue-300 p-2">04</div>
        <div className="bg-blue-300 p-2">05</div>
        <div className="row-span-2 bg-blue-300 p-2">06</div>
      </div>
    </>
  );
}
