import Link from "next/link";

export function Nav() {
  return (
    <nav className="flex items-center justify-between py-6">
      <Link href="/" className="font-semibold tracking-tight text-gray-900">Son Tran</Link>
      <div className="flex items-center gap-5 text-sm">
        <Link href="/projects">Projects</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}


