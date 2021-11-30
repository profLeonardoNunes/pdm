import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button } from 'react-native';
import styled from 'styled-components/native';

const PageConsulta = styled.View`
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
        <PageConsulta>
            <Text>Nome:</Text>
            <Input></Input>
            <Button title="Buscar...."></Button>

        </PageConsulta>
    );
}