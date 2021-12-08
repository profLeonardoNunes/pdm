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
    height: 50%;
    border: solid 1px;
    border-radius: 5px;
    border-color: blue;
    margin-top: 10px;
    width: 200px;
`;
const Input = styled.TextInput`
    width: 200px;
    height: 30px;
    border: solid 1px;
    margin-bottom: 10px;
`;
const Label = styled.Text`
    font-weight: bold;
`;
const CardContent = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 50px;    
`;


export default () => {
    const [pessoas, setPessoas] = useState([]);
    const [busca, setBusca] = useState();
    const handleBuscar = () => {
        api.get(`/pessoas/consultar/${busca}`)
            .then(response => {
                setPessoas(response.data);
            })
    };
    return (
        <Page>
            <Input onChangeText={(e) => setBusca(e)} placeholder="Digite o nome ou cpf"></Input>
            <Button title="Buscar" onPress={handleBuscar}></Button>
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