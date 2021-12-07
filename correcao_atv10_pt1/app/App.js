import React from 'react';
import {
  Text,
  View,
  SafeAreaView
} from 'react-native';
import styled from 'styled-components/native';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import Listar from './src/components/Listar';
import Consultar from './src/components/Consultar';
import Cadastro from './src/components/Cadastro';
const Page = styled.SafeAreaView`
  flex: 1;  
`;

const Content = styled.View`
  height: 80%;  
`;

export default () => {
  return (
    <Page>
      <Header></Header>
      <Content>
        {/* <Listar></Listar> */}
        {/* <Consultar></Consultar> */}
        <Cadastro></Cadastro>
      </Content>
      <Footer></Footer>
    </Page>
  );
}

