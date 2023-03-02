import { useContext } from 'react';
import { GlobalContext } from '../../provider/GlobalProvider';
import { useNavigation } from '@react-navigation/native';

import { 
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native'

const Header = () => {
  const navigation = useNavigation();
  const { cart } = useContext(GlobalContext);

  return (
    <SafeAreaView
      style={styles.container}
    >
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.text}>COGNYSHOES</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => navigation.navigate('Cart')}
      >
        <Text style={styles.text} >Meu carrinho</Text>
        <View>
          <Text style={styles.text}>{cart.length}</Text>
          <Text style={styles.text}>itens</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#191919',
    color: '#fff',
    marginTop: 40,
  },
  text: {
    color: '#fff',
  },
  touchable: {
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    // alignItems: 'center',
  }
});