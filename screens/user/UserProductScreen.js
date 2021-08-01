import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  Platform,
  Alert,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../../components/shop/ProductItem";
import Header from "../../components/UI/Header";
import * as productAction from "../../store/actions/Products";
export default function UserProductScreen(props) {
  const userProducts = useSelector((state) => state.products.userProducts);
  const dispatch = useDispatch();
  const editProductHandler = (id) => {
    props.navigation.navigate("editProductScreen", { productId: id });
  };
  const deleteHandler = () => {};
  return (
    <FlatList
      data={userProducts}
      keyExtractor={(item) => {
        return item.id;
      }}
      renderItem={(itemData) => {
        return (
          <ProductItem
            image={itemData.item.imgUrl}
            price={itemData.item.price}
            title={itemData.item.title}
            onSelect={() => {
              editProductHandler(itemData.item.id);
            }}
          >
            <Button
              color="red"
              title="remove"
              onPress={() => {
                Alert.alert("delete??", "Are you sure you want to delete?!", [
                  { text: "NO", style: "defult" },
                  {
                    text: "Yes",
                    style: "destructive",
                    onPress: () => {
                      dispatch(productAction.deletProduct(itemData.item.id));
                    },
                  },
                ]);
              }}
            />
            <Button
              title="edit"
              onPress={() => {
                editProductHandler(itemData.item.id);
              }}
            />
          </ProductItem>
        );
      }}
    />
  );
}

UserProductScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "User Products",
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
          title="menu"
          iconName={Platform.OS === "android" ? "md-create" : "ios-create"}
          onPress={() => {
            navData.navigation.navigate("editProductScreen");
          }}
        />
      </HeaderButtons>
    ),
  };
};
const styles = StyleSheet.create({});
