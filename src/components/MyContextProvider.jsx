// MyContextProvider.js
import React, { useState, useEffect } from 'react';
import MyContext from './MyContext';
import axios from 'axios';

const MyContextProvider = ({ children }) => {
  const [Database, setDatabase] = useState('');
  const [userName, setUserName] = useState('Guest');
  const [userEmail, setUserEmail] = useState('Guest-email');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000');
        setDatabase(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  // unpack all table data to thir corrosponding variables
  const [posts, comments, postComments, replies, users, metadata ] = Database;

  return (
    <MyContext.Provider value={{ Database, setDatabase, userName, setUserName,userEmail, setUserEmail }}>

      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
