import { useContext } from 'react';
import { GlobalContext } from '../../provider/GlobalProvider';
import { 
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native'


const CartFooter = ({total, action}) => {

  const { cart } = useContext(GlobalContext);

  const totalBRL = `R$ ${total.toFixed(2).replace('.', ',')}`
  
  return (
    <View>
      <TouchableOpacity
        
        onPress={() => action()}
        
      >
        <Text>FINALIZAR PEDIDO</Text>
      
      </TouchableOpacity>
      <View>
        <Text>TOTAL</Text>
        <Text style={styles.text}>{totalBRL}</Text>
        {/* <Text>{total}</Text> */}
      </View>
    </View>
  );
}

export default CartFooter;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#191919',
    color: '#fff',
    marginTop: 40,
  },
  text: {
    // color: '#fff',
  },
  touchable: {
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
  }
});