import { useContext } from 'react';
import { GlobalContext } from '../../provider/GlobalProvider';
import { useNavigation } from '@react-navigation/native';
// import { SimpleLineIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

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
        style={styles.logoButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.text}>COGNYSHOES</Text>
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
            {/* <SimpleLineIcons name="handbag" size={24} color="white" /> */}
          </View>   
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    backgroundColor: '#191919',
    color: '#fff',
    marginTop: 40,
    
  },
  text: {
    color: '#fff',
    fontSize: 16,
    alignSelf: 'center',
  },
  textLength: {
    color: '#fff',
    fontSize: 13,
    alignSelf: 'center',
    justifyContent: 'center',
    
  },
  logoButton: {
    paddingLeft: 20,
    justifyContent: 'center', 
    flexGrow: 5,
  },
  iconButton: {
    position: 'relative',
    paddingLeft: 20,
    justifyContent: 'center', 
    flexGrow: 1,
  },
  icon: {
    color: '#fff',
    // position: 'absolute',
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