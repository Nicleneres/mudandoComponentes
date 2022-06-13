import React from 'react';
import { View, Text, Image } from 'react-native';

import Foto from '../../../assets/bmw.jpeg'
import Foto2 from '../../../assets/bmwx1.jpeg'
import estilos from '../Card/estilos'

export default function Card() {
    return (
        <View style={ estilos.cardContainer }>
        <View style={ estilos.cardBox }>
          <Image source={ Foto } style={ estilos.cardFotoCapa } />
          <Text style={ estilos.cardNome }>BMW Série 3</Text>
          <Text style={ estilos.cardParagrafo }>Esportivo, confiável e bem-sucedido: há mais de 40 anos, o BMW Série 3 representa um prazer de direção dinâmica como nenhum outro veículo.</Text>
        </View>
        <View>
        <Image source={ Foto2 } style={ estilos.cardFotoCapa } />
          <Text style={ estilos.cardNome }>BMW Série 3</Text>
          <Text style={ estilos.cardParagrafo }>Esportivo, confiável e bem-sucedido: há mais de 40 anos, o BMW Série 3 representa um prazer de direção dinâmica como nenhum outro veículo.</Text>
        </View>
        </View>
    )
};