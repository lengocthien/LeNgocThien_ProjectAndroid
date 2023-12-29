import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const CategoryItem = ({ image, title }) => {
  return (
    <TouchableOpacity style={styles.categoryItem}>
      <Image source={image} style={styles.categoryImage} />
      <Text style={styles.categoryTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

const Categories = () => {
  const categories = [
    
    { id: 5, title: 'Điện Thoại', image: require('../../assets/ip.png') },
    { id: 6, title: 'Máy Tính', image: require('../../assets/mt.png') },
    { id: 7, title: 'Máy Bay', image: require('../../assets/mbb.png') },


    // Add more categories as needed
  ];

  return (
    <View style={styles.container}>
      {categories.map((category) => (
        <CategoryItem
          key={category.id}
          title={category.title}
          image={category.image}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  categoryItem: {
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  categoryImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  categoryTitle: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Categories;