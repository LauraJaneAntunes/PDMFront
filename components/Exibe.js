import React, { useState } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { Card, Avatar, Text, Modal, Portal, Title, Provider, Button, IconButton } from "react-native-paper";
import EditaContato from "../components/Edite";
import DadosDeletado from "../components/Delete";

const DadosExibido = (props) => {
  const [visible, setVisible] = useState(false);
  const [itemSelecionado, setItemSelecionado] = useState(null);
  const [editando, setEditando] = useState(false);

  const abrirDetalhes = (item) => {
    setItemSelecionado(item);
    setVisible(true);
  };

  const fecharModal = () => setVisible(false);

  // Função para atualizar a lista de contatos após deletar.
  const handleDeletar = (id) => {
    const novaLista = props.campos.filter(item => item._id !== id);
    props.setDados(novaLista);
    setVisible(false);
  }

  return (
    <Provider>
      <FlatList
        data={props.campos}
        keyExtractor={(item) => item._id}
        contentContainerStyle={styles.container}
        renderItem={({ item }) => (
          <Card style={styles.card} onPress={() => abrirDetalhes(item)}>
            <Card.Title
              title={<Text style={styles.name}>{item.name}</Text>}
              left={() => (
                <Avatar.Text
                  label={item.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase()}
                  size={40}
                  style={styles.avatar}
                />
              )}
            />
            <Card.Content>
              <View style={styles.contactRow}>
                <IconButton icon="email" size={20} style={styles.icon} />
                <Text style={styles.text}>{item.email}</Text>
              </View>
              <View style={styles.contactRow}>
                <IconButton icon="phone" size={20} style={styles.icon} />
                <Text style={styles.text}>{item.celular}</Text>
              </View>
            </Card.Content>
          </Card>
        )}
      />

      <Portal>
        <Modal visible={visible} onDismiss={fecharModal} contentContainerStyle={styles.modal}>
          <IconButton
            icon="close"
            size={26}
            onPress={() => {
              setEditando(false);
              fecharModal();
            }}
            style={styles.iconFechar}
          />
          <Title style={styles.modalTitle}>
            {editando ? "Editar Contato" : "Detalhes do Contato"}
          </Title>

          {editando ? (
            <EditaContato
              contato={itemSelecionado}
              onAtualizado={(dadosAtualizados) => {
                const novaLista = props.campos.map((item) =>
                  item._id === dadosAtualizados._id ? dadosAtualizados : item
                );
                props.setDados(novaLista);
                setEditando(false);
                setVisible(false);
              }}
            />
          ) : (
            <>
              <Text>Nome: {itemSelecionado?.name}</Text>
              <Text>Email: {itemSelecionado?.email}</Text>
              <Text>Celular: {itemSelecionado?.celular}</Text>

              <View style={styles.iconRow}>
                <Button
                  icon="pencil"
                  mode="contained-tonal"
                  textColor="#7c3aed"
                  onPress={() => setEditando(true)}
                  style={styles.editButton}
                >
                  Editar
                </Button>
              </View>

              <DadosDeletado
                id={itemSelecionado?._id}
                onDeleted={handleDeletar}
              />
            </>
          )}
        </Modal>
      </Portal>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  card: {
    marginBottom: 10,
    elevation: 3,
    borderRadius: 8,
    overflow: 'hidden',
  },
  avatar: {
    backgroundColor: "#7c3aed",
  },
  name: {
    fontWeight: 'bold',
    color: '#7c3aed',
    fontSize: 20,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    flexWrap: 'wrap', 
  },
  icon: {
    marginRight: 8, 
    color: '#7c3aed',
  },
  text: {
    textAlign: 'left', 
    flexWrap: 'wrap', 
    maxWidth: '80%', 
  },
  modal: {
    backgroundColor: "white",
    padding: 20,
    margin: 20,
    borderRadius: 8,
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold",
    color: "#7c3aed",
  },
  iconFechar: {
    position: "absolute",
    top: 1,
    right: 1,
    zIndex: 1,
  },
  iconRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 20,
    gap: 10,
  },
  editButton: {
    width: "50%",
  },
});

export default DadosExibido;