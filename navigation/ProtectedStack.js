import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { constants } from '../constants';
import { AddCard, Cart, Checkout, DeliveryStatus, FoodDetail, MyCard, PaymentSuccess } from '../screens';


const ProtectedStack = () => {

    const { food_details, cart, card, add_card, checkout, payment_success, delivery_status } = constants.privateStack

    const PrivateRoutes = [
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
    ]

    const PrivateStack = createStackNavigator()

    return (
        <PrivateStack.Navigator
            screenOptions={{
                headerShown: false,
            }}

            initialRouteName={food_details}
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