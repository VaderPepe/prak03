import * as React from 'react';
import { Text, View, Button } from 'react-native';

export default function Details({route, navigation}) {

  const { id, title, counter} = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>id: {JSON.stringify(id)}</Text>
      <Text>title: {JSON.stringify(title)}</Text>
      <Text>Counter value:{JSON.stringify(counter)}</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}
