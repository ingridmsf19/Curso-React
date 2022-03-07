import React, { useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "T P",
    amount: 200.0,
    date: new Date(2021, 2, 28),
  },

  { id: "e2", title: "New TV", amount: 300.0, date: new Date(2021, 2, 28) },
  {
    id: "e3",
    title: "Car Insurence",
    amount: 400.0,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "ND",
    amount: 100.0,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
};

export default App;
