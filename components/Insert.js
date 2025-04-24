// components/Insert.js
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Button, Title } from "react-native-paper";

// Componente responsável por cadastrar um novo usuário no backend
const DadosInsert = () => {
  const [nome, setNome] = useState(null);   // Estado para armazenar o nome
  const [email, setEmail] = useState(null); // Estado para armazenar o email
  const [celular, setCelular] = useState(''); // Estado para armazenar o celular

  // Função que envia os dados para a API via POST
  const Add = () => {
    const url = 'http://localhost:3000/add/'; // URL do endpoint de cadastro
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        name: nome,
        email: email
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
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