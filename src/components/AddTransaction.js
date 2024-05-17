import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext); // Correctly destructure addTransaction from context
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    };

    addTransaction(newTransaction);
    setText(''); // Clear the input fields after submission
    setAmount(0);
  };

  return (
    <div>
      <h3>Add New Transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text"> 
          Text:
          </label>
          <input
           id="text"
            type="text"
            value={text}
            placeholder="Enter text..."
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount:
          </label>
          <input
           id="amount"
            type="number"
            value={amount}
            placeholder="Enter amount..."
            onChange={(e) => setAmount(parseFloat(e.target.value))}
          />
        </div>
        <button className="btn" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
