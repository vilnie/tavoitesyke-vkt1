import React, {useState} from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity,View } from 'react-native';

export default function App() {
  const [age, setAge] = useState('');
  const [upperLimit, setUpperLimit] = useState(0);
  const [lowerLimit, setLowerLimit] = useState(0);

  function change(text){
    setAge(text);
  }

  function calculateHeartRateLimits() {
    if (age) {
      const calculatedUpperLimit = Math.floor((220 - parseInt(age, 10)) * 0.85);
      const calculatedLowerLimit = Math.floor((220 - parseInt(age, 10)) * 0.65);
      setUpperLimit(calculatedUpperLimit);
      setLowerLimit(calculatedLowerLimit);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Submit age:</Text>
      <TextInput style={styles.field} value={age} onChangeText={text => change(text)} keyboardType='decimal-pad'/>
      <Text style={styles.field}>Heartrate Limits: {lowerLimit + '-' + upperLimit}</Text>
      <TouchableOpacity style={styles.button} onPress={calculateHeartRateLimits}>
        <Text>Calculate</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginLeft: 10,
  },
  field: {
    marginBottom: 10,
  },
  button: {
    marginBottom: 10,
    backgroundColor: 'lightblue',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
});