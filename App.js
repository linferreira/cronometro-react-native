import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  const [timer, setTimer] = useState(0)
  const [active, setActive] = useState(null)

  const start = () => {
    let time = timer

    if (active !== null) {
      clearInterval(active);
      setActive(null);
    } else {
      setActive(setInterval(() => {
        time += 0.1
      }, 100))
      setTimer(time)
    }
  }

  const limpar = () => {
    if (active !== null) {
      clearInterval(active);
      setActive(null);
    }
    setTimer(0);
  }

  return (
    <View style={styles.container}>
      <Image style={styles.cronometro} source={require('./src/cronometro.png')} />

      <Text style={styles.timer}>{timer.toFixed(1)}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => start()}>
          <Text style={styles.buttontext}>
            Começar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => limpar()} >
          <Text style={styles.buttontext}>
            Limpar
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  timer: {
    color: '#fff',
    fontSize: 65,
    fontWeight: 'bold',
    marginTop: -160
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 100,
    height: 40,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 40,
    margin: 20,
    borderRadius: 5,
  },
  buttontext: {
    fontSize: 18,
    fontWeight: 'bold',
  }

});
