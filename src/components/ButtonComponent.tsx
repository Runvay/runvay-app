"use client";

interface ButtonProps {
  ButtonName: string;
  TextColor: string;
  ButtonColor1: string;
  ButtonColor2: string;
  className?: string;
  width?:string;
  onClick?: () => void;  
}

const ButtonComponent = ({
  ButtonName,
  ButtonColor1,
  ButtonColor2,
  TextColor,
  className = "",
  width="w-64",
  onClick,  
}: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}  
      className={`${width} ${ButtonColor1} ${TextColor} py-2 px-4 rounded-lg ${ButtonColor2} transition-all duration-300 ${className}`}
    >
      {ButtonName}
    </button>
  );
};

export default ButtonComponent;
