import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { constants } from '../constants';
import { AddCard, Cart, Checkout, DeliveryStatus, FoodDetail, MyCard, PaymentSuccess, Map } from '../screens';
import CustomDrawer from './CustomDrawer';


const ProtectedStack = () => {

    const { food_details, cart, card, add_card, checkout, payment_success, delivery_status, map, home } = constants.privateStack

    const PrivateRoutes = [
        {
            screenName: home, component: CustomDrawer,

        },
        {
            screenName: food_details, component: FoodDetail,

        },
        {
            screenName: cart, component: Cart,

        },
        {
            screenName: card, component: MyCard,

        },
        {
            screenName: add_card, component: AddCard,

        },
        {
            screenName: checkout, component: Checkout,

        },
        {
            screenName: payment_success, component: PaymentSuccess,

        },
        {
            screenName: delivery_status, component: DeliveryStatus,

        },
        {
            screenName: map, component: Map,

        },
    ]

    const PrivateStack = createStackNavigator()

    return (
        <PrivateStack.Navigator
            screenOptions={{
                headerShown: false,
            }}

            initialRouteName={home}
        >
            {
                PrivateRoutes.map((item, index) => (
                    <PrivateStack.Screen key={index} name={item.screenName} component={item.component} />
                ))
            }

        </PrivateStack.Navigator>
    )
}

export default ProtectedStack