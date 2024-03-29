import { Image, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FONTS } from '../constants'

const TextButtonIcon = ({ containerStyle, label, labelStyle, icon, iconStyle, onPress, position = "RIGHT" }) => {
    return (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                ...containerStyle
            }}
            onPress={onPress}
        >
            {
                position === "LEFT" &&
                (
                    <Image
                        source={icon}
                        style={{
                            marginLeft: 5,
                            width: 20,
                            height: 20,
                            ...iconStyle
                        }}
                    />
                )
            }

            <Text
                style={{
                    ...FONTS.body3,
                    ...labelStyle
                }}>
                {label}
            </Text>
            {
                position === "RIGHT" &&
                (
                    <Image
                        source={icon}
                        style={{
                            marginLeft: 5,
                            width: 20,
                            height: 20,
                            ...iconStyle
                        }}
                    />
                )
            }

        </TouchableOpacity>
    )
}

export default TextButtonIcon