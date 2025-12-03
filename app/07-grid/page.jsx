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
    </>
  );
}
