// MyContextProvider.js
import React, { useState, useEffect } from 'react';
import MyContext from './MyContext';
import axios from 'axios';

const MyContextProvider = ({ children }) => {
  const [posts, setPosts] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <MyContext.Provider value={{ posts, setPosts }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
