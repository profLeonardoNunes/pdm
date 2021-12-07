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
    const [nome, setNome] = useState();
    const [cpf, setCpf] = useState();
    const [idade, setIdade] = useState();
    const [peso, setPeso] = useState();
    const [altura, setAltura] = useState();

    const handleCadastrar = () => {
        api.post('/pessoas', {
            nome: nome,
            cpf: cpf,
            idade: idade,
            peso: peso,
            altura: altura
        }).then(response => {
            alert(response.data.Mensagem);
        });
    }

    return (
        <Page>
            <Text>Nome:</Text>
            <Input onChangeText={(e) => setNome(e)}></Input>
            <Text>Cpf:</Text>
            <Input onChangeText={(e) => setCpf(e)}></Input>
            <Text>Idade:</Text>
            <Input onChangeText={(e) => setIdade(e)}></Input>
            <Text>Peso:</Text>
            <Input onChangeText={(e) => setPeso(e)}></Input>
            <Text>Altura:</Text>
            <Input onChangeText={(e) => setAltura(e)}></Input>
            <Button title="Cadastrar" onPress={handleCadastrar}></Button>
        </Page>
    );
}