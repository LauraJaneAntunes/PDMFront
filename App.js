//App.js
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, FlatList, ScrollView } from 'react-native';

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

  /*
    ⚠️ Atenção:
    Evite aninhar FlatList diretamente dentro de ScrollView com a mesma orientação.
    Pode causar problemas de desempenho e bugs (erro VirtualizedLists).
  */

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Botões de Ações */}
        <Button title='Exibir' onPress={Exibir} />
        <Button title='Inserir' onPress={Add} />
        <Button title='Delete' onPress={() => Delete("67f65973fe21fbccb25640b0")} />
        <Button title='Put' onPress={() => Atualizar0("67f660c91c35c66376062545")} />
        <Button title='PATCH' onPress={() => Atualizar("67f660f71c35c66376062549")} />

        {/* Componentes de Inserção e Exibição */}
        <DadosInsert />
        <DadosExibido campos={campos} />

        {/* Barra de status */}
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/* 
🧪 FlatList alternativa (comentada):

<FlatList
  data={campos}
  renderItem={({ item }) => (
    <View style={{ margin: 20, backgroundColor: '#1E90FF', border: '1px solid #000', padding: 5 }}>
      <Text>ID : {item._id}</Text>
      <Text>NOME : {item.name}</Text>
    </View>
  )}
/> 
*/