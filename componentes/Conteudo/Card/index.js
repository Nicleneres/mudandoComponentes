import React from 'react';
import { View, Text, Image } from 'react-native';

import Foto from '../../../assets/Foto.png'
import estilos from '../Card/estilos'

export default function Card() {
    return (
        <View style={ estilos.cardContainer }>
        <View style={ estilos.cardBox }>
          <Image source={ Foto } style={ estilos.cardFotoCapa } />
          <Text style={ estilos.cardNome }>Samuel Jackson</Text>
          <Text style={ estilos.cardParagrafo }>Ator e produtor norte-americano</Text>
        </View>
        </View>
    )
};