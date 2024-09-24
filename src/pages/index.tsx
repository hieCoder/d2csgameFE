import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";

export default function Home() {
    const router = useRouter();

    const handleStartShopping = () => {
        router.push("/login")
    };


    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">
                Welcome to My Game Store
            </h1>
            <Button className="bg-blue-500 text-white px-6 py-3 rounded-lg" onClick={handleStartShopping}>
                Start Shopping
            </Button>
        </div>
    );
}
