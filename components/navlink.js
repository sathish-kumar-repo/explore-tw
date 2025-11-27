import Link from "next/link";

export default function Navlink({ children }) {
  const href = String(children);
  return (
    <Link
      href={href}
      className="block underline text-xl tracking-wide text-indigo-300"
    >
      {children}
    </Link>
  );
}
