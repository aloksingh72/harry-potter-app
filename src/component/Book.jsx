import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Modal from "./Modal";

function Book() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  // is modal se controls kar sakte hai  visibility of modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  // selected book store karega data jo modal me show karna hai
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://potterhead-api.vercel.app/api/books"
        );
        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    getData();
  }, []);

  // open the modal with the selected books data
  const handleOpenModal = (book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };
  // closes the modal and clears the selected book

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedBook(null);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="p-4">
      <Link to="/">
        <h1 className="text-2xl mb-4">Data from Book API</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {data.map((item, index) => (
            <div
            // Each child in a list should have a unique "key" prop how we resolve this to resolve this i use index and id both as key parameter
              key={item.id || index} 
              className="hover:scale-105 transition-all duration-200 px-2 max-w-[400px] mb-4"
              onClick={() => handleOpenModal(item)}
            >
              <div className="bg-white rounded-lg overflow-hidden w-[300px] shadow-md shadow-slate-700">
                <img
                  src={item.cover}
                  alt="coverimage"
                  className="w-full h-auto"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Link>
{/* Click karne se  book opens the modal with that book's details.
Conditionally  agar book selected hai then render the Modal component  */}
      {selectedBook && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          book={selectedBook}
        />
      )}
    </div>
  );
}

export default Book;
