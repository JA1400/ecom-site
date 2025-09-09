import { auth, signIn } from "@/auth";
import React from "react";
import { Github } from "lucide-react";
import Image from "next/image";
import googleIcon from "@/public/google-icon.png";

const SingIn = async ({
  searchParams,
}: {
  searchParams: { error: string };
}) => {
  const error = (await searchParams).error;
  return (
    <>
      <section className="p-2.5 w-full flex flex-col items-center gap-2.5 bg-white pt-12">
        <h2 className=" px-2.5 relative font-bold text-2xl w-fit after:content-[''] after:w-2/3 after:h-1 after:bg-brand-500 after:block after:mt-2.5 after:m-auto">
          Sign in to techbay
        </h2>
        <p className="font-light text-sm">
          Welcome back! Please sign in to continue
        </p>
      </section>
      <section className="min-h-60 p-5 pt-0 w-full flex flex-col justify-center items-center gap-2.5 bg-white">
        {error === "AccountExists" && (
          <p className="text-red-500">
            This email is already linked to another account. Please use that
            provider to sign in.
          </p>
        )}
        {error === "SignInRequired" && (
          <p className="text-red-500">Please sign in to continue.</p>
        )}
        <form
          className="w-full "
          action={async () => {
            "use server";
            await signIn("github", { redirectTo: "/account/dashboard" });
          }}
        >
          <button
            className="cursor-pointer w-full flex justify-center items-center gap-2.5 bg-black text-white box-border border border-[#E2E2E2] rounded-md p-4"
            type="submit"
          >
            <Github size={18} color="white" /> <span>Continue with Github</span>
          </button>
        </form>
        <form
          className="w-full"
          action={async () => {
            "use server";
            await signIn("google", { redirectTo: "/account/dashboard" });
          }}
        >
          <button
            className="cursor-pointer w-full flex justify-center items-center gap-2.5 box-border border border-[#E2E2E2] rounded-md p-4"
            type="submit"
          >
            <Image height={16} width={16} alt="google-icon" src={googleIcon} />{" "}
            <span>Continue with Google</span>
          </button>
        </form>
      </section>
    </>
  );
};

export default SingIn;
