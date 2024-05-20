import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { getAuthSession } from "@/lib/auth";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import SignOutBtn from "./sign-out-btn";
import Link from "next/link";
import SignOut from "./auth/sign-out";
import SigninWithGoogle from "./auth/Sign-in-with-google";
import { auth } from "../lib/auth";
import SigninWithGithub from "./auth/Sign-in-with-github";

export default async function Navbar() {
  const session = await auth();
  console.log("🚀 ~ Navbar ~ session:", session);

  return (
    <nav className="flex justify-between items-center py-2 px-4 sm:px-16 border-b">
      <h3 className="font-semibold text-lg tracking-tight">242</h3>
      {session ? (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage
                src={session.user.image || ""}
                alt={session.user.name || ""}
              />
              <AvatarFallback>
                {session.user.name
                  ?.split(" ")
                  .map((word: any) => word[0].toUpperCase())
                  .join("")}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>
              <span className="font-semibold">{session.user.name}</span>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Link href="/billing">
              <DropdownMenuItem className="cursor-pointer">
                Billing
              </DropdownMenuItem>
            </Link>
            <DropdownMenuItem>
              <SignOut className="w-full" />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <div className="space-x-2">
          <SigninWithGoogle />
          <SigninWithGithub />
        </div>
      )}
    </nav>
  );
}
