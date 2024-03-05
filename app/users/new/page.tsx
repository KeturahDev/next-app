"use client";
import { useRouter } from "next/navigation";
import React from "react";

//static rendered server page by default
const NewUserPage = () => {
  const router = useRouter();
  return (
    <button className="btn btn-primary" onClick={() => router.push("/users")}>
      Create
    </button>
  );
};

export default NewUserPage;
