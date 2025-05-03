import cn from "@/components/utils/cn";
import { ReactNode } from "react";

interface MaxWidthWrapperProps {
  className?: string;
  children?: ReactNode;
}
const MaxWidthWrapper = ({ className, children }: MaxWidthWrapperProps) => {
  return (
    <div
      className={cn(
        "h-full mx-auto w-full max-w-7xl px-2.5 md:px-20",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
