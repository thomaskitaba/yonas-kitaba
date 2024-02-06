import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Sqlite = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from server using Axios
    axios.get('/api/data')
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Data from Server</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sqlite;
