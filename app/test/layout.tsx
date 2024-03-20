import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const TestLayout = ({ children }: Props) => {
  return (
    <div>
      <h3>This is a test layout</h3>
      <>{children}</>
    </div>
  );
};

export default TestLayout;
