// components/Delete.js
import React from "react";
import { View, StyleSheet, Alert } from 'react-native';
import { Button } from 'react-native-paper';
import { API_BASE_URL } from '../config.js';

const DadosDeletado = (props) => {
  const confirmarExclusao = (id) => {
    Alert.alert(
      "Confirmar exclusão",
      "Tem certeza que deseja excluir este contato? Essa ação não pode ser desfeita.",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Excluir",
          style: "destructive",
          onPress: () => {
            const url = `${API_BASE_URL}/delete/${id}`;
            console.log(`Deletando: ${url}`);
            fetch(url, {
              method: 'DELETE',
            })
              .then((response) => response.json())
              .then((json) => {
                console.log(json);
                props.onDeleted(id); // chama função do pai para atualizar a lista
              });
          },
        },
      ]
    );
  };

  return (
    <View style={styles.iconContainer}>
      <Button
        icon="delete"
        mode="outlined"
        size={28}
        onPress={() => confirmarExclusao(props.id)}
        style={styles.deleteButton}
      >
        Apagar
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 20,
  },
  deleteButton: {
    width: "50%",
  },
});

export default DadosDeletado;