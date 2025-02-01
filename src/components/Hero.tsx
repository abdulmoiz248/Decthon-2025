import React from 'react'
import { TypingAnimation } from './ui/typing-animation'
import { TextAnimate } from './ui/text-animate'
import { InteractiveHoverButton } from './ui/interactive-hover-button'

export default function Hero() {
  return (
    <>
    <section className="bg-[#eaeaea98] dark:text-gray-800">
    
    <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
      <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
      <img
  src="/logo.png"
  alt="img"
  className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded-full shadow-lg"
/>
  
      </div>
      <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
        <h1 className="text-5xl font-bold leading-none sm:text-6xl"> <TypingAnimation>Decentral Consulting</TypingAnimation>  
        </h1>
        <p className="mt-6 mb-8 text-lg sm:mb-12">
        <TextAnimate by='character'>
        Empower your business with cutting-edge IT solution that drive efficiency and innovation. From cloud computing to automation, we help you stay ahead in a rapidly evolving digital world.
        </TextAnimate>
        </p>
        <div className=" text-xl flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
          <InteractiveHoverButton>Get a Free Consultation</InteractiveHoverButton>
        
        
        </div>
      </div>
    </div>
  </section>
    </>
  )
}