"use client";
import React from "react";

interface Props {
  error: Error;
  reset: () => void;
}
const ErrorPage = ({ error, reset }: Props) => {
  console.log("Error: ", error);
  return (
    <>
      <h2 className="font-bold text-2xl">Uh Oh!</h2>
      <div>An unexpected error has occured.</div>
      <button onClick={() => reset} className="btn btn-primary">
        Try again
      </button>
    </>
  );
};

export default ErrorPage;
