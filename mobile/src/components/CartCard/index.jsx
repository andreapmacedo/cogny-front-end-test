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
    <SafeAreaView>
      <Image source={{ uri: imageUrl }} style={styles.imageContainer}/>
      <View>
        <Text style={styles.textDescription}>{description}</Text>
        <Text style={styles.textDescription}>{priceBRL}</Text>
      </View>
      <Text style={styles.textDescription}>{subTotalBRL}</Text>
      <Text style={styles.textDescription}>{quantity}</Text>
    </SafeAreaView>
  );
}

export default CartCard;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 4,
  },
  imageContainer: {
    alignSelf: 'center',
    height: 200,
    width: 200,
    resizeMode: 'contain',
  },
  textDescription: {
    fontSize: 16,
    paddingHorizontal: 40,
    paddingVertical: 10,
  },
  textPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 40,
    paddingVertical: 10,
  },
  textQuantity: {
    backgroundColor: '#c62c4a',
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    flexGrow: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    padding: 10,
  },
  textButton: {
    backgroundColor: '#f8375d',
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    flexGrow: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    alignSelf: 'center',
    textAlign: 'center',
    padding: 10,
  },
  touchable: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
    padding: 10,
  }
});