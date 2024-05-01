import Link from "next/link";

import WidthWrapper from "@/components/WidthWrapper";
import { HeartIcon, ShoppingBag, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { landingMenu } from "@/constants/Landing/landingMenu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import UserDropdown from "./UserDropdown";

const LandingNavbar = () => {
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
        <ul className="flex items-center gap-8">
          <li>
            <Link href="/favorites">
              <Button size="icon" variant="icon" className="hover:scale-110">
                <HeartIcon className="w-6 h-6" />
              </Button>
            </Link>
          </li>
          <li>
            <UserDropdown>
              <Button
                size="icon"
                variant="icon"
                className="hover:scale-110"
                asChild
              >
                <User className="w-6 h-6 transition-all ease-in-out hover:scale-110" />
              </Button>
            </UserDropdown>
          </li>
          <li>
            <Button
              size="icon"
              variant="icon"
              className="hover:scale-110"
              asChild
            >
              <ShoppingBag className="w-6 h-6 cursor-pointer" />
            </Button>
          </li>
        </ul>
      </WidthWrapper>
    </div>
  );
};

export default LandingNavbar;
