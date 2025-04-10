import data from '../../../data/block3-cards.json';
import Image from 'next/image';

export default function BlockCards() {
    return (
        <section className="py-[120px] px-[147px]">
            <div className="max-w-[1240px] mx-auto">
                <h1 className="text-4xl font-bold text-center text-white mb-12 uppercase">Taste the colours</h1>
                
                <div className="flex flex-col sm:flex-row justify-start items-start gap-8">
                    {data.map((item: any) => (
                        <div 
                            key={item.id}
                            className="w-[375px] h-[460px] flex flex-col gap-8"
                        >
                            <div className="relative w-[375px] h-[300px]">
                                <Image
                                    width={375}
                                    height={300}
                                    src={item.image}
                                    alt={`${item.color} food`}
                                    quality={100}
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex-grow text-white">
                                <h2 className="text-2xl font-bold mb-3 uppercase">{item.color}</h2>
                                <p className="text-white">
                                    {item.color === 'Red' && 'Red foods remind us of berries and soft fruits, so we anticipate a sweet taste.'}
                                    {item.color === 'Green' && 'Fresh, zingy green colours are reminiscent of unripe fruit, promising sour or acid flavours.'}
                                    {item.color === 'White' && 'White foods evoke memories of salt and salty flavours, driving the expectation of a savoury treat.'}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}