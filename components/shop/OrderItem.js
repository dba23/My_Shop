import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import CradCart from "./CradCart";

export default function OrderItem(props) {
  const [showDetail, setshowDetail] = useState(false);
  return (
    <View style={styles.orderItem}>
      <View style={styles.summery}>
        <Text style={styles.amount}>${props.amount}</Text>
        <Text style={styles.date}>{props.date}</Text>
      </View>
      <Button
        title="show detail"
        onPress={() => {
          setshowDetail((prev) => !prev);
        }}
      />

      {showDetail && (
        <View style={{ width: "100%" }}>
          {props.items.map((cartItem) => {
            return (
              <CradCart
                quantity={cartItem.quantity}
                productPrice={cartItem.productPrice}
                productTitle={cartItem.productTitle}
                from={false}
              />
            );
          })}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  orderItem: {
    shadowColor: "black",
    shadowRadius: 8,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
    backgroundColor: "white",

    margin: 20,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
  summery: {
    flexDirection: "row",
    justifyContent: "space-between",

    alignContent: "center",
    width: "100%",
    marginBottom: 15,
  },
  amount: {
    fontFamily: "open-sans-bold",
    fontSize: 23,
  },
  date: {
    fontFamily: "open-sans",
    fontSize: 16,
  },
});
