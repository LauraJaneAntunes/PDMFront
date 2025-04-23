// components/Exibe.js
import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import DadosDeletado from "./Delete";

// Componente responsável por exibir os dados recebidos por props
const DadosExibido = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={props.campos} // Lista de dados recebida via props
        keyExtractor={(item) => item._id} // Chave única para cada item
        renderItem={({ item }) => {
          return (
            <View style={styles.card}>
              <Text style={styles.label}>ID:</Text>
              <Text>{item._id}</Text>

              <Text style={styles.label}>Nome:</Text>
              <Text>{item.name}</Text>

              <Text style={styles.label}>Email:</Text>
              <Text>{item.email}</Text>

              <DadosDeletado id={item._id} /> {/* Componente para deletar item */}
            </View>
          );
        }}
      />
    </View>
  );
};

// Estilos do componente
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  card: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#00FFFF',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
  label: {
    fontWeight: 'bold',
  }
});

export default DadosExibido;