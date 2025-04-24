// components/Exibe.js
import React from "react";
import { FlatList, View, SafeAreaView, StyleSheet } from "react-native";
import { Card, Text, Title } from "react-native-paper";
import DadosDeletado from "./Delete";

// Componente responsável por exibir os dados recebidos por props
const DadosExibido = (props) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={props.campos}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Content>
              <Title style={styles.label}>ID:</Title>
              <Text>{item._id}</Text>

              <Title style={styles.label}>Nome:</Title>
              <Text>{item.name}</Text>

              <Title style={styles.label}>Celular:</Title>
              <Text>{item.phone}</Text>

              <Title style={styles.label}>Email:</Title>
              <Text>{item.email}</Text>

              <DadosDeletado id={item._id} />
            </Card.Content>
          </Card>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  card: {
    marginVertical: 10,
    elevation: 3, // sombra para Android
    borderRadius: 8,
  },
  label: {
    fontSize: 14,
    marginTop: 8,
  },
});

export default DadosExibido;