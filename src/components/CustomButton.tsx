import type { ReactNode } from "react";

interface CustomButtonProps {
  children: ReactNode;
  className?: string;
  icon?: string;
  color: string;
}

const CustomButton = ({
  children,
  className,
  icon,
  color,
}: CustomButtonProps) => {
  return (
    <button
      className={`flex gap-1 border-${color} items-center md:py-2 py-1 md:pr-2 pr-1  rounded-full border ${
        className ?? ""
      }`}
    >
      {icon && (
        <span className={`rounded-full border border-${color} px-2 py-3`}>
          <img src={icon} alt="" />
        </span>
      )}
      {children}
    </button>
  );
};

export default CustomButton;
