import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const products = [
    { name: 'Product 1', image: require('../assets/icon.png') },
    { name: 'Product 2', image: require('../assets/icon.png') },
    { name: 'Product 3', image: require('../assets/icon.png') },
    { name: 'Product 4', image: require('../assets/icon.png') },
    { name: 'Product 5', image: require('../assets/icon.png') },
    { name: 'Product 6', image: require('../assets/icon.png') },
    { name: 'Product 7', image: require('../assets/icon.png') },
    { name: 'Product 8', image: require('../assets/icon.png') },
  ];

  const handleProductPress = (name) => {
    console.log(`Go to ${name} page`);
  };

  const handleSearch = (text) => {
    setSearchQuery(text);
    
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search products..."
          value={searchQuery}
          onChangeText={(text) => handleSearch(text)}
        />
      </View>
      {products.map((product, index) => ( //TouchableOpacity : 해당 컴포넌트안에 감싸져 있는 컴포넌트에 터치 이벤트를 추가해주는 컴포넌트
        <TouchableOpacity key={index} style={styles.productContainer} onPress={() => handleProductPress(product.name)}>
          <Image source={product.image} style={styles.productImage} />
          <Text style={styles.productName}>{product.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  searchContainer: {
    width: '100%',
    marginBottom: 10,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  productContainer: {
    width: '45%',
    margin: 5,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 5,
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});