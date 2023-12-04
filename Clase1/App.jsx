import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  FlatList,
  Modal,
} from "react-native";
import uuid from "react-native-uuid";

import { styles } from "./styles/styles.js";

import ModalDeleteProduct from "./src/components/products/productContainer/CRUD/ModalDeleteProduct.jsx";
import AddProduct from "./src/components/products/productContainer/CRUD/AddProduct.jsx";
import ProductListContainer from "./src/components/products/productContainer/ProductListContainer.jsx";
import ModalUpdateProduct from "./src/components/products/productContainer/CRUD/ModalUpdateProduct.jsx";

// import ModalDeleteProduct from "./src/components/products/productContainer/CRUD/ModalDeleteProduct.jsx";
// import AddProduct from "./src/components/products/productContainer/CRUD/AddProduct.jsx";
// import ProductListContainer from "./src/components/products/productContainer/ProductListContainer.jsx";

export default function App() {
  const [newTitleProduct, setNewTitleProduct] = useState("");
  const [newPriceProduct, setNewPriceProducts] = useState("");
  const [products, setProducts] = useState([]);
  const [productSelected, setProductSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const [updatedTitleProduct, setUpdatedTitleProduct] = useState("");
  const [updatedPriceProduct, setUpdatedPriceProducts] = useState("");

  const handlerAddProduct = () => {
    const newProduct = {
      id: uuid.v4(),
      title: newTitleProduct,
      price: newPriceProduct,
    };

    setProducts((current) => [...current, newProduct]);
    setNewTitleProduct("");
    setNewPriceProducts("");
  };

  const handlerModal = (item) => {
    setProductSelected(item);
    setUpdatedTitleProduct(item.title);
    setUpdatedPriceProducts(item.price);
    setModalVisible(true);
  };
  const handlerDeleteProduct = () => {
    setProducts((current) =>
      current.filter((product) => product.id !== productSelected.id)
    );
    setModalVisible(false);
  };

  const handleUpdateProduct = () => {
    setProducts((actuales) =>
      actuales.map((producto) =>
        producto.id === productSelected.id
          ? {
              ...producto,
              title: updatedTitleProduct || producto.title,
              price: updatedPriceProduct || producto.price,
            }
          : producto
      )
    );
  
    // Reiniciar el formulario y cerrar el modal
    setUpdatedTitleProduct("");
    setUpdatedPriceProducts("");
    setModalVisible(false);
  };
  

  return (
    <View style={styles.container}>
      <AddProduct
        valueTitle={newTitleProduct}
        valuePrice={newPriceProduct}
        onChangeTitle={setNewTitleProduct}
        onChangePrice={setNewPriceProducts}
        addProduct={handlerAddProduct}
      />
      <ProductListContainer products={products} onModal={handlerModal} />
      <ModalDeleteProduct
        product={productSelected}
        visible={modalVisible}
        onModal={handlerModal}
        onDelete={handlerDeleteProduct}
      />
      <ModalUpdateProduct
        title={updatedTitleProduct}
        price={updatedPriceProduct}
        visible={modalVisible}
        onModal={handlerModal}
        onUpdate={handleUpdateProduct}
        onChangeTitle={setUpdatedTitleProduct}
        onChangePrice={setUpdatedPriceProducts}
      />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#FFFFFF",
//     alignItems: "center",
//     justifyContent: "center",
//   },

//   buttonContainer: {
//     backgroundColor: 'blue',
//     padding: 10,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: 'white',
//     textAlign: 'center',
//   },
// });
