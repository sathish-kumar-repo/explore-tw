import NavLink from "@/components/navlink";

export default function Home() {
  return (
    <div className="bg-black text-white w-full h-screen">
      <div className="flex flex-col-reverse gap-5 items-start p-10">
        <NavLink>01-typography</NavLink>
        <NavLink>02-colors</NavLink>
        <NavLink>03-spacing</NavLink>
        <NavLink>04-layout</NavLink>
        <NavLink>05-responsive</NavLink>
        <NavLink>06-flexbox</NavLink>
        <NavLink></NavLink>
      </div>

      {/* Flexbox */}
      <div className="container flex flex-row ">
        <div className="bg-green-400 flex-1">Content 1</div>
        <div className="bg-green-400 flex-1">Content 2</div>
        <div className="bg-green-400 flex-1">Content 3</div>
      </div>
    </div>
  );
}
