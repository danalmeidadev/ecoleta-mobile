import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../pages/Home';
import Points from '../pages/Points';
import Detail from '../pages/Detail';

const Appstack = createStackNavigator();

const Routes: React.FC = () => {
    return (
        <NavigationContainer>
        <Appstack.Navigator headerMode="none" 
        screenOptions={{cardStyle: {backgroundColor: '#f0f0f5'}}}
        >
            <Appstack.Screen name="home" component={Home} />
            <Appstack.Screen name="points" component={Points} />
            <Appstack.Screen name="detail" component={Detail} />
        </Appstack.Navigator>
    </NavigationContainer>
    );
};

export default Routes;