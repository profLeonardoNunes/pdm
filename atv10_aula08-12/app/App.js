import React, { useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import styled from 'styled-components/native';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import Listar from './src/components/Listar';
import Consultar from './src/components/Consultar';
import Cadastro from './src/components/Cadastro';
import Remover from './src/components/Remover';
const Page = styled.SafeAreaView`
  flex: 1;  
`;

const Content = styled.View`
  height: 70%;  
`;
const Menu = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Btn = styled.TouchableOpacity`
  margin-top: 1px;
  margin-bottom: 1px;
  margin-left: 1px;
  margin-right: 1px;
  border-radius: 5px;
  width: 100px;
  height: 70;
  flex: 1;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18;
  font-family: 'Tahoma';
  background-color: rgb(33,150,243);
`;

export default () => {
  const [exibir, setExibir] = useState();
  return (
    <Page>
      <Header></Header>
      <Content>


        {exibir == 1 &&
          <Cadastro></Cadastro>
        }
        {
          exibir == 2 &&
          <Remover></Remover>
        }
        {exibir == 3 &&
          <Consultar></Consultar>
        }
        {exibir == 4 &&
          <Listar></Listar>
        }
      </Content>
      <Menu>
        <Btn onPress={(e) => setExibir(1)}>Cadastro</Btn>
        <Btn onPress={(e) => setExibir(2)}>Remover</Btn>
        <Btn onPress={(e) => setExibir(3)}>Consultar</Btn>
        <Btn onPress={(e) => setExibir(4)}>Listar</Btn>
      </Menu>
      <Footer></Footer>
    </Page>
  );
}



