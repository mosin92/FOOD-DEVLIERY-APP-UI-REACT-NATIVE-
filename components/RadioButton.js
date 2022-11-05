import { Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS, icons, SIZES } from '../constants'

const RadioButton = ({
    containerStyle,
    label,
    labelStyle,
    isSelected = false,
    onPress,
    iconStyle
}) => {

    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                ...containerStyle
            }}
        >
            {/* Radio Icon */}

            <Image
                source={isSelected ? icons.check_on : icons.check_off}
                style={{
                    width: 20,
                    height: 20,
                    marginLeft: 5,
                    ...iconStyle
                }}
            />

            <Text
                style={{
                    marginLeft: SIZES.base,
                    color: COLORS.gray,
                    ...labelStyle
                }}
            >
                {label}
            </Text>

        </ TouchableOpacity>
    )
}

export default RadioButton