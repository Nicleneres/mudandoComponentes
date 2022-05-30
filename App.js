import React from 'react';
import { View, StyleSheet, } from 'react-native';

import Titulo from './componentes/Conteudo/Titulo';
import Conteudo from './componentes/Conteudo';
import Card from './componentes/Conteudo/Card';
import estilos from './estilos';

export default function App() {
  return (
    <View style={estilos.container}>
      <Titulo />
      <View>
        <Card />
      </View>
      <View>
        <Conteudo />
      </View>
    </View>
  );
}