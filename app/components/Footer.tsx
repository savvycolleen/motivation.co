import Link from "next/link"

export default function Footer(){
  return (
    <>
      <footer className="block">
        <div className="p-9 space-y-3">
        <h3 className="">Many Thanks</h3>
        <p>I hope you feel a bit more joy and a bit more motivated. Is there something else you would like to see? Let me know!</p>
        <Link href="#">Contact</Link>
        </div>

      </footer>
    </>

  )
  
}