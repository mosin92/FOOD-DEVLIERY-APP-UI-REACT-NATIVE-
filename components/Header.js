import { View, Text } from 'react-native'
import React from 'react'
import { FONTS } from '../constants'

export default function Header({ containerStyle, title, LeftComponent, RightComponent, titleStyle }) {
    return (
        <View
            style={{
                flexDirection: 'row',
                ...containerStyle
            }}
        >
            {/* let component */}
            {LeftComponent}

            {/* title */}
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >

                <Text
                    style={{
                        color: 'black',
                        ...FONTS.h3,
                        ...titleStyle
                    }}
                >{title}</Text>
            </View>

            {/* Right component */}
            {RightComponent}

        </View>
    )
}