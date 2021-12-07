import React,
{
    useState
} from 'react';
import {
    Text,
    View,
    TextInput,
    Button
} from 'react-native';
import styled from 'styled-components/native';
import api from '../../api';

const Page = styled.View`  
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Card = styled.View`
    height: 50px;
    border: solid 1px;
    border-radius: 5px;
    border-color: blue;
`;
const Input = styled.TextInput`
    width: 200px;
    height: 30px;
    border: solid 1px;
    margin-bottom: 10px;
`;


export default () => {
    const [pessoas, setPessoas] = useState([]);
    const [nome, setNome] = useState();
    const handleBuscar = () => {
        api.get(`/pessoas/nome/${nome}`)
            .then(response => {
                setPessoas(response.data);
            })
    };
    return (
        <Page>
            <Input onChangeText={(e) => setNome(e)}></Input>
            <Button title="Buscar" onPress={handleBuscar}></Button>
            {
                pessoas.map(p =>
                    <Card>
                        <View><Text>Nome: {p?.nome}</Text></View>
                        <View><Text>Idade: {p?.idade}</Text></View>
                    </Card>
                )
            }
        </Page>
    );
}