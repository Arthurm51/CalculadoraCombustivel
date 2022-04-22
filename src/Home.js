import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';



export default function Home({navigation}) {

  const [km, setKm] = useState()
  const [gas, setGas] = useState()

  

  return (
  
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.title}>Faça aqui seu cálculo</Text>

      <TextInput 
        style={styles.textBox}
        placeholder='KM'
        keyboardType='numeric'
        value={km}
        onChangeText= {(value) => setKm(value)}
       
        
      />

      <TextInput 
        style={styles.textBox}
        placeholder='Gasolina (Litros)'
        keyboardType='numeric'
        value={gas}
        onChangeText= {(value) => setGas(value)}
      />
     
      
      <View  style={styles.button}>
        <Button
          title='Calcular'
          onPress={() => navigation.navigate("Result", {media: km/gas})}
          color= 'black'
        />
      </View>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  
  },
  
  title: {
    marginTop: 80,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    marginTop: 20,
    borderWidth: 1.5,
    borderRadius: 10,
    width: '45%',
    padding: 2,
    borderColor: '#c29040',
    textAlign: 'center',
  },
  textBox: {
    height: 40,
    width: '70%',
    borderWidth: 2.5,
    borderRadius: 10,
    padding: 10,
    margin: 10,
    borderColor: '#c29040',
    textAlign: 'center'
  }

});
