// import { useContext } from 'react';
// import { GlobalContext } from '../../provider/GlobalProvider';
import { 
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native'


const CartFooter = ({total, action}) => {

  // const { cart } = useContext(GlobalContext);

  const totalBRL = `R$ ${total.toFixed(2).replace('.', ',')}`
  
  return (
    <View>
      <View style={styles.checkout}>
        <Text style={styles.textTotal}>TOTAL</Text>
        <Text style={styles.textValue}>{totalBRL}</Text>
      </View>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => action()} 
      >
        <Text style={styles.textButton}>FINALIZAR PEDIDO</Text>
      </TouchableOpacity>
    </View>
  );
}

export default CartFooter;

const styles = StyleSheet.create({
  checkout: {
    alignSelf: 'center',
    marginVertical: 10,
  },
  textValue: {
    fontSize: 24,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  textTotal: {
    color: '#999',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  textButton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  touchable: {
    paddingLeft: 20,
    borderRadius: 4,
    paddingRight: 20,
    height: 42,
    marginHorizontal: 10,
    marginVertical: 10,
    justifyContent: 'center',
    backgroundColor: '#c62c4a',
  }
});