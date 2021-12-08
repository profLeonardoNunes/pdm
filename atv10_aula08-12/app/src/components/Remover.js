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
const Input = styled.TextInput`
    width: 200px;
    height: 30px;
    border: solid 1px;
    margin-bottom: 10px;
`;


export default () => {
    const [pessoas, setPessoas] = useState([]);
    const [cpf, setCpf] = useState();
    const handleDeletar = () => {
        api.delete(`/pessoas/${cpf}`)
            .then(response => {
                alert(response.data.Mensagem);
            })
    };
    return (
        <Page>
            <Input onChangeText={(e) => setCpf(e)} placeholder="Digite o cpf para deletar"></Input>
            <Button title="Deletar" onPress={handleDeletar}></Button>
        </Page>
    );
}