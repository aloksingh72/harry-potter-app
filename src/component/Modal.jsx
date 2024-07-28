
import React from "react";
// component me recieves karenge isopen onclose and book as props 
function Modal(props) {
  if (!props.isOpen) return null;

  return (
    <div className="fixed inset-0 bg-stone-500 bg-opacity-65 flex justify-center items-center">
      <div className="bg-white p-4 rounded shadow-lg max-w-sm w-full">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">{props.book.title}</h2>
          <button onClick={props.onClose} className="text-red-500">Close</button>
        </div>
        <div>
          {/* <img src={book.cover} alt={book.title} className="w-full h-auto" /> */}
          <p className="mt-2">Release Date: {props.book.release_date}</p>
          <p>No.of Pages: {props.book.pages} pages</p>
          
          <p>Description: {
          props.book.summary.length>100
            ?(props.book.summary.substring(0, 200)) + "...":(props.book.summary)
          }</p>

        </div>
      </div>
    </div>
  );
}

export default Modal;
