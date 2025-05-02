import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">
          TechFusion
        </Link>
      </div>
      <div className="flex-none gap-2">
        <Link href="/products" className="btn btn-ghost">
          Products
        </Link>
        <Link href="/services" className="btn btn-ghost">
          Services
        </Link>
      </div>
    </div>
  );
}
