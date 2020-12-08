import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, Button } from 'react-native';

export default function ListView({route, navigation}) {
    const [people, setPeople] = useState([
    { name: 'John Doe 1', id: '1' },
    { name: 'John Doe 2', id: '2' },
    { name: 'John Doe 3', id: '3' },
    { name: 'John Doe 4', id: '4' },
    { name: 'John Doe 5', id: '5' },
  ]);



  return (

    <View style={styles.container}>

      <FlatList
        numColumns={1}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.name}</Text>
        )}
      />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: '#0000',
  },
  item: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
  },
});
