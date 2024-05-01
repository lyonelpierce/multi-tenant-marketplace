import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs/server";
import { SignInButton, SignOutButton, SignUpButton } from "@clerk/nextjs";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogInIcon, LogOutIcon, UserPlusIcon } from "lucide-react";

const getUserFirstName = async ({ userId }: { userId: string | null }) => {
  if (!userId) return null;

  try {
    const response = await prismadb.user.findUnique({
      where: { id: userId },
      select: { firstName: true },
    });

    return response?.firstName;
  } catch (error) {
    console.error(error);
  }
};

const UserDropdown = async ({ children }: { children: React.ReactNode }) => {
  const { userId }: { userId: string | null } = auth();

  const firstName = await getUserFirstName({ userId });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        sideOffset={10}
        className="border-t-4 border-t-yellow-400 w-44 p-0"
      >
        {!userId ? (
          <>
            <DropdownMenuItem
              asChild
              className="w-full px-2 h-10 text-xs font-medium cursor-pointer"
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
              className="w-full px-2 h-10 text-xs font-medium cursor-pointer"
            >
              <SignUpButton>
                <div>
                  <UserPlusIcon className="w-4 h-4 mr-1" />
                  Crear una cuenta
                </div>
              </SignUpButton>
            </DropdownMenuItem>
          </>
        ) : (
          <>
            <div className="py-4 px-2">
              <p className="text-xs font-medium">Bienvenid@ {firstName}</p>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              asChild
              className="w-full px-2 h-10 text-xs font-medium cursor-pointer"
            >
              <SignOutButton>
                <div>
                  <LogOutIcon className="w-4 h-4 mr-1" />
                  Cerrar Sesión
                </div>
              </SignOutButton>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
