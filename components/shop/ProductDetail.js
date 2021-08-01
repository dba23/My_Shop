import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Image,
} from "react-native";
import * as cartActions from "../../store/actions/cart";
export default function ProductDetail(props) {
  return (
    <View style={styles.container}>
      <View style={styles.imgCont}>
        <Image style={styles.img} source={{ uri: props.product.imgUrl }} />
      </View>

      <View style={styles.txtCont}>
        <Text>{props.product.title}</Text>
        <Text style={{ marginHorizontal: 50, alignSelf: "center" }}>
          {props.product.description}
        </Text>
        <Text>${props.product.price}</Text>
      </View>

      <View style={styles.btnCont}>
        <Button
          title="BACk"
          onPress={() => {
            props.navigation.navigate("productOverview");
          }}
        />
        <Button
          title="ADD"
          onPress={() => {
            props.dispatch(cartActions.addToCart(props.product));
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
  img: { height: "100%", width: "100%" },
  imgCont: {
    width: "100%",
    height: "30%",
  },
  txtCont: {
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 10,
    shadowColor: "black",
    height: "40%",
    shadowRadius: 0.26,
    borderRadius: 5,
    borderWidth: 1,
  },
  btnCont: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    margin: 10,
  },
});
