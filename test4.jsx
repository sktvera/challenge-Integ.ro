import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Palindrome = () => {

  const [savePolindrome, setSavePolindrome] = useState('');
  const [dataApi, setDataApi] = useState('');

  // Function to handle saving the palindrome value
  const handleSavePolindrome = (event) => {
    const value = event.target.value;
    setSavePolindrome(value.toLowerCase().replace(/\s/g, ''));
  };

  // Function to handle form submission
  const handleSubmit = () => {
    const reversedPolindrome = savePolindrome.split('').reverse().join('');
    if (savePolindrome === reversedPolindrome) {
      setDataApi(savePolindrome);
    } else {
      console.log('No es un palíndromo');
      alert('No es un palíndromo');
    }
  };


/* ----------- axios api request ------------------------*/

  const [saveData, setSaveData] = useState();

  useEffect(() => {
    const handleSubmitForm = async () => {
      const url = "http://localhost:3000/palindrome";
      const result = await axios.post(url, {
        "savePolindrome": dataApi
      });
      setSaveData(result.data);
    }

    handleSubmitForm();
  }, [saveData]);

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
        <input
            onChange={handleSavePolindrome}
            name="polindrome"
            type="text"
            style={{
            padding: '10px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            marginRight: '10px'
        }}
        />
        <input
            type="submit"
            onClick={handleSubmit}
            style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
        }}
        />
    </div>
  );
};

export default Palindrome;
