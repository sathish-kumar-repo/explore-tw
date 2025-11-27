import Link from "next/link";

export default function Navlink({ children }) {
  const href = String(children);
  return (
    <Link
      href={href}
      className="flex justify-between text-indigo-300 hover:bg-indigo-300 hover:text-white transition duration-200 ease-in-out px-2 py-1 rounded"
    >
      <h3 className="text-xl tracking-wide">{children}</h3>
      <span className="text-slate-300">{`>`}</span>
    </Link>
  );
}
