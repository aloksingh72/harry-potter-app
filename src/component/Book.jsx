import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Modal from "./Modal";



function Book() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
const[isModalOpen,setIsModalOpen] = useState(false);
const [modalData,setModalData] = useState(null); 


// ---------------- modal functions ------------------------------
const fetchData = async (id)=>{
  try{
    const response = await axios.get(`https://potterhead-api.vercel.app/api/books/${id}`);
    // const data = await response.json();
    setModalData(response.data);
    setIsModalOpen(true);
  }catch(error){
    console.error('Error fetching data:', error);
  }
}
const handleCardClick = (id) => {
  fetchData(id);
};

// -----------------data api fetching data ----------------
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  console.log(data);

  return (
    <div className="p-4">
      <Link to="/">
        <h1 className="text-2xl mb-4">Data from Book API</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {data.map((item) => (
            <div
              key={item.id}
              className="hover:scale-105 transition-all duration-200 px-2 max-w-[400px] mb-4"
            >
              <div
                onClick={() => handleCardClick(item.id)}
                className="bg-white rounded-lg overflow-hidden w-[300px] shadow-md shadow-slate-700"
              >
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
      {isModalOpen && (
        <Modal data={modalData} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
}

export default Book;
