import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { LogInIcon, UserPlusIcon } from "lucide-react";

const UserDropdown = ({ children }: { children: React.ReactNode }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        sideOffset={10}
        className="rounded-t-none border-2 border-t-yellow-400 w-44 p-0"
      >
        <DropdownMenuItem
          asChild
          className="w-full px-2 h-10 font-regular cursor-pointer"
        >
          <SignInButton>
            <div>
              <LogInIcon className="w-4 h-4 mr-1" />
              Iniciar sesión
            </div>
          </SignInButton>
        </DropdownMenuItem>
        <DropdownMenuItem
          asChild
          className="w-full px-2 h-10 font-regular text-sm cursor-pointer"
        >
          <SignUpButton>
            <div>
              <UserPlusIcon className="w-4 h-4 mr-1" />
              Crear una cuenta
            </div>
          </SignUpButton>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
