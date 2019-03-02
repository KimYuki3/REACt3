import React from 'react';
import {StyleSheet, View, TextInput,Text} from 'react-native';

import AddButton from '../elements/AddButton.js'

class MemoEditScreen extends React.Component {
  render() {
    return (
    <View style={styles.Container}>
      <Text>MemoEditScreen</Text>
      <TextInput multiline
        style={styles.memoEditInput}  value='HiDDDDDDDD'

        />

      <AddButton name ='check' onPress = {() => {this.props.navigation.navigate('MemoDetail')}}/>


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


export default MemoEditScreen;
