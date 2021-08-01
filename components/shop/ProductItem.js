import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import Colors from "../../Colors/Colors";

export default function ProductItem(props) {
  const TouchableOpacityOnVersions =
    Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;

  return (
    <View style={styles.product}>
      <View style={styles.TouchableCont}>
        <TouchableOpacityOnVersions onPress={props.onSelect} useForeground>
          <View>
            <View style={styles.imageCont}>
              <Image style={styles.image} source={{ uri: props.image }} />
            </View>

            <View style={styles.textCont}>
              <Text style={styles.title}>{props.title}</Text>
              <Text style={styles.price}> ${props.price.toFixed(2)} </Text>
            </View>

            <View style={styles.btnContiner}>{props.children}</View>
          </View>
        </TouchableOpacityOnVersions>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  product: {
    shadowColor: "black",
    shadowRadius: 8,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
    backgroundColor: "white",
    height: 300,
    margin: 20,
    borderRadius: 10,
  },
  TouchableCont: { overflow: "hidden", borderRadius: 10 },
  image: {
    height: "100%",
    width: "100%",
  },
  btnContiner: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: "25%",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    marginVertical: 4,
    fontFamily: "open-sans-bold",
  },
  price: {
    fontSize: 14,
    color: "#888",
  },
  textCont: {
    height: "15%",
    flexDirection: "row",
    justifyContent: "center",
  },
  imageCont: {
    height: "60%",
    width: "60%",
    borderRadius: 10,
  },
});
