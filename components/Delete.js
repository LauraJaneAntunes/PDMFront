// components/Delete.js
import React from "react";
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

// Componente responsável por deletar um item via API
const DadosDeletado = (props) => {

  // Função que envia requisição DELETE para o backend com o ID recebido por props
  const Delete = (id) => {
    const url = `http://192.168.1.104:3000/delete/${id}`;
    console.log(`Deletando: ${url}`);
    
    fetch(url, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  turn (
    <View style={styles.container}>
      <Button
        mode="contained"
        buttonColor="#d32f2f" // Vermelho
        textColor="#fff"
        onPress={() => Delete(props.id)}
        style={styles.button}
      >
        Excluir
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    alignItems: 'flex-start',
  },
  button: {
    borderRadius: 4,
  },
});

export default DadosDeletado;