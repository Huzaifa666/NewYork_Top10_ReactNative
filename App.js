import React, {Component} from 'react';
import {StyleSheet, Text, View, SectionList} from 'react-native';
import Bookitem from "./Bookitem";
import NYT from './fetches';


// const mB = [
//   {
//     rank: 1,
//     title: "Gathering Prey",
//     author: "John Sanford",
//     image : "http://du.ec2.nytimes.com.s3.amazonaws.com/prd/books/9780399168796.jpg"
//   },
//   {
//     rank: 2,
//     title: "Memory Man",
//     author: "David Baldacci",
//     image : "http://du.ec2.nytimes.com.s3.amazonaws.com/prd/books/9781455586387.jpg"
//   }
// ];

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={sections : []};
  }

addKeystoBooks = books => {
  return books.map(book => {
     return Object.assign(book,{key: book.title});
  })
}

_refreshData = () => {

  Promise
   .all([
     NYT.fetchbooks('hardcover-fiction'),
     NYT.fetchbooks('hardcover-nonfiction')
   ])


   .then(
    results => {
      if(results.length !== 2)
       console.error("This is unacceptable");


    this.setState({

      sections : [{
        title:"Hardcover-Fiction",
        data : this.addKeystoBooks(results[0])
      },
      {
        title:"Hardcover-Nonfiction",
        data: this.addKeystoBooks(results[1])
      
      }]

    })

  }

   )

}

componentDidMount(){
  this._refreshData();
}

_renderitem = ({item}) => {
  return(
  <Bookitem 
    coverURL = {item.book_image}
    author = {item.author}
    title = {item.key} /> 
  );
};

_renderSectionHeader = ({section}) => {
  return(
    <Text style={styles.header}>
      {section.title}
    </Text>
  )
}


render() {

    return (
    <View style={styles.container}>


    <SectionList
         sections={this.state.sections}
         renderItem={this._renderitem} 
         renderSectionHeader={this._renderSectionHeader}
         />

    
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
     flex :1,
     padding : 22,
     backgroundColor:"#FFF85C"
  },
header: {
  fontFamily: "Coiny-Regular",
  fontSize: 23
}
});
