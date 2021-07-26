import React, { Component } from 'react';
import {
 StyleSheet,
 Image,
 Text,
 View
} from 'react-native';

const animals = {
 chicken: {
 name: 'Chicken',
 image: require('./img/chicken.jpg'),

 },
 duck: {
 name: 'Duck',
 image: require('./img/duck.jpg'),
 },
}

export default class AnimalScreen extends Component<Props> {
 static navigationOptions = ({navigation}) => {
 return {
 title: animals[navigation.getParam('animal')].name,
 };
 };
 render() {
 let animal = this.props.navigation.getParam('animal');
 return (
 <View style={styles.container}>
 <Text style={styles.title}>
 {animals[animal].name}
 </Text>
 <Image style={styles.image}
 source={animals[animal].image}
 />
 </View>
 );
 }
}
const styles = StyleSheet.create({
 container: {
 flex: 1,
 alignItems: 'center',
 backgroundColor: '#F5FCFF',
 },
 title: {
 fontSize: 40,
 fontWeight: 'bold',
 textAlign: 'center',
 margin: 20,
 },
 image: {
 width: 360,
 height: 360,
 },
});
