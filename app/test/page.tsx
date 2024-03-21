"use client";
import React from "react";
import dynamic from "next/dynamic";
const HeavyComponent = dynamic(() => import("./HeavyComponent"), {
  ssr: false, //some cases this prevents serverside errors
  loading: () => <>Loading...</>,
});

const TestPage = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <>
      <div>TestPage</div>

      <button className="btn" onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"}
      </button>

      {isVisible ? <HeavyComponent /> : null}
    </>
  );
};

export default TestPage;
