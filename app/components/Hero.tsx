import Image from "next/image"
import hero from "../../public/hero.png"


export default function Hero(){
  return (
    <section className="box-border h-52 block md:flex md:flex-row md:justify-center md:content-center">
      <div>
      <Image 
        alt="hero design"
        src={hero}
        sizes="100vw"
        style={{
          width: '100%',
          height: 'auto'
        }}
        />
      </div>
      <div className="place-self-end">
      <h1 className="
        text-8xl underline decoration-pink 
        decoration-wavy underline-offset-8 decoration-10">
        motivation.co</h1>
      </div>
      
    </section>
    
  )
}