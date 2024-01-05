// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

// const CategoryItem = ({ image, title }) => {
//   return (
//     <TouchableOpacity style={styles.categoryItem}>
//       <Image source={image} style={styles.categoryImage} />
//       <Text style={styles.categoryTitle}>{title}</Text>
//     </TouchableOpacity>
//   );
// };

// const Categories = () => {
//   const categories = [
    
//     { id: 5, title: 'Điện Thoại', image: require('../../assets/ip.png') },
//     { id: 6, title: 'Máy Tính', image: require('../../assets/mt.png') },
//     { id: 7, title: 'Máy Bay', image: require('../../assets/mbb.png') },


//     // Add more categories as needed
//   ];

//   return (
//     <View style={styles.container}>
//       {categories.map((category) => (
//         <CategoryItem
//           key={category.id}
//           title={category.title}
//           image={category.image}
//         />
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingHorizontal: 10,
//     marginBottom: 20,
//   },
//   categoryItem: {
//     flex: 1,
//     marginHorizontal: 5,
//     alignItems: 'center',
//   },
//   categoryImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 10,
//   },
//   categoryTitle: {
//     marginTop: 5,
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default Categories;
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const CategoryItem = ({ image, title, onPress }) => {
  return (
    <TouchableOpacity style={styles.categoryItem} onPress={onPress}>
      <Image source={image} style={styles.categoryImage} />
      <Text style={styles.categoryTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

const Categories = () => {
  const categories = [
    { id: 1, title: 'Điện Thoại', image: require('../../assets/ip.png') },
    { id: 2, title: 'Máy Tính', image: require('../../assets/mt.png') },
    { id: 3, title: 'Máy Bay', image: require('../../assets/mbb.png') },
    // Add more categories as needed
  ];

  const handleCategoryPress = (category) => {
    if (category.title === 'Điện Thoại') {
      // Gọi API hoặc thực hiện thao tác lấy sản phẩm smartphones
      // Ví dụ:
      fetch('https://dummyjson.com/products?category=smartphones')
        .then((response) => response.json())
        .then((data) => {
          // Xử lý dữ liệu sản phẩm tại đây
          console.log('Smartphones:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  };

  return (
    <View style={styles.container}>
      {categories.map((category) => (
        <CategoryItem
          key={category.id}
          title={category.title}
          image={category.image}
          onPress={() => handleCategoryPress(category)}
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