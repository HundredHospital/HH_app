import React from "react";
import { StyleSheet,View,Text } from "react-native";

function Newslist(props) {
    const Data = props.data
    console.log(Data)
    const liList = Data.map((news, index)=>{
        console.log(news.title)
        if(index < 9){
            return(
                <View style={styles.view} key={index}>
                    <Text style={styles.news_title}>{news.title}</Text>
                </View>
            )
        }
    })

    return(
        <>
        {liList}
        </>
    )
}

const styles = StyleSheet.create({
    view: {
        width: '100%',
        height: '10%',
        // backgroundColor: 'black'
    },
    news_title: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
      },
    
})

export default Newslist