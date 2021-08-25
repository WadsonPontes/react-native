import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import OlaMundo from './src/components/OlaMundo';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <OlaMundo/>
      <Text style={styles.sectionTitle}>Olá Mundo! {count}</Text>
      <Button title="Clique aqui" onPress={() => setCount(count + 1)}/>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
