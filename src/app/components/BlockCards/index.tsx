"use client"

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import data from '../../../data/block3-cards.json';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function BlockCards() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const headingRef = useRef<HTMLHeadingElement>(null);

  const addToCardsRef = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
   
    gsap.from(headingRef.current, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: 'power2.out',
    });

    cardsRef.current.forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 80,
        duration: 0.8,
        delay: index * 0.15,
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none restart none', 
          markers: false, 
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-12 md:py-[120px] px-4 md:px-[147px] overflow-hidden">
      <div className="max-w-[1240px] mx-auto">
        <h1 
          ref={headingRef}
          className="text-3xl md:text-4xl font-bold text-center text-white mb-8 md:mb-12 uppercase taste-colors"
        >
          Taste the colours
        </h1>
      
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-3">
          {data.map((item: any) => (
            <div 
              key={item.id}
              ref={addToCardsRef}
              className="flex flex-col gap-6 md:gap-8"
            >
              <div className="relative w-full aspect-[5/4]">
                <Image
                  src={item.image}
                  alt={`${item.color} food`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  quality={100}
                  className="object-cover"
                />
              </div>
              <div className="flex-grow text-white">
                <h2 className="text-xl md:text-2xl mb-2 md:mb-3 text-center">{item.color}</h2>
                <p className="text-white text-center">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}