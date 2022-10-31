import { View, Text, Image } from 'react-native'
import { FONTS, COLORS, SIZES, images } from '../constants'
import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const AuthLayout = ({ title, subtilte, children, ContainerStyle }) => {
    return (
        <View
            style={{
                flex: 1,
                paddingVertical: SIZES.padding,
                backgroundColor: 'white',
                ...ContainerStyle
            }}
        >

            <KeyboardAwareScrollView
                contentContainerStyle={{
                    paddingHorizontal: SIZES.padding,
                }}
            >
                {/* App Icon */}

                <View
                    style={{
                        alignItems: 'center'
                    }}
                >
                    <Image
                        source={images.logo_01}
                        resizeMode='contain'
                        style={{
                            width: 200,
                            height: 100
                        }}
                    />
                </View>

                {/* Title */}
                <Text
                    style={{
                        color: 'black',
                        textAlign: 'center',
                        ...FONTS.h2,
                        marginTop: SIZES.padding
                    }}
                >
                    {title}
                </Text>

                {/* subtitle */}
                <Text
                    style={{
                        color: COLORS.darkGray,
                        textAlign: 'center',
                        ...FONTS.body3,
                        marginTop: SIZES.base
                    }}
                >
                    {subtilte}
                </Text>
                {/* content / children */}
                {children}
            </KeyboardAwareScrollView>

        </View>
    )
}

export default AuthLayout