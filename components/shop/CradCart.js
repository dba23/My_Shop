import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
export default function CradCart(props) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignContent: "space-between",
      }}
    >
      <View style={styles.textContainer}>
        <Text>
          <Text>
            {props.quantity}
            {"       "}{" "}
          </Text>
          <Text>
            {props.productTitle} {"       "}{" "}
          </Text>

          <Text>{props.productPrice}</Text>
        </Text>
      </View>
      {props.from && (
        <TouchableOpacity onPress={props.onRemove} style={{ margin: 20 }}>
          <Ionicons
            name={Platform.OS === "android" ? "md-trash" : "ios-trash"}
            size={23}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 25,
    paddingTop: 20,
  },
});
