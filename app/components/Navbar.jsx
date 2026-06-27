'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/search', label: 'Search' },
    { href: '/about', label: 'About' },
  ];

  return (
    <nav className="bg-zinc-900 text-white px-6 py-4 shadow-md">
      <div className="max-w-4xl mx-auto flex items-center gap-8">
        {/* Loqo + icon */}
        <div className="flex items-center gap-2">
          <Image
            src="/icon.png"        // public/icon.png
            alt="Logo"
            width={32}
            height={32}
            className="rounded"
          />
          <span className="font-bold text-xl">⛏️ MC Search</span>
        </div>
        <div className="flex gap-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`hover:text-emerald-400 transition ${
                pathname === href ? 'text-emerald-400 font-semibold' : ''
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}