interface ButtonProps {
  text: string;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const ShareButton: React.FC<ButtonProps> = ({
  text,
  onClick,
  className,
  type = "button",
  disabled,
}) => {
  return (
    <button
      type={type}
      className={`hover:brightness-75 transition-all bg-text-100 text-bg-100 py-2 px-3 w-full border border-text-200 rounded-md ${className} ${
        disabled ? "bg-bg-300 hover:brightness-50 brightness-50" : ""
      } `}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
export default ShareButton;
