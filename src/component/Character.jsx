import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import defaultImage from "../assets/pottervector.jpg";

function Character() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  // const defaultImage = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hokokyew.com.my%2F%3Fq%3Dharry-potter-wikipedia-bb-88LznmSJ&psig=AOvVaw3NQzfX7DrthDz-DX_zFnct&ust=1722262973894000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLCet-T3yYcDFQAAAAAdAAAAABAJ';
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://potterhead-api.vercel.app/api/characters"
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
   <Link to="/character">
      <div className="p-4">
        <h1 className="text-2xl mb-4">Character Data</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {data.map((item, index) => (
            <div key={index} 
            className="hover:scale-105 transition-all duration-200 bg-white rounded-lg overflow-hidden shadow-lg shadow-orange-500">
             {item.image ?
             (<img 
              src={item.image}
              alt="character" className="w-full h-[460px] object-cover"/>):("")}
             
             
              {/* <img
               src={item.image || defaultImage} alt="character" className="w-full h-[460px] object-cover" /> */}
              <div className="p-4">
                <h2 className="text-lg font-semibold">{item.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
   </Link>
   
  )
}

export default Character