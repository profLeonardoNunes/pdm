import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';
import styled from 'styled-components/native';

const PageCadastro = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;
const Input = styled.TextInput`
    height: 30px;
    width: 200px;
    border: solid 1px;
`;

export default () => {
    return (
        <PageCadastro>
            <Text>Nome:</Text>
            <Input></Input>
            <Text>Telefone:</Text>
            <Input></Input>
        </PageCadastro>
    );
}