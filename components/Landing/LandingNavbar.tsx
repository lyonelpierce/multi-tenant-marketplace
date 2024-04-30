import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { SignInButton, SignOutButton } from "@clerk/nextjs";

import WidthWrapper from "@/components/WidthWrapper";
import { HeartIcon, ShoppingBag, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { landingMenu } from "@/constants/landingMenu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
        <ul className="font-semibold text-sm">
          {landingMenu.map((item) => (
            <li
              key={item.title}
              className="inline-block mx-4 transition-all ease-in-out hover:text-yellow-400"
            >
              <Link href={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-6">
          <Tooltip>
            <TooltipTrigger>
              <Button size="icon" variant="icon" className="hover:scale-110">
                <HeartIcon className="w-6 h-6" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Favoritos</TooltipContent>
          </Tooltip>
          {!userId ? (
            <Tooltip>
              <TooltipTrigger>
                <SignInButton>
                  <User className="w-6 h-6 transition-all ease-in-out hover:scale-110" />
                </SignInButton>
              </TooltipTrigger>
              <TooltipContent>Mi Cuenta</TooltipContent>
            </Tooltip>
          ) : (
            <SignOutButton />
          )}
          <Tooltip>
            <TooltipTrigger>
              <Button size="icon" variant="icon" className="hover:scale-110">
                <ShoppingBag className="w-6 h-6" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Carrito</TooltipContent>
          </Tooltip>
        </div>
      </WidthWrapper>
    </div>
  );
};

export default LandingNavbar;
