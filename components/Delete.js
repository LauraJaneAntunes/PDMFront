// components/Delete.js
import React from "react";
import { View, Pressable, Text } from 'react-native';

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

  return (
    <View>
      {/* Botão de exclusão */}
      <Pressable
        style={{
          borderWidth: 1,
          borderColor: 'black',
          padding: 8,
          margin: 5,
          width: '30%',
          alignItems: "center",
          backgroundColor: '#FFCCCC',
          borderRadius: 4,
        }}
        onPress={() => Delete(props.id)}
      >
        <Text style={{ color: '#800000' }}>Excluir</Text>
      </Pressable>
    </View>
  );
};

export default DadosDeletado;