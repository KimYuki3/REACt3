import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class AppBar extends React.Component {

  render() {
    return (
      <View style={styles.appbar}>
        <View><Text style={styles.appbarTitle}>MEMOT</Text></View>
      </View>



    );
  }
};

const styles = StyleSheet.create({
  appbar: {
    position: 'absolute',
    top: 33,
    height: 80,
    left: 0,
    right: 0,
    paddingTop: 0,
    backgroundColor: '#265366',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    zIndex: 10,
  },
  appbarTitle: {
    color: '#e5e5e5',
    fontSize: 30,
  },

});

export default AppBar;
