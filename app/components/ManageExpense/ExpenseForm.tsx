import { GlobalStyles } from "@/app/constants/styles";
import { getFormattedDate } from "@/app/util/Date";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../ui/Button";
import Input from "./Input";

function ExpenseForm({
  submitButtonLabel,
  cancelHandler,
  confirmHandler,
  defaultValues,
}: any) {
  const [inputs, setInputValues] = useState({
    amount: {
      isValid: true,
      value: defaultValues ? defaultValues.amount.toString() : "",
    },
    date: {
      isValid: true,
      value: defaultValues ? getFormattedDate(defaultValues.date) : "",
    },
    description: {
      isValid: true,
      value: defaultValues ? defaultValues.description : "",
    },
  });
  // bind() locks some arguments into a function before it runs, so React can call it later with the rest.
  function inputChangedHandler(inputIdentifier: string, enteredValue: string) {
    setInputValues((currInputValues) => {
      return {
        ...currInputValues,
        [inputIdentifier]: { value: enteredValue, isValid: true },
      };
    });
  }
  function submitHandler() {
    const expenseData = {
      // +in front of varaiable to convert to string
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };
    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() != "Invalid Date";
    const descriptionIsValid = expenseData.description.trim().length > 0;
    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      // Alert.alert("Invalid input", "Please check your input values");
      setInputValues((currInputs) => {
        return {
          amount: { value: currInputs.amount.value, isValid: amountIsValid },
          date: { value: currInputs.date.value, isValid: dateIsValid },
          description: {
            value: currInputs.description.value,
            isValid: descriptionIsValid,
          },
        };
      });
      return;
    }
    confirmHandler(expenseData);
  }
  const formIsInvalid =
    !inputs.amount.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid;
  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input
          style={styles.rowInput}
          label="Amount"
          invalid={!inputs.amount.isValid}
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangedHandler.bind(null, "amount"),
            value: inputs.amount.value,
          }}
        />
        <Input
          style={styles.rowInput}
          label="Date"
          invalid={!inputs.date.isValid}
          textInputConfig={{
            placeholder: " YYYY-MM-DD",
            maxlength: 10,
            onChangeText: inputChangedHandler.bind(null, "date"),
            value: inputs.date.value,
          }}
        />
      </View>
      <Input
        label="Description"
        invalid={!inputs.description.isValid}
        textInputConfig={{
          multiline: true,
          onChangeText: inputChangedHandler.bind(null, "description"),
          value: inputs.description.value,
        }}
      />
      {formIsInvalid && (
        <Text style={styles.errorText}>
          Invalid input values - please check your entered data
        </Text>
      )}
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={cancelHandler}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginVertical: 24,
    textAlign: "center",
  },
  inputsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
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
  errorText: {
    textAlign: "center",
    color: GlobalStyles.colors.error500,
    margin: 8,
  },
});
export default ExpenseForm;
