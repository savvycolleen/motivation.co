import NavLinks from "./Navlinks"

export default function Header(){
  return(
    <header className="px-4 py-3">
      <nav className="flex flex-row gap-2 justify-between">
        <span>motivation.co</span>
        <NavLinks />
      </nav>
    </header>
  )
}