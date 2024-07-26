import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Movies() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://potterhead-api.vercel.app/api/movies"
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
    <Link to="/movies">
      <div className="p-4">
        <h1 className="text-2xl mb-4">Houses Data</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {data.map((item, index) => (
            <div key={index} className="hover:scale-105 transition-all duration-200 bg-white rounded-lg overflow-hidden shadow-lg shadow-orange-500">
              <img src={item.poster} alt="character" className="w-full h-[460px] object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-semibold">Release Date-{item.release_date}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default Movies;
