import React from 'react';
import {StyleSheet, View} from 'react-native';
//import firestore from 'firestore';
import MemoList from '../components/MemoList.js'
import AddButton from '../elements/AddButton.js'
//this.props.navigation.navigate('MemoEdit')
//  db.settings({　timestampsInSnapshots: true　});
//const db = firebase.firestore();
class MemoListScreen extends React.Component {
  handlePress(){

  const { params } = this.props.navigation.state ;
  console.log(params);
    this.props.navigation.navigate('MemoCreate',{currentUser : params.currentUser});
  }

  render() {
    return (
      <View style={styles.container1}>
        <MemoList navigation={this.props.navigation} />
        <AddButton name ='pencil'   onPress={this.handlePress.bind(this)}/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    width: '100%',
    backgroundColor:'#fffdf6',
  },


});


export default MemoListScreen;
