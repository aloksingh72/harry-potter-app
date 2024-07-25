import axios from "axios";
import React, { useEffect, useState } from "react";

function Spell() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://potterhead-api.vercel.app/api/spells"
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
      <h1 className="text-2xl mb-4 text-center font-bold">Data from Spell API</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden 
          shadow-lg shadow-slate-700 transform transition duration-300 hover:scale-105">
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-2">{item.name}</h2>
              <p className="text-gray-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Spell;
