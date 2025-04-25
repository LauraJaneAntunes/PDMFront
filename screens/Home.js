//screens\Home.js
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import DadosExibido from '../components/Exibe';
import { Title, IconButton } from 'react-native-paper';

const Home = (props) => {
  const { campos, setDados } = props;

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Agenda</Title>
      {/*Contador de usuários*/}
      <Text style={styles.count}>{campos.length} Usuários</Text>

      {campos.length === 0 ? (
        <View style={styles.emptyContainer}>
          <IconButton icon="account-outline" size={64} iconColor="#bbb" />
          <Text style={styles.emptyTitle}>Não há nenhum contato</Text>
          <Text style={styles.emptyText}>
            Adicione seu primeiro contato em {'\n'}'Add Usuário' 
          </Text>
        </View>
      ) : (
        <DadosExibido campos={campos} setDados={setDados} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20
  },
  title: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    color: '#7c3aed'
  },
  count: {
    fontSize: 14, 
    color: '#666' 
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  emptyTitle: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    marginTop: 12,
    color: '#333', 
  },
  emptyText: { 
    textAlign: 'center', 
    marginTop: 8, 
    color: '#666' 
  },
});

export default Home;