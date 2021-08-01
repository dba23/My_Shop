import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import Header from "../../components/UI/Header";
import OrderItem from "../../components/shop/OrderItem";

export default function OrderScreen(props) {
  const orders = useSelector((state) => state.orders.orders);
  return (
    <FlatList
      data={orders}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => {
        return (
          <OrderItem
            amount={itemData.item.totalAmount}
            date={itemData.item.readableDate}
            items={itemData.item.items}
          />
        );
      }}
    />
  );
}
OrderScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Oreder",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={Header}>
        <Item
          title="menu"
          iconName="menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};
const styles = StyleSheet.create({});
