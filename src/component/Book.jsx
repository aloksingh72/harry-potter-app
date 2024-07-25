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
          "https://potterapi-fedeperin.vercel.app/en/books"
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
    <div>
      <Link to="/">
        <h1>data from book api</h1>
        <ul>
          {data.map((item, index) => (
            <div>
              <img src={item.cover} alt="" />
 <li key={index}>{item.title}</li> // unique key use karenge for each item
            </div>
           
          ))}
        </ul>
      </Link>
    </div>
  );
}

export default Book;
