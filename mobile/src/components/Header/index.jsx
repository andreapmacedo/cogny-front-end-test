import { useContext } from 'react';
import { GlobalContext } from '../../provider/GlobalProvider';
import { useNavigation } from '@react-navigation/native';
// import { SimpleLineIcons } from '@expo/vector-icons';
import cognyshoes from '../../assets/logo_cognyshos.png';

import { Feather } from '@expo/vector-icons';
import { 
  View,
  StyleSheet,
  Image,
  Text,
  SafeAreaView,
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
        style={styles.logoButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.textLogo}>COGNYSHOES</Text>
        <Image
          style={{ width: 34, height: 23 }}
          source={cognyshoes}
          alt="logo cognyshoes"
          resizeMode='contain'
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconButton}
        onPress={() => navigation.navigate('Cart')}
      >
        <View style={styles.icon}>
            <Feather name="lock" size={24} color="white" />
        </View>
        <View style={styles.cartLength}>
          <Text style={styles.textLength}>{cart.length}</Text>
          </View>   
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#191919',
    color: '#fff',
    marginTop: 40,
    justifyContent: 'space-between',
  },
  textLogo: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    justifyContent: 'flex-start',
    paddingRight: 10,
  },
  textLength: {
    color: '#fff',
    fontSize: 13,
    alignSelf: 'center',
    justifyContent: 'center',
    
  },
  logoButton: {
    paddingLeft: 20,
    flexDirection: 'row',
  },
  iconButton: {
    paddingRight: 42,
    position: 'relative',
    paddingLeft: 20,
  },
  icon: {
    color: '#fff',
  },
  cartLength: {
    backgroundColor: '#c62c4a',
    borderRadius: 50,
    height: 20,
    width: 20,
    position: 'absolute',
    alignSelf: 'center',
    top: -7,
  },
});