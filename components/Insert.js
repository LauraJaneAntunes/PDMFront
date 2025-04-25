import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { TextInput, Button, Title } from "react-native-paper";
import { API_BASE_URL } from '../config.js';

// Componente responsável por cadastrar um novo usuário no backend
const DadosInsert = ({onCadastroSuccess}) => {
  const [nome, setNome] = useState(''); // Estado para armazenar o nome
  const [email, setEmail] = useState(''); // Estado para armazenar o email
  const [celular, setCelular] = useState(''); // Estado para armazenar o celular

  //Validação do Front. Verifica se os campos estão preenchidos e se estão no formato correto
  
  const validarCampos = () => {
    if (!nome || !email || !celular) {
      Alert.alert("Atenção", "Preencha todos os campos!");
      return false;
    }
  
    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert("Atenção", "Email inválido! Ex: exemplo@email.com");
      return false;
    }
  
    // Validação de celular
    const celularRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
    if (!celularRegex.test(celular)) {
      Alert.alert("Atenção", "Celular inválido! Ex: (11) 91234-5678");
      return false;
    }
  
    // Validação de nome
    if (nome.length < 3) {
      Alert.alert("Atenção", "O nome deve ter pelo menos 3 caracteres.");
      return false;
    }
  
    return true;
  };
  

  // Função que envia os dados para a API via POST
  const Add = () => {
    if (!validarCampos()) return;

    const url = `${API_BASE_URL}/add/`;

    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        name: nome,
        email: email,
        celular: celular,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      // Limpa os campos após o cadastro ou avisa se houver erro e exibe o resultado no console
      .then((json) => {
        console.log(json);
        Alert.alert("Sucesso", "Usuário cadastrado com sucesso!");
        // Limpa os campos após o cadastro
        setNome('');
        setEmail('');
        setCelular('');
        // Chama a função do prop onCadastroSuccess para atualizar a lista de usuários
        if (onCadastroSuccess) {
          onCadastroSuccess(); // Atualiza a lista no componente pai
        }
      })
      .catch((error) => {
        console.error(error);
        Alert.alert("Erro", "Não foi possível cadastrar. Tente novamente.");
      });
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Cadastro de Usuário</Title>

      <TextInput
        label="Nome"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
        mode="outlined"
      />

      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        mode="outlined"
      />

      <TextInput
        label="Celular"
        value={celular}
        onChangeText={setCelular}
        style={styles.input}
        keyboardType="phone-pad"
        mode="outlined"
      />

      <Button mode="contained" onPress={Add} style={styles.button}>
        Cadastrar
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    padding: 10,
  },
  title: {
    marginBottom: 16,
    fontSize: 20,
  },
  input: {
    marginBottom: 12,
  },
  button: {
    marginTop: 10,
  },
});

export default DadosInsert;