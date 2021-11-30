import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';
import styled from 'styled-components/native';

const Footer = styled.View`
    height: 80px;
    width: 100%;
    background-color: gray;
`;
const Texto = styled.Text``;

export default () => {
    return (
        <Footer>
            <Text>Desenvolvido por Leonardo Nunes</Text>
        </Footer>
    );
}