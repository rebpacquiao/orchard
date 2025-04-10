import Image from 'next/image';

export default function BlockImage() {
    return(
        <>
            <section className="py-12 md:py-[120px] px-4 md:px-[147px]">
                <div className="grid grid-cols-1 justify-start items-start mx-auto gap-3 lg:grid-cols-[auto_auto] xl:grid-cols-[auto_auto_1fr]">
                    <div className="relative flex-shrink-0">
                        <Image
                            src='/images/block-left-img.png'
                            width={372}
                            height={600}
                            alt="Block left image"
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 372px"
                        />
                    </div>
                    <div className="grid grid-rows-2 gap-3">
                        <div className="relative w-[330px] lg:w-[372px] h-[295px]">
                            <Image
                                src='/images/block-top-right-img.png'
                                alt="Block top right image"
                                className="object-cover w-full h-full"
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                                quality={100}
                            />
                        </div>
                        <div className="relative w-[330px] lg:w-[372px] h-[295px]">
                            <Image
                                src='/images/block-bottom-right-img.png'
                                alt="Block bottom right image"
                                className="object-cover w-full h-full"
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                                quality={100}
                            />
                        </div>
                    </div>
                    
                    
                    <div className="lg:col-span-2 xl:col-auto mt-4 lg:mt-0">
                        <h2 className="block-title mb-5">
                            WHAT DOES COOKING MEAN?
                        </h2>
                        <div className="Headline"></div>
                        <p className="top-description">
                            Is it simply applying heat to a food product? A way of making certain food safe to eat? Or a way to create flavour and make food more appealing? This is just part of what Hervé This, the father of molecular gastronomy, has dedicated his life to finding out. We spoke to him to find out what his experiments have told him. And in the process even discovered the secret to cooking the perfect egg...
                        </p>
                        <div>
                            <span className="sub-title">
                                THE PERFECT EGG
                            </span>
                        </div>
                        <span className="call-out text-white">
                            Keep water between 67 and 68°C for a flavourful, tender yolk
                        </span>
                    </div>
                </div>
            </section>
        </>
    )
}