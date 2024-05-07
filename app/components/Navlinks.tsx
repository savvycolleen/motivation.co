'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
 
export default function NavLinks() {
  const pathname = usePathname()
 
  return (
    <nav>
      <ul className="flex flex-row gap-5">
        <li>
          <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
          Home</Link>
        </li>
        <li>
          <Link className={`link ${pathname === '/explore' ? 'active' : ''}`}
          href="/explore">Explore</Link>
        </li>
        <li>
          <Link className={`link ${pathname === '/about' ? 'active' : ''}`}
          href="/about">About</Link>
        </li>
      </ul>

    </nav>
  )
}