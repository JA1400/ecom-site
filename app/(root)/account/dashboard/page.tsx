import React from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import DashFields from "@/components/DashFields";
export default async function Dashboard() {
  const session = await auth();

  if (!session) {
    redirect("/signin?error=SignInRequired");
  }

  return (
    <>
      <section className="w-full p-2.5 bg-white flex flex-col items-center gap-7.5 pb-12">
        <DashFields userFName={session.user.name ?? ""} />
        <article className="flex flex-col w-full items-start gap-3">
          <h4 className="font-normal text-base">Email Address</h4>
          <div className="flex items-center gap-2 py-3">
            <p className="italic text-sm font-semibold">
              StevelsTheName28@gmail.com
            </p>
            <span className="text-xs bg-gray-100 text-gray-600 px-3 py-0.5 rounded">
              primary
            </span>
          </div>
        </article>
        <article className="flex flex-col w-full items-start gap-2.5">
          <h4 className="font-normal text-base">Connected Accounts</h4>
          <div className="flex items-center gap-2 py-3">
            <p className="italic text-sm font-semibold">
              StevelsTheName28@gmail.com
            </p>
            <span className="text-xs bg-gray-100 text-gray-600 px-3 py-0.5 rounded">
              Google
            </span>
          </div>
        </article>
        <button className="primary-btn self-start">Save Changes</button>
      </section>
    </>
  );
}
