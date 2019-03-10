import React from 'react';
import {StyleSheet, View} from 'react-native';
import firebase from 'firebase';
import MemoList from '../components/MemoList.js'
import AddButton from '../elements/AddButton.js'
//this.props.navigation.navigate('MemoEdit')
//  db.settings({　timestampsInSnapshots: true　});
//const db = firebase.firestore();
class MemoListScreen extends React.Component {
  state = {
    memoList : [],
  }
  componentWillMount(){
    const { currentUser } = firebase.auth();
    const db =firebase.firestore()
    db.collection(`users/${currentUser.uid}/MemoApp`)
    .get()
    .then((snapshot) => {
      const memoList = [];
      snapshot.forEach((doc) => {
      memoList.push({ ...doc.data(), key: doc.id } );
    });
    this.setState({ memoList });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
  }

  handlePress(){
    this.props.navigation.navigate('MemoCreate');
  }

  render() {
    return (
      <View style={styles.container1}>
        <MemoList memoList={this.state.memoList} navigation={this.props.navigation} />
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
