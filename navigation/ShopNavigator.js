import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Platform } from "react-native";
import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import Colors from "../Colors/Colors";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import CratScreen from "../screens/shop/CratScreen";
import OrderScreen from "../screens/shop/OrderScreen";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import UserProductScreen from "../screens/user/UserProductScreen";
import EditProductScreen from "../screens/user/EditProductScreen";

const defulaNavOp = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primeryColor : "",
  },

  headerTintColor: Platform.OS === "android" ? "white" : Colors.primeryColor,
};

const productNavigator = createStackNavigator(
  {
    productOverview: ProductsOverviewScreen,
    productDetail: ProductDetailScreen,
    cart: CratScreen,
  },
  {
    navigationOptions: {
      drawerIcon: (drawerConfig) => (
        <Ionicons
          name={Platform.OS === "android" ? "cart-outline" : "ios-cart"}
          size={23}
        />
      ),
    },
    defaultNavigationOptions: defulaNavOp,
  }
);

const OrdersNavigator = createStackNavigator(
  {
    orders: OrderScreen,
  },
  {
    navigationOptions: {
      drawerIcon: (drawerConfig) => (
        <Ionicons
          name={Platform.OS === "android" ? "md-list" : "ios-list"}
          size={23}
        />
      ),
    },
    defaultNavigationOptions: defulaNavOp,
  }
);
const AdminNavigator = createStackNavigator(
  {
    userProducts: UserProductScreen,
    editProductScreen: EditProductScreen,
  },
  {
    navigationOptions: {
      drawerIcon: (drawerConfig) => (
        <Ionicons
          name={Platform.OS === "android" ? "md-create" : "ios-create"}
          size={23}
        />
      ),
    },
    defaultNavigationOptions: defulaNavOp,
  }
);
const ShopNavigator = createDrawerNavigator(
  {
    Products: productNavigator,
    Orders: OrdersNavigator,
    admin: AdminNavigator,
  },
  {
    contentOptions: {
      activeTintColor: Colors.primeryColor,
    },
  }
);

export default createAppContainer(ShopNavigator);
