import { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { TextInput } from 'react-native';
import { StyleSheet, Text, View, Pressable, Alert } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context"
import {  createNativeStackNavigator } from '@react-navigation/native-stack';
import { useRoute, NavigationContainer } from "@react-navigation/native";


const LoginScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'centers', justifyContent: 'center' }}>
      <Login/>
    </View>
  );
}

const Stack = createNativeStackNavigator();

const Login = () => {
  const [email, onChangeEmail]=useState("");
  const [senha, onChangeSenha]= useState("")
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={{ marginVertical: 75, fontSize: 24}}>Login</Text>
        <Text  style={styles.text}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
          placeholder="Digite seu email"
        />
        <Text style={styles.text}>Senha</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeSenha}
          value={senha}
          placeholder="Digite sua senha"
        />
        <Pressable 
          style={{fontSize: 30}}
          onPress={() => Alert.alert('"Esqueceu a senha?" pressionado')}>
          <Text>Esqueceu a senha?</Text>
        </Pressable>

        <Pressable
          style={styles.pressable}
          onPress={() => Alert.alert('Botão de entrar pressionado')}>
          <Text  style={styles.text_botao}>Entrar</Text>
        </Pressable>

        <Pressable
          style={[styles.pressable, { backgroundColor: "#D9D9D9", width: 170,  marginTop: 10 }]}
          onPress={() => Alert.alert('Botão de Cadastar Pressionado')}>
          <Text style={styles.text_botao}>Cadastrar</Text>
        </Pressable>

      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const Cadastrar = () => {
  const [email, onChangeEmail] = useState("");
  const [senha, onChangeSenha] = useState("");
  const [nome, onChangeNome] = useState("");
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={{ marginVertical: 75, fontSize: 24
        }}>Cadastar</Text>
        <Text  style={styles.text}>Nome</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNome}
          value={nome}
          placeholder="Digite seu nome"
        />

        <Text  style={styles.text}>Email</Text>

        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
          placeholder="Digite seu email"
        />

      <Text style={styles.text}>Senha</Text>

      <TextInput
        style={styles.input}
        onChangeText={onChangeSenha}
        value={senha}
        placeholder="Digite sua senha"
      />

      <Pressable
        style={styles.pressable}
        onPress={() => Alert.alert('Botão de cadastar pressionado')}>
        <Text style={styles.text_botao}>Cadastrar</Text>
      </Pressable>
      
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const Inicial = () => {
  
  return (

    <SafeAreaProvider>
      <SafeAreaView>

      

      </SafeAreaView>
    </SafeAreaProvider>

  )
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Cadastrar" screenOptions={{headerStyle: {
        backgroundColor: '#D9D9D9'
      }}}>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: true, title: "Achados e Perdidos", headerTitleAlign: 'center'}}
        />
        <Stack.Screen name="Cadastrar" component={Cadastrar} options={{ headerShown: true, title: "Achados e Perdidos", headerTitleAlign: 'center'}}
        /> 
          <Stack.Screen name="Inicial" component={Inicial} options={{ headerShown: true,
          title: "Achados e Perdidos",
          headerTitleAlign: 'center',
          headerRight: () => (
            <Icon
              name = 'person'
              type = ''
            />
          ),
      }}
        /> 
      </Stack.Navigator>
    </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: { 
    borderWidth: 2,
    borderRadius: 100,
    height: 40,
    width: 320,
    padding: 10,
    margin: 10,
    paddingLeft: 20,
    backgroundColor: '#D9D9D9',
  }, 
  text: {
    marginEnd: 250,
    marginHorizontal: 30,
    fontSize: 17
  },
  text_botao: {
    color: '#121212',

  },
  pressable: {
    backgroundColor: '#AFA9FF',
    width: 220,
    height: 10,
    borderRadius: 35,
    marginTop: 50,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',

  }

});

export default App;
