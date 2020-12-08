import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { useState } from 'react';

export default function HomeScreen({ navigation, stock }) {
  const [counter, setCounter] = useState(0);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{marginBottom: 20}}> Counter value: {counter}</Text>
      <Button
        title='Go To details'
        onPress={() => navigation.navigate('Second', {
            id: 789,
            title: 'Text',
            counter: counter,
          })}
      />
      <View style={{marginTop:10}}></View>
      <Button
        title='IncreaseCounter'
        onPress={() => {
          setCounter(counter+1);
        }}
      />
      <View style={{marginTop:10}}></View>
    <Button
      title='DecreaseCounter'
      onPress={() => {
        setCounter(counter-1);
      }}
    />
    <View style={{marginTop: 150}}></View>
  <Button
    title='Go to List View'
    color="#841584"
    onPress={() => navigation.navigate('ListView')}
  />

    </View>
  );
}
