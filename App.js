import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

let timer = null;
let ss = 0;
let mm = 0;
let hh = 0;

export default function App() {
  const [number, setNumber] = useState(0);
  const [buttonLabel, setButtonLabel] = useState("INICIAR");
  const [lastTime, setLastTime] = useState(null);

  function start() {
    if (timer) {
      //Aqui para o timer
      clearInterval(timer);
      timer = null;

      setButtonLabel("INICIAR");
    } else {
      //Comecar o timer...
      timer = setInterval(() => {
        ss++;

        if (ss == 60) {
          ss = 0;
          mm++;
        }

        if (mm == 60) {
          mm = 0;
          hh++;
        }

        let format =
          (hh < 10 ? "0" + hh : hh) +
          ":" +
          (mm < 10 ? "0" + mm : mm) +
          ":" +
          (ss < 10 ? "0" + ss : ss);

        setNumber(format);
      }, 1000);

      setButtonLabel("PARAR");
    }
  }

  function clear() {
    if (timer) {
      //Parar o timer!
      clearInterval(timer);
      timer = null;
    }

    setLastTime(number);
    setNumber(0);
    ss = 0;
    mm = 0;
    hh = 0;
    setButtonLabel("INICIAR");
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("./src/cronometro.png")} />

      <Text style={styles.timer}> {number} </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={start}>
          <Text style={styles.buttonText}> {buttonLabel} </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={clear}>
          <Text style={styles.buttonText}>LIMPAR</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.runningText}>
          {lastTime ? "Ultimo tempo: " + lastTime : ""}
        </Text>
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
  image: {
    width: '85%',
    height: '45%'
  },
  timer: {
    color: '#fff',
    fontSize: 45,
    fontWeight: 'bold',
    marginTop: -190
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 150,
    height: 40,
  },
  button: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 40,
    margin: 17,
    borderRadius: 9
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#116193'
  },
  runningText: {    
    marginTop: 40,
    fontSize: 23,
    color: "#116193",
    fontStyle: "italic",
  },
});
