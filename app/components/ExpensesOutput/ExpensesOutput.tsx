import { GlobalStyles } from "@/app/constants/styles";
import { StyleSheet, Text, View } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

export const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "Groceries",
    amount: 2450,
    date: new Date("2026-01-26"),
  },
  {
    id: "e2",
    description: "Electricity Bill",
    amount: 1800,
    date: new Date("2026-01-24"),
  },
  {
    id: "e3",
    description: "Internet Recharge",
    amount: 999,
    date: new Date("2026-01-22"),
  },
  {
    id: "e4",
    description: "Fuel",
    amount: 3200,
    date: new Date("2026-01-20"),
  },
  {
    id: "e5",
    description: "Dining Out",
    amount: 1500,
    date: new Date("2026-01-18"),
  },
  {
    id: "e6",
    description: "Movie Tickets",
    amount: 600,
    date: new Date("2026-01-16"),
  },
  {
    id: "e7",
    description: "Gym Membership",
    amount: 1200,
    date: new Date("2026-01-14"),
  },
  {
    id: "e8",
    description: "Cab Fare",
    amount: 450,
    date: new Date("2026-01-12"),
  },
  {
    id: "e9",
    description: "Mobile Repair",
    amount: 2200,
    date: new Date("2026-01-10"),
  },
  {
    id: "e10",
    description: "Books & Stationery",
    amount: 875,
    date: new Date("2026-01-08"),
  },
];
function ExpensesOutput({ expenses, expensesPeriod, fallbackText }: any) {
  let content = <Text style={styles.infoText}>{fallbackText}</Text>;

  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />;
  }
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} expensesPeriod={expensesPeriod} />
      {content}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  infoText: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    marginVertical: 12,
  },
});
export default ExpensesOutput;
