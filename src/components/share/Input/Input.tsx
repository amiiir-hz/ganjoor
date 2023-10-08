import React from "react";

interface ShareInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  placeholder?: string;
}

const ShareInput: React.FC<ShareInputProps> = ({
  value,
  onChange,
  className,
  placeholder,
}) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      className={`border border-text-100 text-3xl p-3 ${className}`}
      placeholder={placeholder}
    />
  );
};

export default ShareInput;
