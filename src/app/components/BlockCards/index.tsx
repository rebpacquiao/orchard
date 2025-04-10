"use client"

import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import data from '../../../data/block3-cards.json';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);


interface CardItem {
  id: number;
  color: string;
  description: string;
  image: string;
  extendedDescription?: string;
}

export default function BlockCards() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [activeItem, setActiveItem] = useState<CardItem | null>(null);

  const addToCardsRef = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  const openModal = (item: CardItem) => {
    setActiveItem(item);
    gsap.to(modalRef.current, {
      autoAlpha: 1,
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  const closeModal = () => {
    gsap.to(modalRef.current, {
      autoAlpha: 0,
      duration: 0.3,
      ease: 'power2.in',
      onComplete: () => setActiveItem(null)
    });
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

    gsap.set(modalRef.current, { autoAlpha: 0 });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <section ref={sectionRef} className="py-12 md:py-[120px] px-4 md:px-[147px] overflow-hidden">
        <div className="max-w-[1240px] mx-auto">
          <h1 
            ref={headingRef}
            className="text-3xl md:text-4xl font-bold text-center text-white mb-8 md:mb-12 uppercase taste-colors"
          >
            Taste the colours
          </h1>
        
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-3">
            {data.map((item: CardItem) => (
              <div 
                key={item.id}
                ref={addToCardsRef}
                className="flex flex-col gap-6 md:gap-8 cursor-pointer"
                onClick={() => openModal(item)}
              >
                <div className="relative w-full aspect-[5/4]">
                  <Image
                    src={item.image}
                    alt={`${item.color} food`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    quality={100}
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-grow text-white">
                  <h2 
                    className="text-xl md:text-2xl mb-2 md:mb-3 text-center hover:text-primary transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(item);
                    }}
                  >
                    {item.color}
                  </h2>
                  <p className="text-white text-center">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div 
        ref={modalRef}
        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
        onClick={closeModal}
      >
        <div 
          className="relative bg-dark max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-lg p-6"
          onClick={(e) => e.stopPropagation()}
        >
          {activeItem && (
            <>
              <button 
                className="absolute top-4 right-4 text-white text-2xl z-10"
                onClick={closeModal}
              >
                &times;
              </button>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative h-64 md:h-96">
                  <Image
                    src={activeItem.image}
                    alt={`${activeItem.color} food`}
                    fill
                    className="object-cover rounded-lg"
                    quality={100}
                  />
                </div>
                
                <div className="text-white">
                  <h2 className="text-3xl font-bold mb-4">{activeItem.color}</h2>
                  <p className="mb-6">{activeItem.description}</p>
                  
                  {activeItem.extendedDescription && (
                    <p className="text-gray-300">{activeItem.extendedDescription}</p>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}