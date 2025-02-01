'use client'
import React from 'react';
import { motion } from 'framer-motion';

import { useRef } from "react";
 
import {
  Confetti,
  type ConfettiRef,
} from "@/components/ui/confetti";
import { NumberTicker } from './ui/number-ticker';
const ClientSatisfaction = () => {
  
  const confettiRef = useRef<ConfettiRef>(null);
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-black md:shadow-xl">
     
    <section id="clients-satisfaction" className="bg-black text-white py-16 md:py-20">
        <Confetti
        ref={confettiRef}
        className="absolute left-0 top-0 z-0 size-full"
        onMouseEnter={() => {
          confettiRef.current?.fire({});
        }}
      />
      <div className="container mx-auto px-6 md:px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-lg">
            Our Clients' Satisfaction Speaks Volumes
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            We're driven by results, and our client success stories are a testament to our commitment to excellence.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex justify-center items-center gap-8 mb-12"
        >
          <div className="flex flex-col items-center text-center">
            <p className="text-4xl md:text-6xl font-extrabold text-[#1b03a3]">
             <NumberTicker value={500} className='text-[#1b03a3]'/>
            </p>
            <p className="text-lg md:text-xl text-gray-300">Satisfied Clients</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h3 className="text-lg md:text-xl text-gray-300 font-medium mt-6 md:mt-10 max-w-3xl mx-auto">
            We're proud to have helped businesses achieve their goals and transform with the power of technology.
          </h3>
        </motion.div>
      </div>
    
    </section>
    </div>
  );
};

export default ClientSatisfaction;
