import React from "react";
import { FlatList, Text } from "react-native";

const ExpensesList = ({ expenses }: any) => {
  function renderExpenseItem(itemData: any) {
    return <Text>{itemData.item.description}</Text>;
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
