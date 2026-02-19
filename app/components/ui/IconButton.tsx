import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";

function IconButton({ name, size, color, onPress }: any) {
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressed}
      onPress={onPress}
    >
      <View style={styles.buttonContainer}>
        <Ionicons size={size} color={color} name={name} />
      </View>
    </Pressable>
  );
}
export default IconButton;
const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 24,
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 2,
  },
  pressed: {
    opacity: 0.75,
  },
});
