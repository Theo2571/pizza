import React from 'react';
import {Alert, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';

export const CardItem = ({text, image, price}) => {
  return (
    <TouchableOpacity
      onPress={() => Alert.alert('Вы выбрали', text)}
      style={styles.btn}>
      <Image style={styles.image} source={{uri: image}} />
      <Text>{text}</Text>
      <Text>{price} сом</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  btn: {
    width: '50%',
  },
  image: {
    marginTop: 15,
    width: '100%',
    height: 200,
    borderRadius: 4,
  },
});
