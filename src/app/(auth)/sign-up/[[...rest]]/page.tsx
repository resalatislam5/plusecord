import { SignUp } from "@clerk/nextjs";

function page() {
  return (
    <div className="flex flex-1 justify-center items-center">
      <SignUp signInUrl="/sign-in" />
    </div>
  );
}

export default page;
