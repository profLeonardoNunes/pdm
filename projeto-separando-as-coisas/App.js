import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';
import styled from 'styled-components/native';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import Cadastro from './src/components/Cadastro';
import Consulta from './src/components/Consulta';

const Page = styled.SafeAreaView`
  flex: 1;
`;
const Input = styled.TextInput`
  height: 50px;
  width: 200px;
  border: solid 1px;
`;

const Content = styled.View`
  height: 80%;
  width: 100%;  
`;

export default function App() {
  const [nome, setNome] = useState();
  const [sobrenome, setSobrenome] = useState();
  const [exibirCadastro, setExibirCadastro] = useState(false);
  const [exibirConsulta, setExibirConsulta] = useState(true);



  return (
    <Page>
      <Header></Header>
      <Content>
        {exibirCadastro &&
          <Cadastro></Cadastro>
        }
        {exibirConsulta &&
          <Consulta></Consulta>
        }
      </Content>
      <Footer></Footer>
      {/* <Text>Teste</Text>
      <Input onChangeText={e => setNome(e)}></Input>
      <Text>{nome}</Text> */}
    </Page>
  );
}


