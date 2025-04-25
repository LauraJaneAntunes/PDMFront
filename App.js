//App.js
import React from 'react';
import { useState, useEffect } from 'react';
import { Icon } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { API_BASE_URL } from './config';
import Home from './screens/Home';
import DadosInsert from './components/Insert';

const Tab = createBottomTabNavigator();

export default function App() {
  // Estado que armazena os dados dos usuários
  const [campos, setDados] = useState([]);

  // useEffect para buscar os dados uma vez ao montar o componente
  useEffect(() => {
    fetch(`${API_BASE_URL}/`)

      .then((response) => response.json())
      .then((json) => {
        setDados(json); // Atualiza o estado com os dados recebidos
      });

  }, []); // Array vazio => executa apenas uma vez (componentDidMount)

  // Função para buscar novamente os dados
  const Exibir = () => {
    fetch(`${API_BASE_URL}/`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setDados(json);
      });
  };

  // Função para adicionar um novo usuário
  const Add = () => {
    fetch(`${API_BASE_URL}/add`, {
      method: 'POST',
      body: JSON.stringify({
        name: 'Marllon',
        email: '@marllon',
        celular: '1198765432',
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
    fetch(`${API_BASE_URL}/update/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        name: 'Lobo',
        email: '@lobo',
        celular: '1398765432',
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
    fetch(`${API_BASE_URL}/update/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        name: 'Lobo',
        email: '@lobo',
        celular: '1598765432',
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
    fetch(`${API_BASE_URL}/update/${id}`, {    
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
          
            if (route.name === 'Contato') iconName = 'account-group-outline';
            else if (route.name === 'Adicionar Contato') iconName = 'account-plus-outline';
          
            return (
              <Icon source={iconName} color={color} size={size} />
            );
          },
          
          tabBarActiveTintColor: '#7c3aed',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Contato">
         {(props) => <Home {...props} campos={campos} setDados={setDados} />}
        </Tab.Screen>
        
        <Tab.Screen 
          name="Adicionar Contato" 
          children={(props) => <DadosInsert {...props} setDados={setDados} />} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}