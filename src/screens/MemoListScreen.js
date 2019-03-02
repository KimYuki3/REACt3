import React from 'react';
import {StyleSheet, View} from 'react-native';

import MemoList from '../components/MemoList.js'
import AddButton from '../elements/AddButton.js'

class MemoListScreen extends React.Component {
  render() {
    return (
      <View style={styles.container1}>
        <MemoList navigation={this.props.navigation} />
        <AddButton name ='pencil'
          onPress = {() => {this.props.navigation.navigate('MemoEdit')}}/>

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
