import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { API_BASE_URL } from '../config';

const EditaContato = ({ contato, onAtualizado }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [celular, setCelular] = useState('');

  useEffect(() => {
    if (contato) {
      setNome(contato.name);
      setEmail(contato.email);
      setCelular(contato.celular || '');
    }
  }, [contato]);

  const atualizarContato = () => {
    fetch(`${API_BASE_URL}/update/${contato._id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        name: nome,
        email: email,
        celular: celular,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => res.json())
      .then((json) => {
        onAtualizado(json); // retorna para o componente pai
        Alert.alert("Sucesso", "Contato editado com sucesso!");
      })
      .catch((err) => 
        console.error('Erro ao atualizar:', err));
        Alert.alert("Erro", "Ocorreu um problema ao editar o contato.");
  };

  return (
    <View style={styles.form}>
      <TextInput
        label="Nome"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
      />
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={styles.input}
      />
      <TextInput
        label="Celular"
        value={celular}
        onChangeText={setCelular}
        keyboardType="phone-pad"
        style={styles.input}
      />

      <Button mode="contained" onPress={atualizarContato} style={styles.button}>
        Salvar Alterações
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    marginTop: 16,
    gap: 12,
  },
  input: {
    backgroundColor: 'white',
  },
  button: {
    marginTop: 10,
  },
});

export default EditaContato;