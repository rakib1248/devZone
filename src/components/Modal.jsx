import React from "react";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-2xl shadow-lg w-11/12 max-w-md p-6 relative">
        {/* Close Button */}
        <button
          className=" absolute top-4 right-4 text-gray-500 hover:text-gray-700 font-bold text-3xl"
          onClick={onClose}>
          &times;
        </button>

        {/* Modal Title */}
        <h2 className="text-xl text-black font-semibold mb-4">{title}</h2>

        {/* Modal Content */}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
