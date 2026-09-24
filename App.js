import { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { TextInput } from 'react-native';
import { StyleSheet, Text, View, Pressable, Alert } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context"
import {  createNativeStackNavigator } from '@react-navigation/native-stack';
import { useRoute, NavigationContainer } from "@react-navigation/native";


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
        <Text  style={{ color: '#121212' }}>Entrar</Text>
     
      </Pressable>
      <Pressable 
      style={[styles.pressable, { backgroundColor: "#D9D9D9", width: 170,  marginTop: 10 }]}
      onPress={() => Alert.alert('Botão de cadastar pressionado')}>
        <Text style={{ color: '#121212' }}>Cadastrar</Text>
     
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
        <Text style={{ marginVertical: 75, fontSize: 24}}>Cadastar</Text>
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
      onPress={() => Alert.alert('Botão "Cadastar" pressionado')}>
        <Text style={{ color: '#121212' }}>Cadastrar</Text>
     
      </Pressable>
      
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const Perfil = () => {
  return (
  <SafeAreaProvider style={[{backgroundColor: '#e42020'}, styles.container]}>
    <SafeAreaView>
      <View style={{backgroundColor: '#D9D9D9', width: 400, height: 800, alignItems: 'center', justifyContent: 'center'}}>
       <View style={{ backgroundColor: 'yellow' }}>
        {/* <Image 
          source={{
            uri: ''
          }}
        /> */}
        <Text>NOME</Text> 
        <Text>exemplo@gmail.com</Text> 
      </View>
      <Pressable 
      style={styles.pressablePerfil}
      onPress={() => Alert.alert('Botão "Meu Perfil" pressionado')}>
        <Text style={{ color: '#121212' }}>Meu Perfil</Text>
      </Pressable>
      <Pressable 
      style={styles.pressablePerfil}
      onPress={() => Alert.alert('Botão "Configurações do Perfil" pressionado')}>
        <Text style={{ color: '#121212' }}>Configurações do Perfil</Text>
      </Pressable>
      <Pressable 
      style={styles.pressablePerfil}
      onPress={() => Alert.alert('Botão "Sair" pressionado')}>
        <Text style={{ color: '#121212' }}>Sair</Text>
      </Pressable>
      </View>
    </SafeAreaView>
  </SafeAreaProvider>
  )
}
const MeuPerfil = () => {
  return (
  <SafeAreaProvider>
    <SafeAreaView>
      <View style={{ flexDirection: row }}> {/* View do primeiro bloco: Foto de perfil + nome + email do usuário - facilita o uso do flexbox*/}
        <Text>NOME</Text> {/* Deve receber o nome escolhido pelo usuário */}
        <Text>exemplo@gmail.com</Text> {/* Deve receber o email escolhido pelo usuário - facilita o uso do flexbox*/}
      </View>
      <View> 
        <Text>NOME</Text>
        <Text>Email</Text>
        <Text>CPF</Text>
        <Text>Matrícula</Text>
        <Text>Senha</Text>
      </View>
    </SafeAreaView>
  </SafeAreaProvider>
  )
}
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Perfil" screenOptions={{headerStyle: {
        backgroundColor: '#D9D9D9'
      }}}>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: true, title: "Achados e Perdidos"}} />
        <Stack.Screen name="Cadastrar" component={Cadastrar} /> 
        <Stack.Screen name="MeuPerfil" component={MeuPerfil} /> 
        <Stack.Screen name="Perfil" component={Perfil} /> 
      </Stack.Navigator>
    </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
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
  pressable: {
    backgroundColor: '#AFA9FF',
    width: 220,
    height: 10,
    borderRadius: 35,
    marginTop: 50,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',

  },

  pressablePerfil: {
    backgroundColor: '#F8F8F8',
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
