import React from "react";
import { useState } from "react/cjs/react.development";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  //const [userInput, setUserInput] = useState({
  //enteredTitle:'',
  // enteredAmount: '',
  //enteredDate:''
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    //setUserInput({
    // ...userInput,
    // enteredTitle: event.target.value,

    // })

    // setUserInput((prevState) => {
    // return {...prevState, enteredTitle: event.target.value};
    //}); Maneira mais segura que a segunda alternativa
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    //setUserInput({
    // ...userInput,
    // enteredAmount: event.target.value,

    //})
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //...userInput,
    //enteredDate: event.target.value,

    //})
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Título</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Valor</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Data</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancelar</button>
        <button type="submit">Adicionar Despesa</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
