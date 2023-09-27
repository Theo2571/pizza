import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  TextInput,
} from 'react-native';
import {CardItem} from './src/components/CardItem';
import SvgIcon from './src/assets/icons/searchIcon';
const pizzaData: any = [
  {
    id: 1,
    name: 'Маргарита',
    price: 250,
    image:
      'https://dodopizza-a.akamaihd.net/static/Img/Products/37866660448747f7808d33f2c5b16613_584x584.webp',
  },
  {
    id: 2,
    name: 'Холопенье',
    price: 550,
    image:
      'https://dodopizza-a.akamaihd.net/static/Img/Products/105e96ce9c654f3caa6dd3c12b730d83_584x584.webp',
  },
  ,
  {
    id: 3,
    name: 'Холопенье',
    price: 550,
    image:
      'https://dodopizza-a.akamaihd.net/static/Img/Products/105e96ce9c654f3caa6dd3c12b730d83_584x584.webp',
  },
  {
    id: 1,
    name: 'Маргарита',
    price: 250,
    image:
      'https://dodopizza-a.akamaihd.net/static/Img/Products/37866660448747f7808d33f2c5b16613_584x584.webp',
  },
  {
    id: 2,
    name: 'Холопенье',
    price: 550,
    image:
      'https://dodopizza-a.akamaihd.net/static/Img/Products/105e96ce9c654f3caa6dd3c12b730d83_584x584.webp',
  },
  ,
  {
    id: 3,
    name: 'Холопенье',
    price: 550,
    image:
      'https://dodopizza-a.akamaihd.net/static/Img/Products/105e96ce9c654f3caa6dd3c12b730d83_584x584.webp',
  },
  {
    id: 1,
    name: 'Маргарита',
    price: 250,
    image:
      'https://dodopizza-a.akamaihd.net/static/Img/Products/37866660448747f7808d33f2c5b16613_584x584.webp',
  },
  {
    id: 2,
    name: 'Холопенье',
    price: 550,
    image:
      'https://dodopizza-a.akamaihd.net/static/Img/Products/105e96ce9c654f3caa6dd3c12b730d83_584x584.webp',
  },
  ,
  {
    id: 3,
    name: 'Холопенье',
    price: 550,
    image:
      'https://dodopizza-a.akamaihd.net/static/Img/Products/105e96ce9c654f3caa6dd3c12b730d83_584x584.webp',
  },
  {
    id: 1,
    name: 'Маргарита',
    price: 250,
    image:
      'https://dodopizza-a.akamaihd.net/static/Img/Products/37866660448747f7808d33f2c5b16613_584x584.webp',
  },
  {
    id: 2,
    name: 'Холопенье',
    price: 550,
    image:
      'https://dodopizza-a.akamaihd.net/static/Img/Products/105e96ce9c654f3caa6dd3c12b730d83_584x584.webp',
  },
  ,
  {
    id: 3,
    name: 'Холопенье',
    price: 550,
    image:
      'https://dodopizza-a.akamaihd.net/static/Img/Products/105e96ce9c654f3caa6dd3c12b730d83_584x584.webp',
  },
];
const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={styles.container}>
        <StatusBar backgroundColor="#FFF" />
        <Text style={styles.text}>Магазин пиццы</Text>
        <Text style={styles.textDes}>
          Некое описание {'\n'} длинною в 2 строки
        </Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={e => console.log(e)}
        />

        <View style={styles.imageContainer}>
          {pizzaData.map((pizza: any, index: any) => (
            <CardItem
              key={index}
              text={pizza.name}
              image={pizza.image}
              price={pizza.price}
            />
          ))}
        </View>
        <TouchableOpacity style={styles.orderBtn}>
          <Text
            style={{
              textAlign: 'center',
              color: '#FFF',
              fontSize: 16,
              fontWeight: 600,
            }}>
            Создать заказ
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#FFF',
    paddingHorizontal: 15,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  textDes: {
    fontSize: 16,
    color: 'gray',
  },
  input: {
    marginTop: 15,
    paddingLeft: 15,
    height: 46,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'orange',
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  image: {
    marginTop: 15,
    width: '50%',
    height: 200,
    borderRadius: 4,
  },
  orderBtn: {
    marginTop: 15,
    marginBottom: 30,
    width: '100%',
    paddingVertical: 16,
    backgroundColor: 'orange',
    borderRadius: 8,
  },
});

export default App;
