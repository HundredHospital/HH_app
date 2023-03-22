import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput, FlatList } from 'react-native';
import Newslist from './atoms/newsList';

export default function App() {
  const [searchVal, setSearchVal] = useState('');
  const [Data, setdata] = useState([])
  const handleProductPress = (name) => {
    console.log(`Go to ${name} page`);
  };
  useEffect(()=>{
    const getData = async () =>{
      const res= await axios.get("http://3.34.40.78:8000/news", {
        headers:{"Access-Control-Allow-Origin": "*" },
      });
      const newResJson = res.data; 
      setdata(newResJson)
    };
    getData()
  },[]);

  const handleSearch = async (text) => {
    try {
    setSearchVal(text);
    const res = await axios.get("http://3.34.40.78:8000/news", {
      headers: { "Access-Control-Allow-Origin": "*", "value": encodeURI(text) },
      });
    const newResJson = res.data;
    setdata(newResJson);
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
    <ScrollView>
    {Data.map((news, index) => ( //TouchableOpacity : 해당 컴포넌트안에 감싸져 있는 컴포넌트에 터치 이벤트를 추가해주는 컴포넌트
    <TouchableOpacity key={index} style={styles.productContainer} onPress={() => handleProductPress(news.title)}>
      <Text style={styles.productName}>{news.title}</Text>
    </TouchableOpacity>
    ))}
    </ScrollView>
    </> 
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
    width: '100%',
    height: 200,
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
  scrollView: {
    width: '100%',
    marginBottom: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 60,
    flexDirection: 'column',
    flex: 1,
  }
});
