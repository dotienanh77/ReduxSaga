import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Button from 'react-native-button';

export default class CounterComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txt}>Redux Sagas</Text>
        <View style={styles.wrapBtn}>
          <Button
            containerStyle={styles.btn}
            style={styles.btnMain}
            onPress={() => {
              this.props.onDecrement(1);
            }}>
            Decrement -
          </Button>
          <Button
            containerStyle={styles.btn2}
            style={styles.txtBtn}
            onPress={() => {
              this.props.onIncrement(1);
            }}>
            Increment +
          </Button>
        </View>
        <Text style={styles.txtCounts}>Counts: {this.props.times}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {flex: 1, marginTop: 30},
  txt: {
    margin: 20,
    fontWeight: 'bold',
    color: 'forestgreen',
    fontSize: 20,
  },
  wrapBtn: {height: 50, margin: 10, flexDirection: 'row'},
  txtBtn: {fontSize: 18, color: 'white'},
  btn: {
    padding: 10,
    height: 45,
    borderRadius: 10,
    backgroundColor: 'darkviolet',
  },
  btn2: {
    padding: 10,
    height: 45,
    borderRadius: 10,
    backgroundColor: 'darkviolet',
    marginLeft: 30,
  },
  txtCounts: {
    margin: 10,
    fontWeight: 'bold',
    color: 'darkblue',
    fontSize: 17,
  },
  btnMain: {fontSize: 18, color: 'white'},
});
