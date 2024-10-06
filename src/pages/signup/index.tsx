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
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";

// Assuming you have a registerUser action in your Redux store
// import { registerUser } from "@/store/authSlice";

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    // const dispatch = useDispatch();
    const { toast } = useToast();

    // const handleRegister = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     if (password !== confirmPassword) {
    //         toast({
    //             title: "Error",
    //             description: "Passwords do not match",
    //             variant: "destructive",
    //         });
    //         return;
    //     }
    //     dispatch(registerUser({ email, username, password }));
    // };

    return (
        <div className="min-h-screen bg-gray-100">
            <Header></Header>
            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 py-6 sm:px-0">
                    <Card className="max-w-md mx-auto">
                        <CardHeader>
                            <CardTitle>Sign Up</CardTitle>
                            <CardDescription>
                                Create new account
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            {/* <form
                                onSubmit={handleRegister}
                                className="space-y-4"
                            > */}
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
                                    <Label htmlFor="username">Username</Label>
                                    <Input
                                        id="username"
                                        type="text"
                                        placeholder="Enter your username"
                                        value={username}
                                        onChange={(e) =>
                                            setUsername(e.target.value)
                                        }
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="password">Enter your password</Label>
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
                                <div className="space-y-2">
                                    <Label htmlFor="confirmPassword">
                                        Confirm Password
                                    </Label>
                                    <Input
                                        id="confirmPassword"
                                        type="password"
                                        placeholder="Confirm password"
                                        value={confirmPassword}
                                        onChange={(e) =>
                                            setConfirmPassword(e.target.value)
                                        }
                                        required
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    className="w-full bg-green-600 hover:bg-white hover:text-black transition ease-in-out duration-200 hover:border"
                                >
                                    Submit
                                </Button>
                            </form>
                            <div className="text-center mt-4">
                                Already have an account?
                                <Link
                                    href="/login"
                                    className="text-blue-500 ms-2"
                                >
                                    Log In
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
            <FooterIcon></FooterIcon>
        </div>
    );
}
