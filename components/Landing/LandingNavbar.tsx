import { auth } from "@clerk/nextjs/server";
import { SignInButton, SignOutButton } from "@clerk/nextjs";

import WidthWrapper from "@/components/WidthWrapper";
import { HeartIcon, ShoppingBag, User } from "lucide-react";
import Link from "next/link";

const LandingNavbar = () => {
  const { userId }: { userId: string | null } = auth();

  return (
    <div className="bg-zinc-900 h-20 flex items-center text-white">
      <WidthWrapper className="flex justify-between">
        <Link href="/">
          <h1 className="uppercase font-light text-2xl">
            Tienda<span className="font-bold text-yellow-400">EC</span>
          </h1>
        </Link>
        <div className="flex gap-10">
          <HeartIcon />
          {!userId ? (
            <SignInButton>
              <User />
            </SignInButton>
          ) : (
            <SignOutButton />
          )}
          <ShoppingBag />
        </div>
      </WidthWrapper>
    </div>
  );
};

export default LandingNavbar;
