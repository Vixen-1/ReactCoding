import React, { useState } from 'react';

export default function FetchData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      );
      if (!response.ok) throw new Error('Network Error');
      const newData = await response.json();
      setData(newData);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const newStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: "center"
  }

  return (
    <div style={newStyle}>
      <h1>Hello StackBlitz!</h1>
      <button onClick={getData} disable={loading}>
        {loading ? 'Loading...' : 'Show Data'}
      </button>
      {data && (
        <ul>
          {data.map((d, index) => (
            <li key={`index_${index}`}>{d.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
