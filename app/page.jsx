import Navlink from "@/components/Navlink";

export default function Home() {
  return (
    <div className="bg-black text-white w-full min-h-screen p-10">
      <h1 className="text-5xl font-medium tracking-widest font-bebas mb-5">
        Tailwind Explore
      </h1>
      <div className="flex flex-col gap-2">
        <Navlink>01-typography</Navlink>
        <Navlink>02-colors</Navlink>
        <Navlink>03-spacing-and-border-rounder-corners</Navlink>
        <Navlink>04-layout</Navlink>
        <Navlink>05-responsive</Navlink>
        <Navlink>06-flexbox</Navlink>
        <Navlink>07-grid</Navlink>
        <Navlink>08-dark-mode</Navlink>
        <Navlink>09-extend-options</Navlink>
        <Navlink>10-override-options</Navlink>
        <Navlink>11-apply-directive</Navlink>
        <Navlink>12-shadow</Navlink>
        <Navlink>13-focus-states</Navlink>
      </div>
    </div>
  );
}
