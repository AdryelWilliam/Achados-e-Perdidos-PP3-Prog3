import {  createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator(); {/* O que é isso?? */}

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

export default App;
