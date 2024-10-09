import React from "react";
import { Shield, Zap, Users } from "lucide-react";

export default function FooterIcon() {
    return (
        <footer className="bg-gray-100 mt-[100px]">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center text-center">
                        <Shield className="h-12 w-12 text-indigo-500 mb-4" />
                        <h3 className="text-lg font-medium text-gray-900">
                            QUALITY
                        </h3>
                        <p className="mt-2 text-base text-gray-500">
                            The site offers high quality and reliable products.
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <Zap className="h-12 w-12 text-indigo-500 mb-4" />
                        <h3 className="text-lg font-medium text-gray-900">
                            REPUTATION
                        </h3>
                        <p className="mt-2 text-base text-gray-500">
                            Safe and reliable transactions with the best
                            customer service.
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <Users className="h-12 w-12 text-indigo-500 mb-4" />
                        <h3 className="text-lg font-medium text-gray-900">
                            DIVERSITY
                        </h3>
                        <p className="mt-2 text-base text-gray-500">
                            Wide range of products to meet your needs.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
