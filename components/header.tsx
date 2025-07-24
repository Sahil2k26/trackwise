
import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { LayoutDashboard, PenBox } from "lucide-react";
// import {system} from "@clerk/themes"


export function Header() {
    return <div className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <nav className="container mx-auto px-4 py-2 flex items-center justify-between">
            <Link href={"/"}>
                <Image
                    src={"/logo.png"}
                    alt="TrackWise AI"
                    height={60}
                    width={200}
                    className="h-12 w-auto object-contain"

                />
            </Link>
            <div>

            </div>
            <div className="flex items-center space-x-4 ">
                <SignedIn>
                    <Link
                        href={"/dashboard"}
                        className="text-gray-600 hover:text-black hover:font-bold  hover:text-lg flex items-center gap-2"
                    >
                        <Button
                            variant={"outline"}
                        >
                            <LayoutDashboard size={18} />
                            <span className="hidden md:inline">Dashboard</span>
                        </Button>
                    </Link>
                    <Link
                        href={"/transaction/create"}
                    >
                        <Button
                            className="flex items-center gap-2"
                        >
                            <PenBox size={18} />
                            <span className="hidden md:inline">Add Transactions</span>

                        </Button>
                    </Link>
                </SignedIn>
                <SignedOut>
                    <SignInButton>
                        <Button variant={"outline"}>
                            Login
                        </Button>
                    </SignInButton>
                </SignedOut>
                <SignedIn>
                    <UserButton appearance={{
                        elements: {
                            avatarBox: "w-10 h-10",

                        },
                        // baseTheme:system
                    }} />
                </SignedIn>

            </div>

        </nav>
    </div>
}