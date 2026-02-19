import React from "react";
import { FlatList } from "react-native";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({ expenses }: any) => {
  function renderExpenseItem(itemData: any) {
    return <ExpenseItem {...itemData.item} />;
  }
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ExpensesList;
