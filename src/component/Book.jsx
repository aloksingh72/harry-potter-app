import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Book() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
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
        <h1 className="text-2xl mb-4 ">Data from Book API</h1>

        <div className="flex  w-[full] mx-2 gap-9">
        {data.map((item, index) => (
          <div key={index} className=" px-2 mb-4 ">
            
            {/* card ki div */}
            <div className="bg-white  rounded-lg overflow-hidden w-[300px] shadow-md">
              <img src={item.cover} alt="coverimage" className="w-full h-auto" />
              {/* unique key use karenge for each items */}
              <div className="p-4">
              <h2 className="text-lg font-semibold">{item.title}</h2>
              </div>
              
            
            </div>
          </div>
          ))}
        </div>
      </Link>
    </div>
  );
}

export default Book;
