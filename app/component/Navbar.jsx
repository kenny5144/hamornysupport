import Link from 'next/link';
import React from 'react'

const Navbar = () => {
    const links = [
        { text: 'Home', href: '/' },
        { text: 'About', href: '#about' },
        { text: 'Services', href: '#services' },
        { text: 'Contact', href: '#contact' },
      ];
  return (
<header className="fixed w-full bg-white shadow-sm z-50">
  <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
    <a href="/" className="text-2xl font-bold text-primary">Harmony Support</a>
    <ul className="flex gap-8">
      {links.map(link => (
        <li>
          <Link href={link.href} className="text-gray-600 hover:text-primary transition-colors">
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
</header>
  )
}

export default Navbar