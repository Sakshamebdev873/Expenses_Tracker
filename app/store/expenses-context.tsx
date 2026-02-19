import { createContext, useReducer } from "react";
import { DUMMY_EXPENSES } from "../components/ExpensesOutput/ExpensesOutput";
type Expense = {
  id: number;
  amount: number;
  description: string;
  date: string;
};
export const ExpensesContext = createContext({
  expenses: [] as Expense[],
  addExpense: ({ description, amount, date }: any) => {},
  deleteExpense: (id: any) => {},
  updateExpense: (id: any, { description, amount, date }: any) => {},
});
function expensesReducer(state: any, action: any) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense: any) => expense.id === action.payload.id,
      );

      const updatedItem = {
        ...state[updatableExpenseIndex],
        ...action.payload.data,
      };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;

      return updatedExpenses;
    case "DELETE":
      return state.filter((expense: any) => expense.id != action.payload);
    default:
      return state;
  }
}
function ExpensesContextProvider({ children }: any) {
  const [expensesState, dispatch] = useReducer<any, any>(
    expensesReducer,
    DUMMY_EXPENSES,
  );
  function addExpense(expenseData: any) {
    dispatch({ type: "ADD", payload: expenseData });
  }
  function deleteExpense(id: any) {
    dispatch({ type: "DELETE", payload: id });
  }
  function updateExpense(id: any, expenseData: any) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }
  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };
  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}
export default ExpensesContextProvider;
