import React from 'react';
import { StyleSheet, View, Text ,TouchableHighlight} from 'react-native';
class MemoList extends React.Component {
  render() {
    return (

      <View style={styles.MemoList}>
      <TouchableHighlight onPress={()=>{this.props.navigation.navigate('MemoDetail')}}>
        <View style={styles.MemoListItem}>
          <Text style={styles.MemoTitle}>
          掲示板
          </Text>
          <Text style={styles.MemoDate}>
          2018/01/02
          </Text>
          </View>
      </TouchableHighlight>
  <TouchableHighlight onPress={()=>{this.props.navigation.navigate('MemoDetail')}}>
        <View style={styles.MemoListItem}>
          <Text style={styles.MemoTitle} >
            今日の出来事
          </Text>
          <Text style={styles.MemoDate}>
            2018/01/02
          </Text>
        </View>
        </TouchableHighlight>
    <TouchableHighlight onPress={()=>{this.props.navigation.navigate('MemoDetail')}}>
        <View style={styles.MemoListItem}>
          <Text style={styles.MemoTitle}>
            患者検索
          </Text>
          <Text style={styles.MemoDate}>
            2018/01/02
          </Text>
        </View>
        </TouchableHighlight>
    <TouchableHighlight onPress={()=>{this.props.navigation.navigate('MemoDetail')}}>
        <View style={styles.MemoListItem}>
          <Text style={styles.MemoTitle}>
            施設検索
          </Text>
          <Text style={styles.MemoDate}>
            2018/01/02
          </Text>
        </View>
        </TouchableHighlight>

  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MemoList: {

    width: '100%',
    flex: 1,
  },
  MemoListItem: {
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  MemoTitle: {
    fontSize: 18,
    marginBottom: 4,
  },
  MemoDate: {
    fontSize: 10,
    color: '#a2a2a2',
  },

});

export default MemoList;
