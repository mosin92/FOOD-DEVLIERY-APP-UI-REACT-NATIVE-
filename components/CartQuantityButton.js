import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, icons, SIZES } from '../constants'

const CartQuantityButton = ({ containerStyle, iconStyle, onPress, quantity }) => {
    return (
        <TouchableOpacity
            style={{
                height: 40,
                width: 40,
                backgroundColor: COLORS.lightOrange2,
                borderRadius: SIZES.radius,
                justifyContent: 'center',
                alignItems: 'center',
                ...containerStyle
            }}

            onPress={onPress}
        >
            <Image
                source={icons.cart}
                style={{
                    width: 20,
                    height: 20,
                    ...iconStyle
                }}
            />

            <View
                style={{
                    position: 'absolute',
                    top: 5,
                    right: 5,
                    height: 15,
                    width: 15,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.primary
                }}
            >
                <Text style={{
                    color: COLORS.white,
                    ...FONTS.body5,
                    fontSize: 10
                }}>
                    {quantity}
                </Text>
            </View>

        </TouchableOpacity>
    )
}

export default CartQuantityButton