import React, { useContext } from 'react';
import { GlobalContext } from '../../provider/GlobalProvider';
import { 
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
} from 'react-native'

const CartCard = ({ data }) => {
  const { productId, quantity } = data;
  const { products } = useContext(GlobalContext);
  const product = products.find(product => product.id === productId);
  const { description, price, imageUrl } = product;
  
  const priceBRL = `R$ ${price.toFixed(2).replace('.', ',')}`
  const subTotalBRL = `R$ ${(price *quantity).toFixed(2).replace('.', ',')}`;
  
  return (
    <SafeAreaView
      style={styles.container}
    >
      <View style={styles.main}>
        <Image source={{ uri: imageUrl }} style={styles.imageContainer}/>
        <View style={styles.main.description}>
          <Text style={styles.textDescription}>{description}</Text>
          <Text style={styles.textPrice}>{priceBRL}</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.quantityContainer} >
          <Text style={styles.textQuantity}>{quantity}</Text>
        </View>
        <Text style={styles.textSubtotal}>{subTotalBRL}</Text>
      </View>
    </SafeAreaView>
  );
}

export default CartCard;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: '#fff',
  },
  imageContainer: {
    alignSelf: 'center',
    height: 100,
    width: 100,
    resizeMode: 'contain',
  },
  main: {
    fontSize: 16,
    flexDirection: 'row',
    description: {
      margin: 10,
      flexShrink: 1,
    },
  },
  mainText: {
  },
  footer: {
    backgroundColor: '#ddd',
    borderRadius: 4,
    flexDirection: 'row',
    fontSize: 16,
  },
  textDescription: {
    fontSize: 16,
  },
  textPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  textSubtotal: {
    fontSize: 16,
    flexGrow: 3,
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'right',
  },
  quantityContainer: {
    flexGrow: 2,
    fontWeight: 'bold',
    justifyContent: 'center',
  },
  textQuantity: {
    borderRadius: 4,
    borderColor: '#999',
    backgroundColor: '#fff',
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
    alignSelf: 'center',
    width: 50,
  },
});