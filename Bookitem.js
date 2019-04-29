import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class book extends Component {

    render(){
        return(

        <View style = {styles.container}>
        <Image style= {styles.cover} source = {{uri :this.props.coverURL }} />
          <View style = {styles.info}>
             <Text style = {styles.author}>{this.props.author}</Text>
             <Text style ={styles.title}>{this.props.title}</Text>
          </View>
        </View>

        )
    }
}

const styles = StyleSheet.create(
    {
       container : {
           flexDirection: "row",
           borderBottomColor:"#AAAAAA",
           borderBottomWidth: 2,
           padding: 1,
           height: 190
       },
       cover : {
           alignSelf:"flex-start",
           resizeMode:"contain",
           height: 150,
           width: 150
       },
       info:{
           flexDirection: "column",
           alignItems: "flex-end",
           flex: 3,
           alignSelf:"center",
           padding: 20
       },
       author: {
           fontFamily: "Lobster-regular",
           fontSize: 20
       },
       title : {
           fontSize: 23,
           fontFamily: "Lobster-Regular" 
       }
    }
)