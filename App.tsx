
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './src/navigator/Navigator';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
function App(): JSX.Element {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </QueryClientProvider>
  );
}


export default App;
