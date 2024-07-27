import React from "react";

const Modal = ({ data, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg">
        <span className="cursor-pointer" onClick={onClose}>
          &times;
        </span>
        <h2 className="text-xl mb-4">Modal Title</h2>
        {data ? (
          <div>
            <h3 className="font-semibold">Title: {data.title}</h3>
            <p>{data.description}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Modal;
