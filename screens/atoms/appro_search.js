import React from "react";
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput, FlatList } from "react-native";

function ApproSearch(props) {
    const Data = props.data
    const handleProductPress = (name) => {
        console.log(`Go to ${name} page`);
      };
    
    const appro_list = Data.map((med, index) => ( //TouchableOpacity : 해당 컴포넌트안에 감싸져 있는 컴포넌트에 터치 이벤트를 추가해주는 컴포넌트
    <TouchableOpacity key={index} style={styles.productContainer} onPress={() => handleProductPress(med.name)}>
      <Image source={med.images} style={styles.productImage} />
      <Text style={styles.productName}>{med.name}</Text>
    </TouchableOpacity>
    ))
    return(
        <>
        <ScrollView style={styles.scrollView} contentContainerStyle={{justifyContent:'center',alignItems: 'center',}}>
      {appro_list}
      </ScrollView>
        </>
    )
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
      marginTop: 40,
      flexDirection: 'column',
      flex: 1,
    }
  });

export default ApproSearch