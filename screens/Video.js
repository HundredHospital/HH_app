import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TextInput,TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';

export default function App() {
  const [price, setPrice] = useState(null);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    fetch('https://api.mocki.io/v1/1b8a87b3')
      .then((response) => response.json())
      .then((json) => setPrice(json.price))
      .catch((error) => console.error(error))
  }, []);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pauseAsync();
      setIsPlaying(false);
    } else {
      videoRef.current.playAsync();
      setIsPlaying(true);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.productContainer}>
        <Image source={require('../assets/icon.png')} style={styles.productImage} />
        <Text style={styles.productName}>약품명</Text>
        {price && <Text style={styles.productPrice}>{price}원</Text>}
      </View>
      <View style={styles.videoContainer}>
        <Video
          ref={videoRef}
          source={require('../assets/flowers-68367.mp4')}
          style={styles.video}
          resizeMode="contain"
          shouldPlay={true}
          isLooping={true}
        />
        
      </View>
      {/* 아래는 검색창 */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="검색어를 입력하세요"
        />
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.searchButtonText}>검색</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  productContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  productImage: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 18,
    color: 'green',
  },
  videoContainer: {
    width: '100%',
    height: 300,
    position: 'relative',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 5,
    marginTop: 20,
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
    fontSize: 16,
  },
  searchButton: {
    backgroundColor: '#555',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginLeft: 10,
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});