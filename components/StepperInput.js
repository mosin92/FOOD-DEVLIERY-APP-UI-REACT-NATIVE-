import { View, Text, Image } from 'react-native'
import React from 'react'
import { COLORS, icons, SIZES } from '../constants'
import IconButton from './IconButton'

const StepperInput = ({
    onAdd,
    onMinus,
    value,
    containerStyle

}) => {
    return (
        <View
            style={{
                width: 150,
                height: 50,
                flexDirection: 'row',
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.lightGray2,
                justifyContent: 'center',
                alignItems: 'center',
                ...containerStyle
            }}
        >
            <IconButton
                containerStyle={{
                    width: 50,
                    alignItems: 'center'
                }}
                icon={icons.minus}
                iconStyle={{
                    width: 25,
                    height: 25,
                    tintColor: value > 1 ? COLORS.primary : COLORS.gray
                }}
                onPress={onMinus}
            />

            <Text
                style={{
                    color: COLORS.black
                }}
            >
                {value}
            </Text>

            {/* Add button */}
            <IconButton
                containerStyle={{
                    width: 50,
                    alignItems: 'center'
                }}
                icon={icons.plus}
                iconStyle={{
                    width: 25,
                    height: 25,
                    tintColor: COLORS.primary
                }}
                onPress={onAdd}
            />

        </View>
    )
}

export default StepperInput