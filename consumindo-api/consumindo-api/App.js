import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import api from './api';

export default function App() {
  const [pessoas, setPessoas] = useState([]);

  function BuscarPessoas() {
    api.get("/pessoas")
      .then((response) => {
        setPessoas(response.data);
      })
      .catch((err) => {
        alert("erro" + err);
      });
  }

  return (
    <View>
      <Button title="Buscar" onPress={BuscarPessoas}></Button>
      {pessoas.map(p =>
        <Text>Nome: {p?.nome} Idade: {p?.idade}</Text>
      )
      }
    </View >
  );
}
