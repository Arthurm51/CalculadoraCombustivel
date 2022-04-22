import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default function Result({route}) {
    var media = route.params.media
    var cattegory = null
    if (media <= 4) {
        cattegory = 'E'
    }else if(media <= 8) {
        cattegory = 'D'
    }else if(media <= 10) {
        cattegory = 'C'
    }else if(media <= 12) {
        cattegory = 'B'
    }else{
        cattegory = 'A'
    }
  return (
    

    <View style={stylesResult.containerResult}>
      <Text style={stylesResult.titleResult}>Sua média de consumo é: {media} Km/l</Text>
      <Text style={stylesResult.paragraph}>Categoria de consumo: {cattegory}</Text>
      
    </View>
  )
}


const stylesResult = StyleSheet.create({
    containerResult: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      
    },
    titleResult: {
        color: 'black',
        fontSize: 20,
        marginTop: 100,
        textAlign: 'center',
    },
    paragraph: {
        marginTop: 50,
        fontSize: 16,
        fontWeight: 'bold'
    }
});