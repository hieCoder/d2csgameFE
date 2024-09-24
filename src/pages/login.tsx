import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        const response = await fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            alert("Login successful!");
        } else {
            alert("Login failed!");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-6">Login</h1>
            <input
                type="email"
                placeholder="Email"
                className="mb-4 px-4 py-2 border rounded-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                className="mb-4 px-4 py-2 border rounded-lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button
                className="bg-blue-500 text-white px-6 py-3 rounded-lg"
                onClick={handleLogin}
            >
                Login
            </Button>
        </div>
    );
}
