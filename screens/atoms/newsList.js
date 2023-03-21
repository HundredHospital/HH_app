import React from "react";
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput, FlatList } from "react-native";

function Newslist(props) {
    const Data = props.data
    const handleProductPress = (name) => {
        console.log(`Go to ${name} page`);
      };
    
    const newList = Data.map((news, index) => ( //TouchableOpacity : 해당 컴포넌트안에 감싸져 있는 컴포넌트에 터치 이벤트를 추가해주는 컴포넌트
    console.log(news.title),
    <TouchableOpacity key={index} style={styles.productContainer} onPress={() => handleProductPress(news.title)}>
      <Text style={styles.productName}>{news.title}</Text>
    </TouchableOpacity>
    ))
    return(
        <>
        <ScrollView style={styles.scrollView} contentContainerStyle={{justifyContent:'center',alignItems: 'center',}}>
      {newList}
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
        width: '80%',
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
})

export default Newslist