import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
const Footer = () => {
  const navigation = useNavigation(); // Đặt hook useNavigation trong hàm component
  return (
    <View style={styles.footer}>
       <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Icon name="home" size={20} color="#444" />
      </TouchableOpacity>
      
      {/* <TouchableOpacity style={styles.button}>
        <Icon name="heart" size={20} color="#FF0000" />
        <Text style={styles.buttonText}></Text>

      </TouchableOpacity> */}
      <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate('Profile')}
      >
        <Icon name="user" size={20} color="#444" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate('Nofication')}
      >
        <Icon name="bell" size={20} color="#444" />
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Cart')}
      >
        <Icon name="shopping-cart" size={20} color="#444" />
      </TouchableOpacity>


        <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate('Setting')}
      >
          <Icon name="cog" size={20} color="#444" />

        </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    marginHorizontal: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#e0e0e0',
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#444',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginLeft: 5,
  },
});

export default Footer;