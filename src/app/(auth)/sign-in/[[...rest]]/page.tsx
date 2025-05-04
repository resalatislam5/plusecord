import { SignIn } from "@clerk/nextjs";

const page = () => {
  return (
    <div className="flex flex-1 w-full justify-center items-center">
      <SignIn signUpUrl="/sign-up" />
    </div>
  );
};

export default page;
