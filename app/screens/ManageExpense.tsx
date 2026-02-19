import { router, useLocalSearchParams, useNavigation } from "expo-router";
import React, { useContext, useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import Button from "../components/ui/Button";
import IconButton from "../components/ui/IconButton";
import { GlobalStyles } from "../constants/styles";
import { ExpensesContext } from "../store/expenses-context";

const ManageExpense = () => {
  const navigation = useNavigation();
  const expensesCtx = useContext(ExpensesContext);
  const editedExpenseId = useLocalSearchParams<{ expenseId?: string }>();
  //  !! used to convert to boolean
  const isEditing = !!editedExpenseId.expenseId;
  // it is used when we want to set any configuraion in the header and in react it is run synchronously before painting the ui onto the screen
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);
  function cancelHandler() {
    navigation.goBack();
  }
  function confirmHandler() {
    if (isEditing) {
      expensesCtx.updateExpense(editedExpenseId.expenseId!, {
        description: "Test!!!!",
        amount: 29.99,
        date: new Date("2026-02-19"),
      });
    } else {
      expensesCtx.addExpense({
        description: "Test!!!!",
        amount: 29.99,
        date: new Date("2026-02-19"),
      });
    }

    router.back();
  }
  function deleteExpensesHandler() {
    expensesCtx.deleteExpense(editedExpenseId.expenseId);
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={cancelHandler}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={confirmHandler}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteConatiner}>
          <IconButton
            name="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpensesHandler}
          />
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteConatiner: {
    marginTop: 15,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
export default ManageExpense;
