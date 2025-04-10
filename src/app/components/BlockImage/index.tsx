import Image from 'next/image';

export default function BlockImage() {
    return(
        <>
            <section className="py-12 md:py-[120px] px-4 md:px-[147px] gap-[30px]">
                <div className="flex flex-col md:flex-row justify-start items-start mx-auto h-[840px]">
                    <div className="relative flex-shrink-0">
                        <Image
                            src='/images/block-left-img.png'
                            width={372}
                            height={600}
                            alt="Block left image"
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="flex flex-col flex-grow">
                        <div className="relative w-[372px] h-[295px] mb-2.5 ml-2.5">
                            <Image
                                src='/images/block-top-right-img.png'
                                width={372}
                                height={295}
                                alt="Block top right image"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="relative w-[372px] h-[295px] mt-2.5 ml-2.5">
                            <Image
                                src='/images/block-bottom-right-img.png'
                                width={372}
                                height={295}
                                alt="Block bottom right image"
                                className="object-cover w-full h-full"
                            />
                        </div>
                       

                    </div>
                    
                    <div className="flex flex-col flex-grow">
                        <h2 className="font-['OpenSans'] text-[30px] font-light leading-[1.1] tracking-[1.5px] text-left text-white flex-grow h-[66px]">
                            WHAT DOES COOKING MEAN?
                        </h2>
                        <p className="font-['OpenSans'] text-[21px] font-light leading-[1.43] text-left text-white h-[330px]">
                            Is it simply applying heat to a food product? A way of making certain food safe to eat? Or a way to create flavour and make food more appealing? This is just part of what Hervé This, the father of molecular gastronomy, has dedicated his life to finding out. We spoke to him to find out what his experiments have told him. And in the process even discovered the secret to cooking the perfect egg...
                        </p>
                        </div>
                </div>
            </section>
        </>
    )
}