import React, { useState, useEffect } from 'react';
import {
  View, 
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';
import imagex from './assets/icons/eco-light.png';
import imagey from './assets/icons/eco-light-off.png';
import logox from './assets/icons/logo-dio.png';
import logoy from './assets/icons/logo-dio-white.png';

export default function App() {
  const [toggle, setToggle] = useState(true);

  function handleToggle(){
    setToggle(!toggle);
  }

  useEffect(() => {
    Torch.switchState(toggle);
  }, [toggle]);

  useEffect(() => {
    const subscription = RNShake.addListener(() => setToggle(!toggle));

    return () => subscription.remove();
  }, []);

  return (
    <View style={toggle ? styles.containerLight : styles.container}>
      <TouchableOpacity
        onPress={handleToggle}
      >
        <Image 
          style={toggle ? styles.lightingOn : styles.lightingOff}
          source={toggle ? imagex : imagey}
        />

        <Image 
          style={styles.dioLogo}
          source={toggle ? logox : logoy}
        />
      </TouchableOpacity>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLight: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  lightingOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    height: 150,
    width: 150
  },
  lightingOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    height: 150,
    width: 150
  },
  dioLogo: {
    resizeMode: 'contain',
    alignSelf: 'center',
    height: 250,
    width: 250
  },
});
