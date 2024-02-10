// MyContextProvider.js
import React, { useState, useEffect } from 'react';
import MyContext from './MyContext';
import axios from 'axios';

const MyContextProvider = ({ children }) => {
  const [database, setDatabase] = useState('');
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


  return (
    <MyContext.Provider value={{ database, setDatabase, userName, setUserName,userEmail, setUserEmail }}>

      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
