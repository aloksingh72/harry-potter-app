
import React from "react";
// component me recieves karenge isopen onclose and book as props 
function Modal({ isOpen, onClose, book }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded shadow-lg max-w-sm w-full">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">{book.title}</h2>
          <button onClick={onClose} className="text-red-500">Close</button>
        </div>
        <div>
          {/* <img src={book.cover} alt={book.title} className="w-full h-auto" /> */}
          <p className="mt-2">Release Date: {book.release_date}</p>
          <p>No.of Pages: {book.pages} pages</p>
          
          <p>Description: {
          book.summary.length>100
            ?(book.summary.substring(0, 200)) + "...":(book.summary)
          }</p>

        </div>
      </div>
    </div>
  );
}

export default Modal;
