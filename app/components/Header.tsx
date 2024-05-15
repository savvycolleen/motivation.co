import NavLinks from "./Navlinks"

export default function Header(){

  return(
    <header className="flex flex-row md:justify-between">
      <div className="p-3">
        <p className="italic">M.Co</p>
      </div>
      <div className="md:invisible">
        <button
          className="toggle"
          >
        <svg viewBox="0 0 100 80" width="40" height="40">
          <rect width="100" height="20"></rect>
          <rect y="30" width="100" height="20"></rect>
          <rect y="60" width="100" height="20"></rect>
        </svg>
        </button>
      </div>

      <div className="bg-white invisble flex items-center justify-center md:flex-row md:pr-3 md:align-middle">
        <NavLinks />
      </div>
    </header>
  )
}