import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    backgroundColor: '#ff0000',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 32,
    textTransform: 'uppercase',
    fontWeight: "bold",
    color: '#fff',
    textAlign: 'center'
    },
  subtitulo: {
    fontWeight: 'bold',
    marginTop: 40,
    color: '#fff',
    textTransform: 'uppercase'
  },
  paragrafo: {
    marginTop: 6,
    color: '#fff'
  },
  imagem: {
    alignSelf: 'center',
    width: 300,
    height: 300,
    marginTop: 20,
    borderTopLeftRadius: 150,
    borderTopRightRadius: 150,
    borderBottomEndRadius: 150,
    borderBottomStartRadius: 150
  }
});

export default estilos;