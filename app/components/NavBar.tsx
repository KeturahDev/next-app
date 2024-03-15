import Link from "next/link";
import React from "react";

const NavBar = () => {
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
      <Link className="mr-5" href="/api/auth/signin">
        sign in
      </Link>
    </nav>
  );
};

export default NavBar;
