import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import styled from 'styled-components/native';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput
} from 'react-native';
const Page = styled.SafeAreaView`
  flex: 1;
  
`;
const Cabecalho = styled.View`
  flex: 1;
  background-color: rgb(2,0,36);
  flex-direction: column;
  
`;
const DetalheCabecalho = styled.View`
  background-color: rgb(255,255,0);
  height: 10px;
  width: 100%;    
`;

const TituloApp = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  font-family: 'Tahoma';
`;
const TextoTituloApp = styled.Text`
  color: #cecece;
  font-size: 35px;  
`;
const Conta = styled.View`
  flex: 5;
  align-items: center;
  justify-content: center;
  background-color: #cecece;
`;

const OpcoesGorgeta = styled.View`  
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
const Rodape = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  flex: 1;
  background-color: rgb(2,0,36);
  flex-direction: column;  
`;
const Input = styled.TextInput`
  border: solid 1px;
  height: 50px;
  width: 200px;
  background-color: #fff;
`;

const Btn = styled.TouchableOpacity`   
  width: 90px;
  height: 50px;
  background-color: ${props => props.cor};
  margin-top: 10px;
  margin-right: 7.5px;
  margin-left: 7.5px;
  justify-content: center;
  align-items: center;
`;

const Label = styled.Text`
    font-size: 15px;
    font-weight: bold;
    margin-top: 20px;
`;

const SelecaoGorjeta = styled.View`
  flex-direction: column;
  
`;
const Gorjeta = styled.View`
  flex: 5;
  background-color: #cecece;
  width: 100%;    
  justify-content: center;
  align-items: center;
`;
const Total = styled.View`
  flex: 5;
  background-color: #cecece;
  width: 100%;    
  justify-content: center;
  align-items: center;
`;
const ValorFinal = styled.View`
  flex: 1;
  background-color: red;
`;

export default () => {
  const [exibirOpcoes, setExibirOpcoes] = useState(false);
  const [exibirPedirConta, setExibirPedirConta] = useState(true);
  const [exibirTotal, setExibirTotal] = useState(false);
  const [valorConta, setValorConta] = useState();
  const [gorjeta, setGorjeta] = useState();
  function EscolherGorjeta(e) {
    setGorjeta(e);
    setExibirTotal(true);
    setExibirOpcoes(false);
  }
  function Cancelar() {
    setExibirOpcoes(false);
    setExibirTotal(false);
    setValorConta(0);
    setGorjeta(0);
  }
  function SemGorjeta() {
    if (valorConta) {
      setExibirTotal(true);
      setGorjeta(0);
    }
    else {
      alert("Digite um valor para a conta");
    }
  }
  return (
    <Page>
      <Cabecalho>
        <TituloApp>
          <TextoTituloApp>App Gorjetas</TextoTituloApp>
        </TituloApp>
        <DetalheCabecalho></DetalheCabecalho>
      </Cabecalho>
      {exibirPedirConta &&
        <Conta>
          <Label>
            Valor da conta: R$
          </Label>
          <Input keyboardType='numeric' onChangeText={e => setValorConta(e)}></Input>
          <Label>Aceita pagar Gorjeta?</Label>

          <OpcoesGorgeta>
            <Btn cor="#32cd32" onPress={e => setExibirOpcoes(true)}>
              <Text>Sim</Text>
            </Btn>
            <Btn cor="#ff0000" onPress={SemGorjeta}>
              <Text>Não</Text>
            </Btn>
          </OpcoesGorgeta>
        </Conta>
      }
      {exibirOpcoes &&
        <Gorjeta>
          <Label>Quanto?</Label>
          <SelecaoGorjeta>
            <Btn onPress={e => EscolherGorjeta(0.5)} cor="#DCDCDC"><Text>5%</Text></Btn>
            <Btn onPress={e => EscolherGorjeta(0.10)} cor="#c0c0c0"><Text>10%</Text></Btn>
            <Btn onPress={e => EscolherGorjeta(0.15)} cor="#a9a9a9"><Text>15%</Text></Btn>
            <Btn onPress={Cancelar} cor="red"><Text>Cancelar</Text></Btn>
          </SelecaoGorjeta>
        </Gorjeta>
      }
      {exibirTotal &&
        <Total>
          <Label>Sua conta: R$ {valorConta}</Label>
          <Label>Valor da Gorjeta: R${valorConta * gorjeta}</Label>
          <Label>Obrigado e volte sempre!</Label>
        </Total>
      }
      <Rodape></Rodape>
    </Page>
  );
}