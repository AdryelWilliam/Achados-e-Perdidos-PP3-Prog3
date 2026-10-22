import {  createNativeStackNavigator } from '@react-navigation/native-stack';
import { useRoute, NavigationContainer } from "@react-navigation/native";
import Inicial from './Inicial';
import RegistrarItem from './RegistrarItem';


const Stack = createNativeStackNavigator(); {/* O que é isso?? */}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicial" screenOptions={{headerStyle: {
        backgroundColor: '#c0bcbc'
      }}}>
        <Stack.Screen name="Inicial" component={Inicial} options={{
          headerShown: true,
          title: "Achados e Perdidos"

          }} />
        <Stack.Screen name="RegistrarItem" component={RegistrarItem} options={{
          headerShown: true,
          title: "Achados e Perdidos",
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
    );
}

export default App;
