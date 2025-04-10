"use client"

import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import { blockContent, blockImages } from './helpers';

gsap.registerPlugin(ScrollTrigger);

export default function BlockImage() {
  const [leftImage, topRightImage, bottomRightImage] = blockImages;
  const [activeImage, setActiveImage] = useState<{src: string, alt: string} | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftImgRef = useRef<HTMLDivElement>(null);
  const topRightImgRef = useRef<HTMLDivElement>(null);
  const bottomRightImgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const modalImgRef = useRef<HTMLDivElement>(null);

  const openModal = (image: {src: string, alt: string}) => {
    setActiveImage(image);
    gsap.to(modalRef.current, {
      autoAlpha: 1,
      duration: 0.3,
      ease: 'power2.out'
    });
    gsap.from(modalImgRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 0.4,
      ease: 'back.out(1.7)'
    });
  };

  const closeModal = () => {
    gsap.to(modalRef.current, {
      autoAlpha: 0,
      duration: 0.3,
      ease: 'power2.in',
      onComplete: () => setActiveImage(null)
    });
  };

  useEffect(() => {
  
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
        toggleActions: 'play none restart none',
      }
    });

    tl.from(leftImgRef.current, {
      x: -100,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out'
    });

    tl.from(topRightImgRef.current, {
      x: 100,
      opacity: 0,
      duration: 0.6,
      ease: 'back.out(1.2)'
    }, '-=0.4');

    tl.from(bottomRightImgRef.current, {
      y: 80,
      opacity: 0,
      duration: 0.6,
      ease: 'back.out(1.2)'
    }, '-=0.3');

    tl.from(contentRef.current, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.2');


    gsap.set(modalRef.current, { autoAlpha: 0 });

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  return (
    <>
     <section ref={sectionRef} className="py-12 md:py-[120px] px-4 md:px-[147px] overflow-hidden">
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 xl:grid-cols-[372px_372px_1fr]">
   
        <div 
          ref={leftImgRef}
          className="relative w-full h-[600px] lg:w-[372px]"
          onClick={() => openModal(leftImage)}
        >
          <Image
            src={leftImage.src}
            fill
            alt={leftImage.alt}
            className="object-cover"
            sizes={leftImage.sizes}
          />
        </div>

      
        <div className="grid grid-rows-2 gap-3 h-[600px] lg:w-[372px]">
        
          <div 
            ref={topRightImgRef}
            className="relative w-full h-[295px]"
            onClick={() => openModal(topRightImage)}
          >
            <Image
              src={topRightImage.src}
              fill
              alt={topRightImage.alt}
              className="object-cover"
              sizes={topRightImage.sizes}
              quality={topRightImage.quality}
            />
          </div>

         
          <div 
            ref={bottomRightImgRef}
            className="relative w-full h-[295px]"
            onClick={() => openModal(bottomRightImage)}
          >
            <Image
              src={bottomRightImage.src}
              fill
              alt={bottomRightImage.alt}
              className="object-cover"
              sizes={bottomRightImage.sizes}
              quality={bottomRightImage.quality}
            />
          </div>
        </div>

        
        <div 
          ref={contentRef}
          className="lg:col-span-2 xl:col-span-1 mt-4 xl:mt-0"
        >
          <h2 className="block-title mb-5">
            {blockContent.title}
          </h2>
          <div className="Headline"></div>
          <p className="top-description">
            {blockContent.description}
          </p>
          {blockContent.subTitle && (
            <div>
              <span className="sub-title">
                {blockContent.subTitle}
              </span>
            </div>
          )}
          {blockContent.callOut && (
            <span className="call-out text-white">
              {blockContent.callOut}
            </span>
          )}
        </div>
      </div>
    </section>
     <div 
            ref={modalRef}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer"
            onClick={closeModal}
          >
            <div 
              ref={modalImgRef}
              className="relative max-w-[90vw] max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {activeImage && (
                <>
                  <button 
                    className="absolute -top-10 right-0 text-white text-2xl z-10 hover:text-gray-300 transition-colors"
                    onClick={closeModal}
                  >
                    ✕
                  </button>
                  <Image
                    src={activeImage.src}
                    alt={activeImage.alt}
                    width={1200}
                    height={800}
                    className="object-contain max-w-[90vw] max-h-[90vh]"
                    quality={100}
                  />
                  <p className="text-white text-center mt-4">{activeImage.alt}</p>
                </>
              )}
            </div>
          </div>
    </>
    
  );
}