import { StyleSheet } from "react-native";
import { COLOURS } from "../../../assets/items";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const homeStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOURS.white,

    },
    innerContainer: {
        flex: 1,
        position: 'relative',
        backgroundColor: COLOURS.white,
    }
});