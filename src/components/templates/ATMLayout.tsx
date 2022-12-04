import React from "react";

export const ATMLayout = ({ children }: ATMLayoutProps) => {
  return (
    <div className="p-2 flex flex-col items-center h-screen bg-gradient-to-r from-purple-400 to-indigo-500">
      {children}
    </div>
  );
};

type ATMLayoutProps = {
  children: React.ReactNode;
};
