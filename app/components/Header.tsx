import NavLinks from "./Navlinks"

export default function Header(){
  return(
    <header className="flex flex-col md:flex-row md:justify-between">
      <div className="p-3">
        <p className="italic">motivation.co</p>
      </div>
      <div className="bg-white flex items-center justify-center md:flex-row md:pr-3 md:align-middle">
        <NavLinks />
      </div>
    </header>
  )
}