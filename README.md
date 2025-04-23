# App Mobile - CRUD com React Native + API REST - Aluna Laura Jane Antunes

Projeto desenvolvido para a disciplina Programação de Dispositivos Móveis II do 5º semestre do curso de Desenvolvimento de Software Multiplataforma (DSM) da Fatec de Votorantim.

📋 Descrição
Este aplicativo mobile foi desenvolvido em React Native (com Expo) e se conecta a uma API REST para realizar operações de CRUD (Create, Read, Update e Delete).

O foco é o consumo de uma API utilizando requisições HTTP (GET, POST, PUT, PATCH, DELETE) simulando o cadastro e gerenciamento de usuários.

🧪 Funcionalidades
✅ Listar dados da API (GET)

✅ Inserir novo registro (POST)

✅ Atualizar dados (PUT e PATCH)

✅ Deletar registro (DELETE)


🛠 Tecnologias Utilizadas:
- React Native
- Expo
- Fetch API

Componentes funcionais (Hooks: useState, useEffect)


🚀 Como Executar

1. Requisitos
- Node.js
- Expo CLI (npm install -g expo-cli)
- Editor de código (VS Code)
- Celular com o app Expo Go instalado ou um emulador Android/iOS

2. Instalação e Execução

# Clonar o repositório e acessar a pasta

# Instalar as dependências
    npm install

# Iniciar o app
    npx expo start


📌 Observações
Este projeto consome uma API que deve estar rodando localmente (Node.js + MongoDB).

As requisições estão organizadas em funções assíncronas e separadas por ação (inserir, atualizar, deletar).

Há um componente dedicado para inserção, outro para exibição e outro para deletar.