import React from 'react';
import { View, Text } from 'react-native';

import estilos from './estilos';

export default function Titulo() {
    return (
      <View style={estilos.container}>
        <View style={ estilos.barraTituloContainer }>
      <Text style={ estilos.barraTituloTitulo }>BMW</Text>
  </View>
  </View>
      
    )
}