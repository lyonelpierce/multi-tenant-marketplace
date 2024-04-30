import { auth } from "@clerk/nextjs/server";
import { SignInButton, SignOutButton } from "@clerk/nextjs";

import WidthWrapper from "@/components/WidthWrapper";
import { HeartIcon, ShoppingBag, User } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const LandingNavbar = () => {
  const { userId }: { userId: string | null } = auth();

  return (
    <div className="bg-zinc-900 h-20 flex items-center text-white">
      <WidthWrapper className="flex justify-between items-center">
        <Link href="/">
          <h1 className="uppercase font-medium text-2xl flex">
            Panda
            <span className="text-xs font-regular text-yellow-400">EC</span>
          </h1>
        </Link>
        <div className="flex gap-8">
          <Button size="icon" variant="icon" className="hover:scale-110">
            <HeartIcon />
          </Button>
          {!userId ? (
            <SignInButton>
              <Button size="icon" variant="icon" className="hover:scale-110">
                <User />
              </Button>
            </SignInButton>
          ) : (
            <SignOutButton />
          )}
          <Button size="icon" variant="icon" className="hover:scale-110">
            <ShoppingBag />
          </Button>
        </div>
      </WidthWrapper>
    </div>
  );
};

export default LandingNavbar;
