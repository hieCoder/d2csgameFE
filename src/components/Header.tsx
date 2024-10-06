"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Menu as MenuIcon, X, User, Search, ShoppingCart } from "lucide-react";
import Image from "next/image";

const menuItems = [
    { href: "/heros", label: "HERO" },
    { href: "/set", label: "SET" },
    { href: "/items", label: "ITEMS" },
    { href: "/steam", label: "STEAM" },
    { href: "/guide", label: "HƯỚNG DẪN" },
    { href: "/news", label: "TIN TỨC" },
    { href: "/q&a", label: "HỎI ĐÁP" },
];

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [cartQuantity, setCartQuantity] = useState(3); // Example quantity, replace with actual state management
    const pathname = usePathname();
    const router = useRouter();

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        // Implement search logic here
        console.log("Searching for:", searchQuery);
        router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    };

    return (
        <>
            <nav className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
                <div className="w-full px-6">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-4">
                            <Link
                                href="/"
                                className="flex items-center py-4 px-2"
                            >
                                <Image
                                    src="/images/logo.jpg"
                                    width={80}
                                    height={80}
                                    alt="logo"
                                ></Image>
                            </Link>
                            <div className="hidden md:flex space-x-4">
                                {menuItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300 ${
                                            pathname === item.href
                                                ? "text-green-500 border-b-2 border-green-500"
                                                : ""
                                        }`}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="hidden md:flex items-center space-x-4">
                            <form
                                onSubmit={handleSearch}
                                className="relative text-gray-600"
                            >
                                <input
                                    className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                                    type="search"
                                    name="search"
                                    placeholder="Search"
                                    value={searchQuery}
                                    onChange={(e) =>
                                        setSearchQuery(e.target.value)
                                    }
                                />
                                <button
                                    type="submit"
                                    className="absolute right-0 top-0 mt-3 mr-4"
                                >
                                    <Search className="h-4 w-4 text-gray-600" />
                                </button>
                            </form>
                            <Link href="/cart" className="relative">
                                <ShoppingCart className="h-6 w-6 text-gray-500 hover:text-green-500 transition duration-300" />
                                {cartQuantity > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                        {cartQuantity}
                                    </span>
                                )}
                            </Link>
                            {isLoggedIn ? (
                                <button
                                    onClick={handleLogout}
                                    className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300"
                                >
                                    Logout
                                </button>
                            ) : (
                                <>
                                    <Link
                                        href="/login"
                                        className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300"
                                    >
                                        Log In
                                    </Link>
                                    <Link
                                        href="/signup"
                                        className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300"
                                    >
                                        Sign Up
                                    </Link>
                                </>
                            )}
                        </div>
                        <div className="md:hidden flex items-center">
                            <Link href="/cart" className="relative mr-4">
                                <ShoppingCart className="h-6 w-6 text-gray-500" />
                                {cartQuantity > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                        {cartQuantity}
                                    </span>
                                )}
                            </Link>
                            <button
                                className="outline-none mobile-menu-button"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                {isOpen ? (
                                    <X className="h-6 w-6 text-gray-500" />
                                ) : (
                                    <MenuIcon className="h-6 w-6 text-gray-500" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                {isOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <form
                                onSubmit={handleSearch}
                                className="relative mx-auto text-gray-600 mb-4"
                            >
                                <input
                                    className="w-full border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                                    type="search"
                                    name="search"
                                    placeholder="Search"
                                    value={searchQuery}
                                    onChange={(e) =>
                                        setSearchQuery(e.target.value)
                                    }
                                />
                                <button
                                    type="submit"
                                    className="absolute right-0 top-0 mt-3 mr-4"
                                >
                                    <Search className="h-4 w-4 text-gray-600" />
                                </button>
                            </form>
                            {menuItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                                        pathname === item.href
                                            ? "text-white bg-green-500"
                                            : "text-gray-500 hover:text-white hover:bg-green-500"
                                    }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            {isLoggedIn ? (
                                <button
                                    onClick={() => {
                                        handleLogout();
                                        setIsOpen(false);
                                    }}
                                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-white hover:bg-green-500"
                                >
                                    Logout
                                </button>
                            ) : (
                                <>
                                    <Link
                                        href="/login"
                                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-white hover:bg-green-500"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Log In
                                    </Link>
                                    <Link
                                        href="/register"
                                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-white hover:bg-green-500"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </nav>
            {/* Add padding to avoid content being hidden behind the fixed header */}
            <div className="pt-20">{/* Page content goes here */}</div>
        </>
    );
}
