
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AllProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProduct();
  }, []);
  const navigation = useNavigation();

  const getAllProduct = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products');

      setProducts(response.data.products);
    } catch (error) {
      alert(error.message);
    }
  };

  const renderProduct = ({ item, navigation }) => (
    <TouchableOpacity style={styles.productItem} onPress={() => navigation.navigate('ProductDetail', { product: item })}>
      <Image source={{ uri: item.images[0] }} style={styles.productImage} />
      <Text style={styles.productName}>{item.title}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <View style={styles.catetitle}>
        <Text style={styles.titleText}>Sản phẩm</Text>
        <Text style={styles.viewMoreText}>Xem thêm</Text>
      </View>
      <FlatList
        data={products}
        renderItem={({ item }) => renderProduct({ item, navigation })}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.productList}
        
      />
      



    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  catetitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    paddingHorizontal: 10,
  },
  titleText: {
    fontSize: 20,
    color: 'red',
    fontWeight: '600',
  },
  viewMoreText: {
    fontSize: 15,
  },
  productItem: {
    flex: 1,
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
    marginHorizontal: 5,
  },
  productImage: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    resizeMode: 'cover',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  productName: {
    color: 'black',
    textAlign: 'center',
    marginBottom: 4,
    fontWeight: 'bold',
    fontSize: 16,
  },
  productPrice: {
    color: 'black',
    textAlign: 'center',
    marginBottom: 4,
    fontSize: 14,
  },
  productList: {
    paddingHorizontal: 5,
  },
});

export default AllProduct;
