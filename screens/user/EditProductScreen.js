import React, { useCallback, useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Platform,
  Alert,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/UI/Header";
import * as productActions from "../../store/actions/Products";
export default function EditProductScreen(props) {
  const dispatch = useDispatch();
  const prodId = props.navigation.getParam("productId");
  const editProduct = useSelector((state) =>
    state.products.userProducts.find((pro) => {
      return pro.id === prodId;
    })
  );

  const [title, setTitle] = useState(editProduct ? editProduct.title : "");
  const [imageUrl, setImageUrl] = useState(
    editProduct ? editProduct.imgUrl : ""
  );
  const [price, setPrice] = useState(editProduct ? editProduct.price : 0);
  const [description, setDescription] = useState(
    editProduct ? editProduct.description : ""
  );
  const submitHandler = useCallback(() => {
    if (editProduct) {
      dispatch(
        productActions.updateProduct(prodId, title, imageUrl, description)
      );
    } else {
      dispatch(
        productActions.createProduct(title, imageUrl, description, price)
      );
      setImageUrl("");
      setPrice(0);
      setTitle("");
      setDescription("");
    }
    props.navigation.goBack();
  }, [editProduct, dispatch, prodId, title, description, imageUrl, price]);
  useEffect(() => {
    props.navigation.setParams({ submit: submitHandler });
  }, [submitHandler]);
  return (
    <ScrollView>
      <View style={styles.raperAll}>
        <View style={styles.raper}>
          <Text style={styles.label}>title</Text>
          <TextInput
            style={styles.input}
            placeholder="enter the name of the product"
            value={title}
            name="title"
            onChangeText={(title) => {
              setTitle(title);
            }}
          />
        </View>
        <View style={styles.raper}>
          <Text style={styles.label}>Image url</Text>
          <TextInput
            name="imageUrl"
            style={styles.input}
            placeholder="enter the product price"
            value={imageUrl}
            onChangeText={(img) => setImageUrl(img)}
          />
        </View>
        <View style={styles.raper}>
          <Text style={styles.label}>description</Text>
          <TextInput
            name="description"
            style={styles.input}
            placeholder="enter the product description"
            value={description}
            onChangeText={(desc) => {
              setDescription(desc);
            }}
          />
        </View>
        {editProduct ? null : (
          <View style={styles.raper}>
            <Text style={styles.label}>price</Text>
            <TextInput
              value={price}
              style={styles.input}
              placeholder="enter the price"
              onChangeText={(price) => {
                setPrice(price);
              }}
            />
          </View>
        )}
      </View>
    </ScrollView>
  );
}
EditProductScreen.navigationOptions = (navData) => {
  const editOrNew = navData.navigation.getParam("productId");
  return {
    headerTitle: editOrNew ? "edit product" : "create product",
    headerRight: (
      <HeaderButtons HeaderButtonComponent={Header}>
        <Item
          title="save"
          iconName={Platform.OS === "android" ? "md-save" : "ios-save"}
          onPress={() => {
            navData.navigation.getParam("submit")();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  raperAll: {
    margin: 20,
  },
  input: {
    paddingHorizontal: 2,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  raper: {
    width: "100%",

    justifyContent: "space-between",
  },
  label: { marginVertical: 9, fontFamily: "open-sans-bold" },
});
