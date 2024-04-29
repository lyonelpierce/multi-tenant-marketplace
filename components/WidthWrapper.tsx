import { cn } from "@/lib/utils";

const WidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={cn("max-w-7xl mx-auto w-full", className)}>{children}</div>
  );
};

export default WidthWrapper;
