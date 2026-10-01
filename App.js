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

  const Cadastrar = () => {
    const [email, onChangeEmail] = useState("");
    const [senha, onChangeSenha] = useState("");
    const [nome, onChangeNome] = useState("");
    return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <ScrollView>
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
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const Perfil = () => {
  const [fotoPerfil, setFotoPerfil] = useState(null);

  const selecionarFoto = async () => {
    try {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (status !== 'granted') {
        Alert.alert(
          'Permissão necessária',
          'Permita o acesso à sua galeria para escolher uma foto de perfil.'
        );
        return;
      }

      const resultado = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images'],
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.8,
      });

      if (!resultado.canceled) {
        setFotoPerfil(resultado.assets[0].uri);
      }
    } catch (error) {
      Alert.alert(
        'Não foi possível selecionar a foto.'
      );
    }
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        
          <View style={styles.div}>
            <Pressable
              style={styles.voltar}
              onPress={() =>
                Alert.alert('Botão voltar pressionado')
              }
            >
              <Ionicons
                name="chevron-back"
                size={34}
                color="#000"
              />
            </Pressable>
          </View>

          <View style={styles.perfil}>

            <Pressable
              style={styles.fotoContainer}
              onPress={selecionarFoto}
            >
              {fotoPerfil ? (
                <Image
                  source={{ uri: fotoPerfil }}
                  style={styles.foto}
                />
              ) : (
                <Ionicons
                  name="person-outline"
                  size={62}
                  color="#707070"
                />
              )}

              <View style={styles.camera}>
                <Ionicons
                  name="camera-outline"
                  size={18}
                  color="#fff"
                />
              </View>
            </Pressable>

            <View style={styles.informacoes}>
              <Text style={styles.nome}>NOME</Text>
              <Text style={styles.email}>email@email.com</Text>
            </View>
          </View>

          <Pressable
            style={({ pressed }) => [
              styles.botao,
              pressed && styles.botaoPressionado,
            ]}
            onPress={() =>
              Alert.alert('Meu Perfil', 'Botão "Meu Perfil" pressionado')
            }
          >
            <Ionicons
              name="person-outline"
              size={29}
              color="#aaa"
            />

            <Text style={styles.textoBotao}>
              Meu Perfil
            </Text>
          </Pressable>

          <Pressable
            style={({ pressed }) => [
              styles.botao,
              pressed && styles.botaoPressionado,
            ]}
            onPress={() =>
              Alert.alert(
                'Botão "Configurações do Perfil" pressionado'
              )
            }
          >
            <Ionicons
              name="settings-outline"
              size={31}
              color="#aaa"
            />

            <Text style={styles.textoBotao}>
              Configurações do Perfil
            </Text>
          </Pressable>

          <Pressable
            style={({ pressed }) => [
              styles.botao,
              pressed && styles.botaoPressionado,
            ]}
            onPress={() =>
              Alert.alert(
                'Botão "Sair" pressionado'
              )
            }
          >
            <Ionicons
              name="log-out-outline"
              size={32}
              color="#aaa"
            />

            <Text style={styles.textoBotao}>
              Sair
            </Text>
          </Pressable>
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
        <Stack.Screen name="Perfil" component={Perfil} /> 
      </Stack.Navigator>
    </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  div:{
    width: '100%',
    flex:1, 
    paddingHorizontal: 48,
    paddingTop: 25,
    backgroundColor: '#fff',
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
  perfil: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 35,
    paddingHorizontal: 2,
  },

  fotoContainer: {
    width: 106,
    height: 106,
    borderRadius: 53,
    backgroundColor: '#d6d6d6',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'visible',
  },

  foto: {
    width: 106,
    height: 106,
    borderRadius: 53,
  },

  camera: {
    position: 'absolute',
    right: -2,
    bottom: 1,
    width: 31,
    height: 31,
    borderRadius: 16,
    backgroundColor: '#777',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },

  informacoes: {
    marginLeft: 35,
    justifyContent: 'center',
  },

  nome: {
    fontSize: 23,
    fontWeight: '400',
    color: '#111',
    marginBottom: 2,
  },

  email: {
    fontSize: 21,
    fontWeight: '400',
    color: '#111',
  },

  botao: {
    width: '60%',
    height: 70,
    borderRadius: 36,
    backgroundColor: '#f7f7f7',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 27,
    marginBottom: 39,
  },

  botaoPressionado: {
    backgroundColor: '#eeeeee',
    transform: [{ scale: 0.99 }],
  },

  textoBotao: {
    fontSize: 28,
    fontWeight: '400',
    color: '#111',
    marginLeft: 19,
  },
  voltar: {
    flex: 1,
    justifyContent: 'flex-start',
    alignSelf: 'flex-start'
  }
});
export default App;
