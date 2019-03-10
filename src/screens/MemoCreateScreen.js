import React from 'react';
import {StyleSheet, View, TextInput,Text} from 'react-native';
import firebase from 'firebase';
import AddButton from '../elements/AddButton.js'

class MemoCreateScreen extends React.Component {
  state = {
    body:'',
  }
  handlePress2(){
        const {　params　} = this.props.navigation.state;

        console.log(params.currentUser.user.uid,'aaaa');
        const db =firebase.firestore ();
      //db.settings({　timestampsInSnapshots: true　});
      //  const uid='tTOgieIXQNaPIqWKyhtWrg1FpGI2';
        db.collection(`users/${params.currentUser.user.uid}/MemoApp`).add({
          body: this.state.body,
          createdOn: new Date,
        })
        .then((docRef)=>{
          console.log(docRef.id)
        })
        .catch((error)=>{
          console.log(error)
        });
  }

  render() {
    return (
    <View style={styles.Container}>
      <Text>MemoEditScreen</Text>
      <TextInput
        multiline
        style = {styles.memoEditInput}
        value = {this.state.body}
        onChangeText = {(text) => {
          this.setState({body:text})

        }}
        />
      <AddButton name ='check' onPress = { this.handlePress2.bind(this) }/>


    </View>

    );
  }
}



const styles = StyleSheet.create({
      Container: {
        flex: 1,
        width: '100%',
      },
      memoEditInput:{
        backgroundColor:'#ddd',
        flex: 1,
        paddingTop:32,
        paddingLeft:16,
        paddingRight:16,
        fontSize:18,
      },
      textInput:{
        fontSize:20,
      },
    });


export default MemoCreateScreen;
