import data from '../../../data/block3-cards.json';
import Image from 'next/image';

export default function BlockCards() {
    return (
        <section className="py-12 md:py-[120px] px-4 md:px-[147px]">
            <div className="max-w-[1240px] mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-8 md:mb-12 uppercase">Taste the colours</h1>
                
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8">
                    {data.map((item: any) => (
                        <div 
                            key={item.id}
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
                                <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 uppercase">{item.color}</h2>
                                <p className="text-white">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}