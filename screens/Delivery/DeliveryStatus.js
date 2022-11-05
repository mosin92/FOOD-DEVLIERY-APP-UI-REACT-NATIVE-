import { View, Text } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../constants'

const DeliveryStatus = () => {
    return (
        <View
            style={{
                flex: 1,
                paddingHorizontal: SIZES.padding,
                backgroundColor: COLORS.white
            }}
        >
            <Text>DeliveryStatus</Text>
        </View>
    )
}

export default DeliveryStatus