import Image from 'next/image';
import { blockContent, blockImages, ImageBlock } from './helpers';

export default function BlockImage() {
  const [leftImage, topRightImage, bottomRightImage] = blockImages;

  return (
    <section className="py-12 md:py-[120px] px-4 md:px-[147px]">
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 xl:grid-cols-[372px_372px_1fr]">
        <div className="relative w-full h-[600px] lg:w-[372px]">
          <Image
            src={leftImage.src}
            fill
            alt={leftImage.alt}
            className="object-cover"
            sizes={leftImage.sizes}
          />
        </div>

        <div className="grid grid-rows-2 gap-3 h-[600px] lg:w-[372px]">
          <div className="relative w-full h-[295px]">
            <Image
              src={topRightImage.src}
              fill
              alt={topRightImage.alt}
              className="object-cover"
              sizes={topRightImage.sizes}
              quality={topRightImage.quality}
            />
          </div>

          <div className="relative w-full h-[295px]">
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

        <div className="lg:col-span-2 xl:col-span-1 mt-4 xl:mt-0">
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