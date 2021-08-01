import React from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ProductItem from "../../components/shop/ProductItem";
import * as cartActions from "../../store/actions/cart";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import Header from "../../components/UI/Header";
import Colors from "../../Colors/Colors";

export default function ProductsOverviewScreen(props) {
  const products = useSelector((state) => state.products.availableProducts);
  const dispatch = useDispatch();
  const onSeletedItem = (id, title) => {
    props.navigation.navigate("productDetail", {
      productId: id,
      productTitle: title,
    });
  };
  //   console.log(`headerButton`, <HeaderButtons></HeaderButtons>);
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <ProductItem
          image={itemData.item.imgUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onSelect={() => {
            onSeletedItem(itemData.item.id, itemData.item.title);
          }}
        >
          <Button
            color={Colors.primeryColor}
            title="View Detials"
            onPress={() => {
              onSeletedItem(itemData.item.id, itemData.item.tile);
            }}
          />
          <Button
            title="Add To Cart"
            onPress={() => {
              dispatch(cartActions.addToCart(itemData.item));
            }}
          />
        </ProductItem>
      )}
    />
  );
}
ProductsOverviewScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "All Product",
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
    headerRight: (
      <HeaderButtons HeaderButtonComponent={Header}>
        <Item
          title="cart"
          iconName="cart-outline"
          onPress={() => {
            navData.navigation.navigate("cart");
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({});
