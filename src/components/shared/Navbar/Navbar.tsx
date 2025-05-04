import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Image from "next/image";
import { currentUser } from "@clerk/nextjs/server";
import { SignOutButton } from "@clerk/nextjs";

const Navbar = async () => {
  const user = await currentUser();
  return (
    <nav className="sticky z-[100] h-16 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-16 items-center justify-between">
          <Link href={"/"} className="flex font-semibold">
            <Image
              src={"/logo/logo.png"}
              alt="PulseCord"
              width={200}
              height={80}
              loading="lazy"
            />
          </Link>
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <SignOutButton redirectUrl="/">
                  <Button size="sm" variant="ghost">
                    SignOut
                  </Button>
                </SignOutButton>
                <Link
                  href={"/dashboard"}
                  className={buttonVariants({
                    size: "sm",
                    className: "flex items-center gap-2",
                  })}
                >
                  Dashboard <ArrowRight className="size-4" />
                </Link>
              </>
            ) : (
              <>
                <Link
                  href={"/dashboard"}
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  Pricing
                </Link>
                <Link
                  href={"/sign-in"}
                  className={buttonVariants({
                    size: "sm",
                  })}
                >
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
