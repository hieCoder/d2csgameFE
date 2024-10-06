import { useState } from "react";
import { useDispatch } from "react-redux";
import Header from "@/components/Header";
import FooterIcon from "@/components/FooterIcon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Link from "next/link";

// Assuming you have a loginUser action in your Redux store
// import { loginUser } from "@/store/authSlice";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const dispatch = useDispatch();

    // const handleLogin = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     dispatch(loginUser({ email, password }));
    // };

    return (
        <div className="min-h-screen bg-gray-100">
            <Header></Header>

            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 py-6 sm:px-0">
                    <Card className="max-w-md mx-auto">
                        <CardHeader>
                            <CardTitle>Login</CardTitle>
                            <CardDescription>
                                Sign in with your email and password
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            {/* <form onSubmit={handleLogin} className="space-y-4"> */}
                            <form className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="password">Password</Label>
                                    <Input
                                        id="password"
                                        type="password"
                                        placeholder="Enter your password"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        required
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    className="w-full bg-green-600 hover:bg-white hover:text-black transition ease-in-out duration-200 hover:border"
                                >
                                    Sign In
                                </Button>
                                <div className="text-center">
                                    Already have an account?
                                    <Link
                                        href="/signup"
                                        className="text-blue-500 ms-2"
                                    >
                                        Sign Up
                                    </Link>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </main>
            <FooterIcon></FooterIcon>
        </div>
    );
}
