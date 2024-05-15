import Image from "next/image"
import shapes from "../../public/shapes.svg"


export default function Hero(){
  return (
    <section>
      <div className="hero mt-3 h-[65vh] relative isolate">
          <Image 
            src= {shapes}
            alt="shapes background"
            width={750}
            height={500}
            className="h-[65vh] object-cover object-left-top absolute"
            />
          <h1 className="w-fit underline decoration-blue text-5xl
            decoration-wavy underline-offset-8 decoration-10 z-10 absolute ms-[2rem] mt-[10rem]">
           motivation.co</h1>
      </div>      
    </section>
  )
}