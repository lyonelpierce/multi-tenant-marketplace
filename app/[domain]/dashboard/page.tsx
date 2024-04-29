import { SignInButton, SignOutButton } from "@clerk/nextjs";

const page = () => {
  return (
    <div>
      <SignInButton />
      <SignOutButton />
    </div>
  );
};

export default page;
