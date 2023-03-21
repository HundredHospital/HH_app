import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput, FlatList } from 'react-native';
import ApproSearch from './atoms/appro_search';

export default function App() {
  const [searchVal, setSearchVal] = useState('');
  const [Data, setData] = useState([]);


  useEffect(()=>{
    const getData = async () =>{
    const res = await axios.get("http://3.34.40.78:8000/search", {
      headers: { "Access-Control-Allow-Origin": "*", },
      });
    const newResJson = res.data;
    setData(newResJson);
  };
  getData()
   },[])

  const handleSearch = async (text) => {
    try {
    setSearchVal(text);
    const res = await axios.get("http://3.34.40.78:8000/search", {
      headers: { "Access-Control-Allow-Origin": "*", "name": encodeURI(text) },
      });
    const newResJson = res.data;
    setData(newResJson);
  } catch (e) {
    console.log(e);
  }
  };

  return (
    <>
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search products..."
          value={searchVal}
          onChangeText={(text) => handleSearch(String(text))}
        />
      </View>
    </View>
    <ApproSearch data={Data}></ApproSearch>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.02,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    height: 100,
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
    width: '80%',
    height: 200,
    margin: 5,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 5,
    // alignItems: 'center',
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
  scrollView: {
    width: '100%',
    marginBottom: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 40,
    flexDirection: 'row',
    flex: 1,
  }
});