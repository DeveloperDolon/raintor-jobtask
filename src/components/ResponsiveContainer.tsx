import type { ReactNode } from "react";

interface ResponsiveContainerProps {
  className?: string;
  children: ReactNode;
}

const ResponsiveContainer = ({
  className,
  children,
}: ResponsiveContainerProps) => {
  return (
    <div className={`max-w-7xl mx-auto lg:px-0 sm:px-10 px-5 ${className}`}>
      {children}
    </div>
  );
};

export default ResponsiveContainer;
