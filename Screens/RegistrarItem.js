import { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { TextInput } from 'react-native';
import { ListItem, SearchBar, Icon, Image, Avatar } from 'react-native-elements';
import { Header } from '@rneui/themed';
import { StyleSheet, Text, View, Pressable, Alert, FlatList } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context"
import {  createNativeStackNavigator } from '@react-navigation/native-stack';
import { useRoute, NavigationContainer } from "@react-navigation/native";
import DropDownPicker from 'react-native-dropdown-picker';
import * as ImagePicker from 'expo-image-picker';


const Stack = createNativeStackNavigator();

const RegistrarItem = () => {

  const [titulo, onChangeTitulo] = useState("");
  const [local, onChangeLocal] = useState("");
  const [descricao, onChangeDescricao] = useState("");
  const [data, onChangeData] = useState("");

  //de Dropdown Picker em: https://hossein-zare.github.io/react-native-dropdown-picker-website/docs/usage
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [opcoes, setOpcoes] = useState([
    {label: 'Garrafa', value: 'garrafa'},
    {label: 'Relógio', value: 'relogio'},
  ]);

  const itens = [
    {id: 1, title: 'Garrafa', value: 'garrafa'},
    {id: 2, title: 'Relógio', value: 'relogio'},
  ]

  //https://docs.expo.dev/versions/latest/sdk/imagepicker/

  
  const [imagem, setImagem] = useState <string | null> (null);
  const escolherImagem = async () => {
    const permissaoResultado = await ImagePicker.requestMediaLibraryPermissionAsync();

    if(!permissaoResultado.granted) {
      Alert.alert('Permissão necessária', 'Permissão para acessar a biblioteca de imagens é necessária');
      return;
    };

    let resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(resultado);

    if(!resultado.canceled){
      setImagem(resultado.assets[0].uri);
    };
  };

  const tirarFoto = async () => {
    const permissaoResultado = await ImagePicker.requestCameraPermissionsAsync();

    if(!permissaoResultado.granted){
      Alert.alert('Permissão necessária', 'Permissão para acessar a câmera é necessária');
      return;
    };

    let resultado = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4,3],
      quality: 1,
    });

    console.log(resultado);

    if(!resultado.canceled){
      setImagem(resultado.assets[0].uri);
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>

        <Header
          leftComponent = {{
            text: 'Achados e Perdidos - IFPE JG', 
            color: '#060505'}}
          rightComponent = {{
            icon: 'person', 
            color: '#1d1c1c'}}
          containerStyle = {{backgroundColor: '#acabab', width: '100%'}}
        />

        <View style={styles.view}>
          <Text style={styles.text}>Foto</Text>
          <Pressable
            style={styles.pressable}
            onPress={(escolherImagem) => Alert.alert('Botão de  escolher imagem pressionado')}>
            <Text style={styles.text_botao}>Escolher Imagem</Text>
          </Pressable>

          <Pressable
            style={styles.pressable}
            onPress={(tirarFoto) => Alert.alert('Botão de  tirar foto pressionado')}>
            <Text style={styles.text_botao}>Tirar Foto</Text>
          </Pressable>
          
          <Text  style={styles.text}>Título</Text>

          <TextInput
            style={styles.input_quest}
            value={titulo}
            onChangeText={onChangeTitulo}
          />

          <Text style={styles.text}>Tipo</Text>
          
          <DropDownPicker
            style={{
              margin: 20,
              width: 300,
            }}
            open={open}
            value={value}
            itens={opcoes}
            setOpen={setOpen}
            setValue={setValue}
            setItens={setOpcoes}
          />

          <Text style={styles.text}>Local</Text>

          <TextInput
            style={styles.input_quest}
            value={local}
            onChangeText={onChangeLocal}
          />

          <Text style={styles.text}>Data</Text>
          
          <TextInput
            style={styles.input_quest}
            value={data}
            onChangeText={onChangeData}
          />

          <Text style={styles.text}>Descricao</Text>

          <TextInput
            style={styles.descricao}
            value={descricao}
            onChangeText={onChangeDescricao}
            //multiline = 'true'
          />

          <Pressable
            style={styles.pressable}
            onPress={() => Alert.alert('Botão de registrar item pressionado')}>
            <Text style={styles.text_botao}>Registrar Item</Text>
          </Pressable>

        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view: {
    flex: 1,
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    justifyContent: 'center',
    alignContent: 'stretch',
  }, 
  input_quest: {
    borderWidth: 1,
    height: 40,
    width: 320,
    padding: 10,
    margin: 20,
    paddingLeft: 20,
    backgroundColor: '#fffefe',
  },
  descricao: {
    borderWidth: 1,
    minHeight: 40,
    width: 320,
    padding: 10,
    margin: 20,
    paddingLeft: 20,
    backgroundColor: '#fffefe',
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
  },
  //https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/box-shadow
  imagem: {
    height: 200,
    width: 200,
  },
});

export default RegistrarItem;