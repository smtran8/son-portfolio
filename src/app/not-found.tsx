import Link from "next/link";

export default function NotFound() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Page not found</h1>
      <p className="text-gray-700">Sorry, we couldn’t find that page.</p>
      <Link href="/" className="btn">Go Home</Link>
    </div>
  );
}


