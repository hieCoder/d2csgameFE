import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">
                Welcome to My Game Store
            </h1>
            <Button className="bg-blue-500 text-white px-6 py-3 rounded-lg transition ease-in-out duration-500 ">
                Start Shopping
            </Button>
        </div>
    );
}
