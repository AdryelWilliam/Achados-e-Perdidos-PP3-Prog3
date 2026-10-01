import { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { TextInput } from 'react-native';
import { StyleSheet, Text, View, Pressable, Alert, ScrollView } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context"
import {  createNativeStackNavigator } from '@react-navigation/native-stack';
import { useRoute, NavigationContainer } from "@react-navigation/native";
import * as ImagePicker from  "expo-image-picker";
import { Ionicons } from  "@expo/vector-icons";


const Stack = createNativeStackNavigator();

const Login = () => {
  const [email, onChangeEmail]=useState("");
  const [senha, onChangeSenha]= useState("")
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView>
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
          </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
    )
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
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
    alignItems: 'center' ,
    justifyContent: 'center',

  },

}); 