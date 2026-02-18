import React from "react";
import { Text, View } from "react-native";

const ExpensesSummary = ({ expensesPeriod, expenses }: any) => {
  const expensesSum = expenses.reduce((sum: any, expense: any) => {
    return (sum += expense.amount);
  }, 0);
  return (
    <View>
      <Text>{expensesPeriod}</Text>
      <Text>${expensesSum.toFixed(2)}</Text>
    </View>
  );
};

export default ExpensesSummary;
