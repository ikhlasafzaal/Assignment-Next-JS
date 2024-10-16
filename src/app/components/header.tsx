import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-wider">
          <Link href="/">MyPortfolio</Link>
        </div>

        <ul className="hidden md:flex gap-8 text-lg">
          <li className="hover:text-gray-400 transition-colors">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-gray-400 transition-colors">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:text-gray-400 transition-colors">
            <Link href="/blogs">Blogs</Link>
          </li>
          <li className="hover:text-gray-400 transition-colors">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
