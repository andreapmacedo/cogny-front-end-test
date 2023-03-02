import React from 'react';
import { View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

const ProductCard = ({ data, action }) => {
  const { description, price, imageUrl } = data;

  return (
    <View>
      <Image source={{ uri: imageUrl }} style={{ width: 100, height: 100 }} />
      <Text>{description}</Text>
      <Text>{price}</Text>
      <TouchableOpacity onPress={() => action(data)}>
        <Text>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919',
    color: '#fff',
  },
});

