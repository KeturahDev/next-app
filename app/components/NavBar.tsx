"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const { status, data: session } = useSession();

  return (
    <nav className="navbar bg-slate-400 p-5">
      <Link className="mr-10" href="/">
        Next.js
      </Link>
      <Link className="mr-5" href="/users">
        users
      </Link>
      <Link className="mr-5" href="/admin">
        admin
      </Link>
      <Link className="mr-5" href="/products">
        products
      </Link>
      <Link className="mr-5" href="/upload">
        upload
      </Link>
      {status === "loading" && <div>Loading...</div>}
      {status === "unauthenticated" && (
        <Link className="mr-5" href="/api/auth/signin">
          sign in
        </Link>
      )}
      {status === "authenticated" && (
        <>
          <div>{session.user!.name}</div>
          <Link className="ml-5" href="/api/auth/signout">
            sign out
          </Link>
        </>
      )}
    </nav>
  );
};

export default NavBar;
