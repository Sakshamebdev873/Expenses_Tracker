import { Stack } from "expo-router";
import { GlobalStyles } from "../constants/styles";

export default function ExpensesLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
      }}
    >
      <Stack.Screen
        name="ManageExpenseOverview"
        options={{
          title: "Manage Expenses",
          headerTintColor: "white",
          presentation: "modal",
        }}
      />
    </Stack>
  );
}
