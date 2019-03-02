import React from 'react';
import { StyleSheet, View, Text ,TouchableHighlight} from 'react-native';
import { Font } from 'expo';
import fontAwsome from '../../assets/fonts/fa-solid-900.ttf';
import { createIconSet } from '@expo/vector-icons';


const CustomIcon = createIconSet({
pencil: '\uf303',
plus: '\uf067',
check:'\uf00c',
question:'\uf128',
}, 'FontAwsome');

class AddButton extends React.Component {
  state = {
    fontLoaded: false,
  }
  async componentWillMount() {
    await Font.loadAsync({
      FontAwsome: fontAwsome,
    });
    this.setState ({fontLoaded: true});
  }



  render() {
    const {name, style, color , onPress} = this.props;
    let bgColor = '#fff';
    let textColor = '#e3e';
    if (color === 'white'){
      bgColor = '#fff';
      textColor = '#e3e';
    };
    return (
      <TouchableHighlight style ={styles.container, style } onPress = {onPress}>
      <View style={[styles.MemoaddButton,  { backgroundColor:bgColor}]}>
      {
        this.state.fontLoaded ? (
          <CustomIcon name={name} style = {
            [styles.Buttonstyle, { color: textColor }]
          }/>
        ) : null
      }
      </View>
      </TouchableHighlight>
    );
  }
}


const styles = StyleSheet.create({
container:{
  position: 'absolute',
  bottom: 32,
  right: 32,
  width: 48,
  height: 48,
},

  MemoaddButton: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
    backgroundColor: '#E31676',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    zIndex: 10,

  },
  Buttonstyle: {
    fontFamily:'FontAwsome',
    fontSize: 24,
    lineHeight: 30,
  },
});
export default AddButton;
