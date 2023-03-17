import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Newslist from './atoms/newsList';

export default function App() {
  const [Data, setdata] = useState([])
  
  useEffect(()=>{
    const getData = async () =>{
      let response = await axios.get("http://3.34.40.78:8000/news", {
        headers:{"Access-Control-Allow-Origin": "*" },
      });
      setdata(response.data)
      // console.log(response.data)
      return response.data
    };
    getData()
  },[])

  return (
    <View style={styles.container}>
      <Newslist data={Data}></Newslist>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
