//App.js
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';

import DadosExibido from './components/Exibe';
import DadosInsert from './components/Insert';

export default function App() {
  // Estado que armazena os dados dos usuários
  const [campos, setDados] = useState([]);

  // useEffect para buscar os dados uma vez ao montar o componente
  useEffect(() => {
    let url = 'http://192.168.1.104:3000/';

    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setDados(json); // Atualiza o estado com os dados recebidos
      });

  }, []); // Array vazio => executa apenas uma vez (componentDidMount)

  // Função para buscar novamente os dados
  const Exibir = () => {
    let url = 'http://192.168.1.104:3000/';
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setDados(json);
      });
  };

  // Função para adicionar um novo usuário
  const Add = () => {
    let url = 'http://172.16.4.101:3000/add/';
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        name: 'Marllon',
        email: '@marllon'
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  // Função para atualizar parcialmente (PATCH) um usuário
  const Atualizar = (id) => {
    let url = `http://192.168.67.126:3000/update/${id}`;
    fetch(url, {
      method: 'PATCH',
      body: JSON.stringify({
        name: 'Lobo',
        email: '@lobo'
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  // Função para atualizar completamente (PUT) um usuário
  const Atualizar0 = (id) => {
    let url = `http://172.68.0.156:3000/put_update/${id}`;
    fetch(url, {
      method: 'PUT',
      body: JSON.stringify({
        name: 'Lobo',
        email: '@lobo'
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  // Função para deletar um usuário
  const Delete = (id) => {
    let url = `http://172.16.4.101:3000/delete/${id}`;
    console.log(url);
    fetch(url, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Button mode="contained" onPress={Exibir} style={styles.button}>Exibir</Button>
        <Button mode="contained" onPress={Add} style={styles.button}>Inserir</Button>
        <Button mode="contained" buttonColor="#d32f2f" onPress={() => Delete("67f65973fe21fbccb25640b0")} style={styles.button}>
          Delete
        </Button>
        <Button mode="contained" onPress={() => Atualizar0("67f660c91c35c66376062545")} style={styles.button}>PUT</Button>
        <Button mode="contained" onPress={() => Atualizar("67f660f71c35c66376062549")} style={styles.button}>PATCH</Button>

        <DadosInsert />
        <DadosExibido campos={campos} />

        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  button: {
    marginVertical: 6,
    width: 200,
  },
});