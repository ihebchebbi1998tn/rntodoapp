import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DataProvider } from './src/context/DataContext';
import Home from './src/components/Home';
import AddTodo from './src/components/AddTodo';
import EditTodo from './src/components/EditTodo';
import TaskDetails from './src/components/TaskDetails';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <DataProvider>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#7C3AED',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="AddTodo" component={AddTodo} options={{ title: 'Add New Todo' }} />
          <Stack.Screen name="EditTodo" component={EditTodo} options={{ title: 'Edit Todo' }} />
          <Stack.Screen name="TaskDetails" component={TaskDetails} options={{ title: 'Task Details' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </DataProvider>
  );
};

export default App;
