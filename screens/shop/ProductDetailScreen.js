import React from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ProductDetail from "../../components/shop/ProductDetail";
import * as cartActions from "../../store/actions/cart";
export default function ProductDetailScreen(props) {
  const productId = props.navigation.getParam("productId");
  const product = useSelector((state) =>
    state.products.availableProducts.find((prod) => prod.id === productId)
  );
  const dispatch = useDispatch();
  return (
    <ProductDetail
      product={product}
      navigation={props.navigation}
      dispatch={dispatch}
    />
  );
}
ProductDetailScreen.navigationOptions = (navData) => {
  return {
    headerTitle: navData.navigation.getParam("productTitle"),
  };
};
const styles = StyleSheet.create({});
