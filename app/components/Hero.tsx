import Image from "next/image"
import hero from "../../public/hero.png"


export default function Hero(){
  return (
    <div className="container w-100%">
      <div>
        <Image 
        alt="hero design"
        src={hero}
        />
      </div>
      <div className="overflow-visible">
        <h1 className="
        text-8xl underline decoration-pink 
        decoration-wavy underline-offset-8 decoration-10">
        motivation.co</h1>
      </div>
      
    </div>
    
  )
}