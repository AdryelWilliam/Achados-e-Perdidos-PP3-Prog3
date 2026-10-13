import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cadastrar from './Cadastar'; 
import Login from './Login';
import Perfil from './Perfil';

const Stack = createNativeStackNavigator(); {/* O que é isso?? */}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Cadastar">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: true, title: "Achados e Perdidos"}} />
        <Stack.Screen name="Cadastrar" component={Cadastrar} /> 
        <Stack.Screen name="Perfil" component={Perfil} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
