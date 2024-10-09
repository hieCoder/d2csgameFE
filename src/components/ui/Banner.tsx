import Link from "next/link";
import Image from "next/image";

export default function Banner() {
    return (
        <div className="container mx-auto px-4 md:px-20 py-8">
            {/* Two Banners Side-by-Side */}
            <div className="grid grid-cols-1 md:grid-cols-10 gap-4">
                {/* First Banner (30% width on medium screens and up) */}
                <div className="md:col-span-3 bg-orange-100 p-4 rounded-lg flex flex-col items-center">
                    {/* Images Section */}
                    <div className="flex flex-col gap-4 w-full">
                        <h3 className="text-lg font-bold mb-2">Đáng chú ý</h3>
                        {Array.from({ length: 4 }, (_, index) => (
                            <Image
                                key={index}
                                src="/images/game.png"
                                alt={`Special Offer Image ${index + 1}`}
                                width={600}
                                height={120} // Consistent height
                                className="w-full h-[120px] object-cover rounded-lg shadow-lg"
                            />
                        ))}
                    </div>
                </div>

                {/* Second Banner (70% width on medium screens and up) */}
                <div className="md:col-span-7 bg-blue-100 p-4 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Large Image */}
                        <div className="md:col-span-2 flex flex-col items-center relative">
                            <div className="relative w-full">
                                <Image
                                    src="/images/game.png"
                                    alt="Large Product Image"
                                    width={600}
                                    height={395}
                                    className="w-full h-[395px] object-cover rounded-lg shadow-lg"
                                />
                                {/* Subtitle Overlay */}
                                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 p-2 rounded text-center">
                                    Your subtitle or description here
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mt-4 w-full">
                                <Image
                                    src="/images/game.png"
                                    alt="Small Product Image 1"
                                    width={300}
                                    height={120}
                                    className="w-full h-[120px] object-cover rounded-lg shadow-lg"
                                />
                                <Image
                                    src="/images/game.png"
                                    alt="Small Product Image 2"
                                    width={300}
                                    height={120}
                                    className="w-full h-[120px] object-cover rounded-lg shadow-lg"
                                />
                            </div>
                        </div>

                        {/* Small Images on the Right */}
                        <div className="grid grid-rows-4 gap-4">
                            {Array.from({ length: 4 }, (_, index) => (
                                <Image
                                    key={index}
                                    src="/images/game.png"
                                    alt={`Small Product Image ${index + 3}`}
                                    width={150}
                                    height={120}
                                    className="w-full h-[120px] object-cover rounded-lg shadow-lg"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
