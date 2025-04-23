// components/Insert.js
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

// Componente responsável por cadastrar um novo usuário no backend
const DadosInsert = () => {
  const [nome, setNome] = useState(null);   // Estado para armazenar o nome
  const [email, setEmail] = useState(null); // Estado para armazenar o email

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
      <Text>Nome:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setNome(text)}
        placeholder="Digite seu nome"
      />
      <Text>Email:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
        placeholder="Digite seu email"
        keyboardType="email-address"
      />
      <Button
        title="Cadastrar"
        onPress={Add}
      />
    </View>
  );
};

// Estilização do componente
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#000000',
    margin: 20,
    padding: 10,
    borderRadius: 5,
  },
  input: {
    height: 40,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#000',
    paddingHorizontal: 10,
    borderRadius: 4,
  }
});

export default DadosInsert;