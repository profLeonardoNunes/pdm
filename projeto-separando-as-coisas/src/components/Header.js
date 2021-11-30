import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';
import styled from 'styled-components/native';

const Header = styled.View`
    height: 80px;
    width: 100%;
    background-color: gray;
`;

export default () => {
    return (
        <Header></Header>
    );
}