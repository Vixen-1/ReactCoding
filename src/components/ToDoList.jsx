import React, { useState } from 'react';
import './style.css';

export default function ToDoList() {
  const [data, setData] = useState([]);
  const [item, setItem] = useState('');
  const [loading, setLoading] = useState(false);
  const [deleted, setDeleted] = useState({});

  const submit = async (e) => {
    setLoading(true);
    try {
      setData((d) => [
        ...d,
        {
          value: item,
          id: new Date(),
        },
      ]);
      setItem('');
      e.preventDefault();
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const deleteItem = (id) => {
    const deletedItem = data.filter((d) => d.id === id);
    setDeleted(deletedItem);
    const newData = data.filter((d) => d.id !== id);
    setData(newData);
  };

  const reset = () => {
    setData((d) => [...d, { value: deleted.value, id: new Date() }]);
  };

  const newStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  };

  return (
    <div style={newStyle}>
      <form onSubmit={submit} style={newStyle}>
        <div>
          <label>Enter item: </label>
          <input
            type="text"
            name="text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
        </div>

        <button type="submit">{loading ? 'Adding....' : 'Add Item'}</button>
      </form>
      {data && (
        <ul>
          {data.map((d) => (
            <li key={d.id}>
              {d.value} <button onClick={() => deleteItem(d.id)}>delete</button>
            </li>
          ))}
        </ul>
      )}
      {deleted.length > 0 && <button onClick={reset}>Reset Item</button>}
    </div>
  );
}
