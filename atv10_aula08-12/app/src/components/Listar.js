import React,
{
    useEffect,
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
  overflow: scroll;
`;
const Card = styled.View`
    height: 50px;
    border: solid 1px;
    border-radius: 5px;
    flex-direction: row;
`;
const Label = styled.Text`
    font-weight: bold;
`;
const CardContent = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;


export default () => {
    const [pessoas, setPessoas] = useState([]);
    useEffect(() => {
        api.get("/pessoas")
            .then(response => {
                setPessoas(response.data);
            })
    }, []);
    return (
        <Page>
            {
                pessoas.map(p =>
                    <Card>
                        <CardContent>
                            <Label>Nome:</Label>
                            <Text>{p?.nome}</Text>
                        </CardContent>
                        <CardContent>
                            <Label>Idade:</Label>
                            <Text>{p?.idade}</Text>
                        </CardContent>
                        <CardContent>
                            <Label>CPF:</Label>
                            <Text>{p?.cpf}</Text>
                        </CardContent>
                        <CardContent>
                            <Label>Peso:</Label>
                            <Text>{p?.peso}</Text>
                        </CardContent>
                        <CardContent>
                            <Label>Altura:</Label>
                            <Text>{p?.altura}</Text>
                        </CardContent>
                        <CardContent>
                            <Label>IMC:</Label>
                            <Text>{p?.imc}</Text>
                        </CardContent>
                    </Card>
                )
            }
        </Page>
    );
}


