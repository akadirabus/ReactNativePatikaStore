import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View, FlatList, TextInput } from 'react-native';
import Product from './components/Product/Product';

import data_products from './products.json'

export default function App() {
  const renderProducts = ({item}) => <Product product={item} />
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>PATIKASTORE</Text>
      <TextInput 
        style={styles.search}
        placeholder='Ara...'/>
      <FlatList 
          data={data_products}
          keyExtractor={item => item.id.toString()}
          horizontal={false}
          numColumns={2}
          renderItem={renderProducts}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  title: {
    color: 'purple',
    fontWeight: 'bold',
    fontSize: 32,
    marginLeft: 10
  },
  search:{
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 6,
    margin: 10,
    color: '#aaa'
  }
});
