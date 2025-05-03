import { HTMLAttributes, ReactNode } from "react";
import cn from "../utils/cn";

interface HeadingProps extends HTMLAttributes<HTMLHeadElement> {
  children: ReactNode;
}
const Heading = ({ children, className, ...props }: HeadingProps) => {
  return (
    <h1
      className={cn(
        "text-4xl sm:text-5xl text-pretty font-semibold tracking-tight text-brand-900",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
};

export default Heading;
