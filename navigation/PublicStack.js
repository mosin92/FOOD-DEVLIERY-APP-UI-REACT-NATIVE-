import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { constants } from '../constants';
import { SigIn, ForgotPassword, SignUp, Otp, OnBoard } from '../screens';

const PublicStack = () => {

    const { sign_in, forgot_paswd, login, otp, on_board, sign_up } = constants.publicStack

    const PublicRoutes = [
        {
            screenName: sign_in, component: SigIn
        },
        {
            screenName: forgot_paswd, component: ForgotPassword
        },
        {
            screenName: otp, component: Otp
        },
        {
            screenName: on_board, component: OnBoard
        },
        {
            screenName: sign_up, component: SignUp
        },

    ]
    const PublicStack = createStackNavigator()

    return (
        <PublicStack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={on_board}
        >
            {
                PublicRoutes.map((item, index) => (
                    <PublicStack.Screen key={index} name={item.screenName} component={item.component} />
                ))
            }
        </PublicStack.Navigator>
    )
}

export default PublicStack
