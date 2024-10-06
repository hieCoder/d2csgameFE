import { Input } from "@/components/ui/input";
import Image from "next/image";
import FooterIcon from "@/components/FooterIcon";
import Header from "@/components/Header";

export default function Heros() {
    // This would typically come from an API or database
    const characters = Array(109)
        .fill(null)
        .map((_, i) => ({
            id: i + 1,
            name: `Character ${i + 1}`,
            image: `/images/game.png`,
        }));

    return (
        <div className="container mx-auto px-4 py-8">
            <Header></Header>
            <h1 className="text-2xl font-bold text-center mb-6">
                Heros
            </h1>

            <div className="mb-6">
                <Input
                    type="search"
                    placeholder="Search for a hero"
                    className="max-w-md mx-auto"
                />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-2 mb-8">
                {characters.map((character) => (
                    <div key={character.id} className="rounded-xl border bg-card text-card-foreground shadow">
                        <Image
                            src={character.image}
                            alt={character.name}
                            width={80}
                            height={80}
                            className="w-full h-full object-cover rounded-md"
                        />
                    </div>
                ))}
            </div>

            <FooterIcon></FooterIcon>
        </div>
    );
}
