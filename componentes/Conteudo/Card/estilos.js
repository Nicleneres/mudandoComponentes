import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0000',
  },
    cardContainer: {
        alignItems: "center",
        backgroundColor: '#0000ff',
        paddingVertical: 20,
      },
      cardBox: {
        backgroundColor: '#ff0000',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        width: 300,
    
      },
      cardFotoCapa: {
        width: 300,
        height: 200,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
      },
      cardNome: {
        marginTop: 10,
        fontSize: 22,
        color: '#fff'
      },
      cardParagrafo: {
        margin: 10,
        color: '#fff'
      }
})
export default estilos;