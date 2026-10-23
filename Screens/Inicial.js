import { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { TextInput, TouchableHighlight } from 'react-native';
import { ListItem, SearchBar, Icon, Image, Avatar } from 'react-native-elements';
import { Header } from '@rneui/themed';
import { StyleSheet, Text, View, Pressable, Alert, FlatList } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context"
import {  createNativeStackNavigator } from '@react-navigation/native-stack';
import { useRoute, NavigationContainer, useNavigation } from "@react-navigation/native";

//https://reactnative.dev/docs/tutorial

const itens = [
    {
      nome: 'Item 1',
      avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7CuFWYHxngNBxvuv_fCb6Gc_J0znbdDM2DIHX-xY8jQ&s',
      //icon: 'apparel',
      descricao: 'O item 1 foi encontrado em tal lugar em tal dia'
    },
    {
      nome: 'Item 2',
      avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ6kRNdZzBxQ2nXriy7lsr72-ii7iBbzc7HfLqzDEK_w&s=10',
      //icon: 'cards-stack',
      descricao: 'O item 2 foi encontrado em tal lugar em tal dia'
    },
    {
      nome: 'Item 3',
      avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ6kRNdZzBxQ2nXriy7lsr72-ii7iBbzc7HfLqzDEK_w&s=10',
      //icon: 'cards-stack',
      descricao: 'O item 3 foi encontrado em tal lugar em tal dia'
    },
  ]

  const Item = ({item}) => (
    <View style={styles.item}>
      <Avatar
        source={{uri: item.avatar_url}}
        style={styles.imagem}
      />
      <Text style={styles.text_item}>{item.nome}</Text>
      <Text style={styles.text_item}>{item.descricao}</Text>
    </View>
  );

const Inicial = () => {
  //de SearchBar - React Native elements
  //const [pesquisa, setPesquisa] = useState("");
  const navigation = useNavigation();

  const [ pesquisa, onChangePesquisa ] = useState("");


  const renderItem = ({item}) => {

    return (
      <View style={styles.itens}>
        <TouchableHighlight 
          activeOpacity={0.6}
          underlayColor='#ddd'
          onPress = {() => navigation.navigate(Item)}
        >
          <Item
          item={item}
          />
        </TouchableHighlight>
      </View>
    )
  }

   //do ListItem - React Native Elements

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={styles.container}>

          {/*<SearchBar
            placeholder='Pesquisar...'
            onChangeText={this.setPesquisa}
            value = {pesquisa}
          />*/}

          <TextInput
            style={styles.barra_pesquisa}
            inlineImageLeft='search_icon'
            inputMode='search'
            placeholder="Pesquisar..."
            onChangeText = {onChangePesquisa}
            value = {pesquisa}
          />


          <Pressable
            style={styles.reg_item}
            onPress={() => navigation.navigate('RegistrarItem')}
          >
            <Text style={styles.text_botao}>Registrar Item Perdido</Text>
          </Pressable>

          <View style={styles.container}>

            <FlatList
              data={itens}
              renderItem={renderItem}
              scrollEnabled={true}
            />

          </View>

        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ececec',
    alignItens: 'center',
    height: '100%'
  },
  view: {
    flex: 1,
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'stretch',
  },
  barra_pesquisa: {
    borderWidth: 1,
    borderRadius: 100,
    height: 40,
    width: 320,
    padding: 10,
    margin: 10,
    paddingLeft: 20,
    backgroundColor: '#e3e2e2',
    alignSelf: 'center',
  },
  text: {
    marginEnd: 250,
    marginHorizontal: 30,
    fontSize: 17
  },
  reg_item: {
    borderRadius: 100,
    height: 40,
    width: 200,
    padding: 10,
    margin: 10,
    backgroundColor: '#94b6f6',
    alignSelf: 'flex-start'
  },
  text_botao: {
    color: '#121212',
    alignSelf: 'center'
  },
  itens: {
    flexDirection: 'row',
    alignItem: 'flex-start',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    gap: 25,
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
    width: '100%',
    height: '100%',
  },
  item: {
    height: 250,
    width: 250,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: '#e2dcdc',
    boxShadow: '0px 2px 4px rgba(59, 59, 59, 0.21)',
    backgroundColor: '#ededed'
  },
  text_item: {
    fontSize: 12,
    margin: 5,
  },
  //https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/box-shadow
  imagem: {
    height: 150,
    width: 150,
    alignSelf: 'center',
    margin: 8,
  },
});

export default Inicial;
