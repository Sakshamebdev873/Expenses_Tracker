import { Ionicons } from "@expo/vector-icons";
import { router, Tabs } from "expo-router";
import IconButton from "../components/ui/IconButton";
import { GlobalStyles } from "../constants/styles";
export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({ tintColor }) => (
          <IconButton
            name="add"
            size={24}
            color={tintColor}
            onPress={() => {
              router.push("/expenses/ManageExpenseOverview");
            }}
          />
        ),
      }}
    >
      <Tabs.Screen
        name="RecentExpenseOverview"
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, size }: any) => {
            return <Ionicons name="hourglass" size={size} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="AllExpenseOverview"
        options={{
          title: "All Expense",
          tabBarLabel: "All Expenses",
          tabBarIcon: ({ color, size }: any) => {
            return <Ionicons name="calendar" size={size} color={color} />;
          },
        }}
      />
    </Tabs>
  );
}
