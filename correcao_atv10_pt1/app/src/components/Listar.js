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
`;
const Card = styled.View`
    height: 50px;
    border: solid 1px;
    border-radius: 5px;
`;


export default () => {
    const [pessoas, setPessoas] = useState([]);
    const handleBuscar = () => {
        api.get("/pessoas")
            .then(response => {
                setPessoas(response.data);
            })
    };
    return (
        <Page>
            <Button title="Buscar" onPress={handleBuscar}></Button>
            {
                pessoas.map(p =>
                    <Card><Text>{p?.nome}</Text></Card>
                )
            }
        </Page>
    );
}


