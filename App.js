

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import CustomDrawer from './navigation/CustomDrawer';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './stores/RootReducer';
import { StatusBar } from 'react-native';
import { SigIn, SignUp, OnBoard } from './screens';
import { PublicStack,ProtectedStack } from './navigation';


const App = () => {

  // create redux store
  const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
  )

  const Stack = createStackNavigator()

  return (
    <Provider store={store}>
      <StatusBar backgroundColor={'black'} barStyle={'light-content'} />
      <NavigationContainer>
        {/* <OnBoard /> */}
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
          initialRouteName={'Home'}
        >
          <Stack.Screen
            name="Home"
            component={ProtectedStack}
          />
          <Stack.Screen
            name="publicStack"
            component={PublicStack}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};



export default App;
