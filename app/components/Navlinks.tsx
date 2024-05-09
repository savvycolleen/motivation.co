'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
 
export default function NavLinks() {
  const pathname = usePathname()
 
  return (
    <ul className='w-1/2 md:w-full text-center md:flex'>
      <li>
        <Link className={`link ${pathname === '/' ? 'bg-pink' : ''} bg-black text-white hover:bg-yellow hover:text-black block py-3 px-5`} href="/">
        Home</Link>
      </li>
      <li>
        <Link className={`link ${pathname === '/explore' ? 'bg-pink' : ''} bg-black text-white hover:bg-yellow hover:text-black block py-3 px-5`}
        href="/explore">Explore</Link>      
      </li>
      <li>
        <Link className={`link ${pathname === '/about' ? 'bg-pink' : ''} bg-black text-white hover:bg-yellow hover:text-black block py-3 px-5`}
        href="/about">About</Link>
      </li>
    </ul>
  )
}