import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c4491',
  },
    cardContainer: {
        alignItems: "center",
        backgroundColor: '#0a1c35',
        paddingVertical: 20,
      },
      cardBox: {
        backgroundColor: '#fff',
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
      },
      cardParagrafo: {
        margin: 10,
      }
})
export default estilos;