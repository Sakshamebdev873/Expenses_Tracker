import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import ExpensesContextProvider from "./store/expenses-context";

export default function RootLayout() {
  return (
    <>
      <ExpensesContextProvider>
        <StatusBar barStyle="dark-content" />
        <Stack screenOptions={{ headerShown: false }} />
      </ExpensesContextProvider>
    </>
  );
}
