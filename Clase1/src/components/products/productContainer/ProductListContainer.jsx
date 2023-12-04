import { View, FlatList} from "react-native";
import React from "react";

import Product from "./Product.jsx";

import { StylesProductContainer } from "./StylesProductContainer.jsx";

const ProductListContainer = ({products,onModal}) => {
  return (
    <View style={StylesProductContainer.listContainer}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Product item={item} onModal={onModal} />}
      />
    </View>
  );
};

export default ProductListContainer;
