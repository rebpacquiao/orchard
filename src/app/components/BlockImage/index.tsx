"use client"

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import { blockContent, blockImages } from './helpers';

gsap.registerPlugin(ScrollTrigger);

export default function BlockImage() {
  const [leftImage, topRightImage, bottomRightImage] = blockImages;
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftImgRef = useRef<HTMLDivElement>(null);
  const topRightImgRef = useRef<HTMLDivElement>(null);
  const bottomRightImgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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

    return () => {
    
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-12 md:py-[120px] px-4 md:px-[147px] overflow-hidden">
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 xl:grid-cols-[372px_372px_1fr]">
        {/* Left Image */}
        <div 
          ref={leftImgRef}
          className="relative w-full h-[600px] lg:w-[372px]"
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
  );
}