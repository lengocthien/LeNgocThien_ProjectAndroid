import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const SliderContainer = () => {
  const slides = [
    {
      id: 1,
      image: require('../../assets/slider2.jpg'),
    },
    {
      id: 2,
      image: require('../../assets/slider4.jpg'),
    },
    {
      id: 3,
      image: require('../../assets/slider5.jpg'),
    },
    // Add more slides as needed
  ];

  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.slideImage} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        data={slides}
        renderItem={renderItem}
        sliderWidth={300}
        itemWidth={250}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    alignItems: 'center',
  },
  slide: {
    width: 250,
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
  },
  slideImage: {
    width: '100%',
    height: '100%',
  },
});

export default SliderContainer;