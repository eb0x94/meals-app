import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

let IconButton = ({ onPress, icon, iconColor }) => {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => pressed && styles.pressEffect}
        >
            <Ionicons name={icon} size={24} color={iconColor} />
        </Pressable>
    );
};

const styles = StyleSheet.create({
    pressEffect: {
        opacity: 0.7,
    },
});

export default IconButton;
