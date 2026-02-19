import { GlobalStyles } from "@/app/constants/styles";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  View,
} from "react-native";

function Input({ label, style, textInputConfig, invalid }: any) {
  const inputStyles: StyleProp<TextStyle> = [
    styles.input,
    textInputConfig?.multiline && styles.inputMultiline,
    invalid && styles.invalidInput,
  ];

  return (
    <View style={[style, styles.inputConatiner]}>
      <Text style={[styles.label, invalid && styles.invalidLabel]}>
        {label}
      </Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  );
}
export default Input;
const styles = StyleSheet.create({
  inputConatiner: {
    marginHorizontal: 4,
    marginVertical: 16,
  },
  label: {
    fontSize: 12,
    color: GlobalStyles.colors.primary100,
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary100,
    color: GlobalStyles.colors.primary700,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
  },
  inputMultiline: {
    minHeight: 100,
  },
  invalidLabel: {
    color: GlobalStyles.colors.error500,
  },
  invalidInput: {
    backgroundColor: GlobalStyles.colors.error50,
  },
});
