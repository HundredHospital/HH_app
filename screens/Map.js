import React, { useState } from 'react';
import { StyleSheet, View, Button, TextInput } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import axios from 'axios';

export default function App() {
  const [markers, setMarkers] = useState([]);
  const [region, setRegion] = useState({
    latitude: 37.566535,
    longitude: 126.9779692,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [searchText, setSearchText] = useState('');

  const searchPharmacies = async () => {
    const { latitude, longitude } = region;
    const API_KEY = 'AIzaSyD08pTqsahpqwVwX8cxyr62vZNuCooXH6c';
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=5000&type=pharmacy&keyword=${searchText}&key=${API_KEY}`;
    const response = await axios.get(url);
    const data = response.data.results.map((result) => ({
      id: result.place_id,
      name: result.name,
      location: {
        latitude: result.geometry.location.lat,
        longitude: result.geometry.location.lng,
      },
    }));
    setMarkers(data);
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={region}
        onRegionChangeComplete={setRegion}
      >
        {markers.map((marker) => (
          <Marker key={marker.id} coordinate={marker.location} title={marker.name} />
        ))}
      </MapView>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for pharmacies"
          onChangeText={setSearchText}
          value={searchText}
        />
        <Button title="Search" onPress={searchPharmacies} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  searchContainer: {
    position: 'absolute',
    top: 20,
    left: 0,
    right: 0,
    alignItems: 'center',
    flexDirection: 'row',
    padding: 16,
  },
  searchInput: {
    flex: 1,
    marginRight: 16,
    padding: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
});