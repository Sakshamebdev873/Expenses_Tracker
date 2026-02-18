import { Stack } from "expo-router";

export default function ExpensesLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="ManageExpenseOverview"
        options={{ title: "Manage Expenses" }}
      />
    </Stack>
  );
}
