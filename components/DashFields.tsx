"use client";
import React, { useState } from "react";

const AccountDash = ({ userFName }: { userFName: string }) => {
  const [name, setName] = useState(userFName);

  return (
    <article className="flex flex-col gap-2.5 w-full">
      <label htmlFor="name">Full Name</label>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        name="name"
        id="name"
        className="border border-[#EFEFEF] rounded-md focus:outline-none focus:border-brand-500 p-2.5"
      />
    </article>
  );
};

export default AccountDash;
