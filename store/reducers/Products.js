import PRODUCTS from "../../data/Dummy-data";
import Product from "../../models/Product";
import {
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
} from "../actions/Products";

const initialState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter((prod) => prod.ownerId === "u1"),
};

export default productReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_PRODUCT:
      const newProductList = state.userProducts.filter(
        (pid) => pid.id !== action.pid
      );
      return {
        ...state,
        userProducts: newProductList,
        availableProducts: state.availableProducts.filter(
          (pid) => pid.id !== action.pid
        ),
      };

    case CREATE_PRODUCT:
      const newProduct = new Product(
        new Date().toString(),
        "u1",
        action.productData.title,
        action.productData.imageUrl,
        action.productData.description,
        parseFloat(action.productData.price)
      );
      const afterCreationUserProduct = [...state.userProducts];
      afterCreationUserProduct.push(newProduct);
      const afterCreationAvialableProduct = [...state.userProducts];
      afterCreationAvialableProduct.push(newProduct);
      return {
        ...state,
        userProducts: afterCreationUserProduct,
        availableProducts: afterCreationAvialableProduct,
      };
    case UPDATE_PRODUCT:
      const updateProductIndex = state.userProducts.findIndex(
        (prod) => prod.id === action.pid
      );
      const updateProduct = new Product(
        state.userProducts[updateProductIndex].id,
        state.userProducts[updateProductIndex].ownerId,

        action.productData.title,
        action.productData.imageUrl,
        action.productData.description,
        state.userProducts[updateProductIndex].price
      );
      const updateProductIndexInAvialable = state.userProducts.findIndex(
        (prod) => prod.id === action.pid
      );

      const updateAvialableProduct = [...state.availableProducts];
      const updateUserProduct = [...state.userProducts];
      updateAvialableProduct[updateProductIndexInAvialable] = updateProduct;
      updateUserProduct[updateProductIndex] = updateProduct;
      return {
        ...state,
        userProducts: updateUserProduct,
        availableProducts: updateAvialableProduct,
      };
  }

  return state;
};
