import React from 'react';
import { 
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

const ProductCard = ({ data, action }) => {
  const { description, price, imageUrl } = data;
  const priceBRL = `R$ ${price.toFixed(2).replace('.', ',')}`

  return (
    <View
      style={styles.container}
    >
      <Image source={{ uri: imageUrl }} style={styles.imageContainer}/>
      <Text style={styles.textDescription}>{description}</Text>
      <Text style={styles.textPrice}>{priceBRL}</Text>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => action(data)}
      >
        <Text style={styles.textQuantity}>1</Text>
        <Text style={styles.textButton}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 17,
    marginVertical: 10,
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

