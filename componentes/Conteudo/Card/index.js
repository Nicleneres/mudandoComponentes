import React from 'react';
import { View, Text, Image } from 'react-native';

import Foto from '../../../assets/bmw.jpeg'
import Foto2 from '../../../assets/bmwx1.jpeg'
import Foto3 from '../../../assets/bmwM8.jpeg'
import estilos from '../Card/estilos'

export default function Card() {
    return (
        <View style={ estilos.cardContainer }>
        <View style={ estilos.cardBox }>
          <Image source={ Foto } style={ estilos.cardFotoCapa } />
          <Text style={ estilos.cardNome }>BMW Série 3</Text>
          <Text style={ estilos.cardParagrafo }>Esportivo, confiável e bem-sucedido: há mais de 40 anos, o BMW Série 3 representa um prazer de direção dinâmica como nenhum outro veículo.</Text>
        </View>
        <View style={ estilos.cardContainer }>
        <View style={ estilos.cardBox }>
        <Image source={ Foto2 } style={ estilos.cardFotoCapa } />
          <Text style={ estilos.cardNome }>BMW X1</Text>
          <Text style={ estilos.cardParagrafo }>O BMW X1 vai além das soluções rotineiras. Desde o primeiro olhar fica claro que este é um modelo X de alma e coração: os para-choques compactos e a longa distância entre eixos típicos de um SAV (Sports Activity Vehicle) definem o exterior.</Text>
          </View>
        </View>
        <View style={ estilos.cardContainer }>
        <View style={ estilos.cardBox }>
        <Image source={ Foto3 } style={ estilos.cardFotoCapa } />
          <Text style={ estilos.cardNome }>BMW M8</Text>
          <Text style={ estilos.cardParagrafo }>Com linhas musculosas, o BMW M8 tem grandes faróis Laserlight, grade duplo rim grande e com acabamento em preto brilhante, para-choque com grandes entradas de ar e lanternas OLED. Tendo rodas aros 20 polegadas, o M8 tem medidas diferentes na frente e atrás, com medidas 275/35 ZR20 e 285/35 ZR20 atrás.</Text>
          </View>
        </View>
        </View>
    )
};