export interface ImageBlock {
    src: string;
    alt: string;
    width?: number;
    height: number;
    className?: string;
    sizes?: string;
    quality?: number;
    fill?: boolean;
  }
  
  export interface ContentBlock {
    title: string;
    description: string;
    subTitle?: string;
    callOut?: string;
  }
  
  export const blockContent: ContentBlock = {
    title: "WHAT DOES COOKING MEAN?",
    description: "Is it simply applying heat to a food product? A way of making certain food safe to eat? Or a way to create flavour and make food more appealing? This is just part of what Hervé This, the father of molecular gastronomy, has dedicated his life to finding out. We spoke to him to find out what his experiments have told him. And in the process even discovered the secret to cooking the perfect egg...",
    subTitle: "THE PERFECT EGG",
    callOut: "Keep water between 67 and 68°C for a flavourful, tender yolk"
  };
  
  export const blockImages: ImageBlock[] = [
    {
      src: '/images/block-left-img.png',
      alt: 'Block left image',
      height: 600,
      sizes: '(max-width: 768px) 100vw, 372px'
    },
    {
      src: '/images/block-top-right-img.png',
      alt: 'Block top right image',
      height: 295,
      sizes: '(max-width: 768px) 100vw, 372px',
      quality: 100
    },
    {
      src: '/images/block-bottom-right-img.png',
      alt: 'Block bottom right image',
      height: 295,
      sizes: '(max-width: 768px) 100vw, 372px',
      quality: 100
    }
  ];