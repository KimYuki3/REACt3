import React from 'react';
import { StyleSheet, View, Text ,TouchableHighlight,FlatList} from 'react-native';
class MemoList extends React.Component {
  renderMemo({ item }) {
    console.log(item);
    return(
      <TouchableHighlight onPress={()=>{this.props.navigation.navigate('MemoDetail')}}>
        <View style={styles.MemoListItem}>
        <Text style={styles.MemoTitle}>
         {item.body}
        </Text>
        <Text style={styles.MemoDate}>
          {item.key}
        </Text>
          </View>
      </TouchableHighlight>
    );
  }
  render() {
    return (

      <View style={styles.MemoList}>
       <FlatList data = { this.props.memoList } renderItem = { this.renderMemo.bind(this) }/>
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
