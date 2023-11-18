import React from 'react'; 
import {NavigationContainer} from '@react-navigation/native'; 
import DHHome from './UI/DHDisplay/DHHome';
import {createStackNavigator} from '@react-navigation/stack';  
import { DHViewModel } from './Model/DHViewModel';
import MenuHome from './UI/MenuDisplay/MenuHome';
const Stack = createStackNavigator();

const Main : React.FC = () => {

    return (
      <DHViewModel> 
          <NavigationContainer>
            <Stack.Navigator> 
              <Stack.Screen 
                name="UCSC Dining Options"
                component={DHHome}
                options={{ 
                  headerTitleStyle: {
                    fontSize: 25,
                    fontWeight: 'bold', 
                    backgroundColor: 'transparent'
                  }
                }}/>
                <Stack.Screen
                name="Location"
                component={MenuHome}
                options={({route}) => ({ 
                  title: route.params!.title,
                  headerBackTitle: 'MLB',
                  headerBackAccessibilityLabel: 'Logout',
                })}
          />
                
            </Stack.Navigator>
          </NavigationContainer> 
      </DHViewModel>
      );
}

export default Main;