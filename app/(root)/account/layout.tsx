import React from "react";
import { auth, signOut } from "@/auth";
import { redirect } from "next/navigation";
import AccountNav from "@/components/AccountNav";

export default async function ({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await auth();

  if (!session) {
    redirect("/signin?error=SignInRequired");
  }

  return (
    <>
      <section className="p-2.5 w-full flex flex-col items-center gap-5 bg-white pt-12">
        <h2 className=" px-2.5 relative font-bold text-2xl w-fit self-start after:content-[''] after:w-2/3 after:h-1 after:bg-brand-500 after:block after:mt-1 after:ml-auto">
          Account
        </h2>
      </section>
      <section className="w-full p-2.5 bg-white flex flex-col items-center gap-5 py-5">
        <div className="w-full border-[#EFEFEF] border-b-2 flex justify-between font-bold text-lg gap-5">
          <AccountNav />
          <form
            className="ml-auto text-[#dd2831]"
            action={async () => {
              "use server";
              await signOut({ redirectTo: "/signin" });
            }}
          >
            <button type="submit" className="cursor-pointer">
              Log Out
            </button>
          </form>
        </div>
      </section>
      <div>{children}</div>
    </>
  );
}
