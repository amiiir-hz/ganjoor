import { useState, ReactNode } from "react";

interface ShareModalProps {
  isOpen: boolean;
  onClose: any;
  children: ReactNode;
}

const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="modal-content w-1/3 rounded-lg shadow-md relative">
        <span
          className="close absolute top-2 right-4 text-gray-600 cursor-pointer text-2xl"
          onClick={onClose}
        >
          X
        </span>
        <div className="modal-body w-full">{children}</div>
      </div>
    </div>
  );
};

export default ShareModal;
