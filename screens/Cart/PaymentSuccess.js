import { View, Text, BackHandler, Image } from 'react-native'
import React from 'react'
import { COLORS, constants, FONTS, icons, images, SIZES } from '../../constants'
import { TextButton } from '../../components'
import { useEffect } from 'react'

const PaymentSuccess = ({ navigation }) => {

    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => true)

        return () => backHandler.remove()
    }, [])

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white,
                paddingHorizontal: SIZES.padding
            }}
        >
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Image
                    source={images.success}
                    style={{
                        width: 120,
                        height: 120
                    }}
                />

                <Text
                    style={{
                        color: COLORS.black,
                        ...FONTS.h1,
                        marginTop: SIZES.padding
                    }}
                >
                    Congratulations!
                </Text>

                <Text
                    style={{
                        color: COLORS.darkGray,
                        ...FONTS.body3
                    }}
                >
                    Payment has done successfully !
                </Text>
            </View>

            {/* footer */}
            <TextButton
                label={"Done"}
                buttonContainerStyle={{
                    backgroundColor: COLORS.primary,
                    borderRadius: SIZES.radius,
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 55,
                    marginBottom: SIZES.radius
                }}
                onPress={() => navigation.replace(constants.privateStack.delivery_status)}
            />
        </View>
    )
}

export default PaymentSuccess