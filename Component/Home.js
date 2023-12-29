import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from "./home/search"
import Categories from "./home/Category"
import SliderContainer from "./home/slider"
import AllProduct from "./home/AllProduct"

const Home = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.searchContainer}>
                <SearchBar />
            </View>
            <View style={styles.sliderContainer}>
                <SliderContainer />
            </View>
            <View style={styles.categoryContainer}>
                <Categories />
            </View>
            <View style={styles.productContainer}>
                <AllProduct />
                {/* All product components go here */}
            </View>
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    searchContainer: {
        // Style the search container as per your requirements
    },
    sliderContainer: {
        // Style the slider container as per your requirements
    },
    categoryContainer: {
        // Style the category container as per your requirements
    },
    productContainer: {
        // Style the product container as per your requirements
    },
});

export default Home;





//----------------------------------------------