import React from "react";
import { FlatList, StyleSheet, Text, View, Button } from "react-native";
import { Item } from "react-navigation-header-buttons";

import { useDispatch, useSelector } from "react-redux";
import Colors from "../../Colors/Colors";
import CradCart from "../../components/shop/CradCart";
import ProductItem from "../../components/shop/ProductItem";
import * as cartActions from "../../store/actions/cart";
import * as orderAction from "../../store/actions/orders";

export default function CratScreen(props) {
  const itemsOnCart = useSelector((state) => {
    const transformedItemsOnCart = [];
    for (const key in state.cart.items) {
      transformedItemsOnCart.push({
        productId: key,
        quantity: state.cart.items[key].quantity,
        productTitle: state.cart.items[key].productTitle,
        productPrice: state.cart.items[key].productPrice,
        sum: state.cart.items[key].sum,
      });
    }
    return transformedItemsOnCart.sort((a, b) =>
      a.productId > b.productId ? 1 : -1
    );
  });
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const dispatch = useDispatch();

  return (
    <View style={styles.screen}>
      <View style={styles.summery}>
        <Text style={styles.summeryText}>
          Total:<Text style={styles.amount}>${totalAmount}</Text>
        </Text>
        <Button
          title="Order Now"
          disabled={itemsOnCart.length === 0 ? true : false}
          onPress={() => {
            dispatch(orderAction.addOrder(itemsOnCart, totalAmount));
          }}
        />
      </View>
      <View>
        <Text>CART ITEMS</Text>
      </View>
      <FlatList
        data={itemsOnCart}
        keyExtractor={(item) => item.productId}
        renderItem={(itemData) => {
          return (
            <CradCart
              quantity={itemData.item.quantity}
              productTitle={itemData.item.productTitle}
              productPrice={itemData.item.productPrice}
              onRemove={() => {
                dispatch(cartActions.removeFronCart(itemData.item.productId));
              }}
              from={true}
            />
          );
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    margin: 20,
  },
  summery: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 5,
    shadowColor: "black",
    shadowRadius: 0.26,
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: "white",
    padding: 10,
  },
  summeryText: {
    fontFamily: "open-sans",
  },
  amount: {
    color: Colors.sceundColor,
  },
});
