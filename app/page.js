import NavLink from "@/components/navlink";

export default function Home() {
  return (
    <div className="bg-black text-white w-full h-screen p-10">
      <h1 className="text-5xl font-medium tracking-widest font-bebas mb-5">
        Tailwind Explore
      </h1>
      <div className="flex flex-col gap-2">
        <NavLink>01-typography</NavLink>
        <NavLink>02-colors</NavLink>
        <NavLink>03-spacing</NavLink>
        <NavLink>04-layout</NavLink>
        <NavLink>05-responsive</NavLink>
        <NavLink>06-flexbox</NavLink>
        <NavLink></NavLink>
      </div>
    </div>
  );
}
