import { View, Text } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { COLORS, FONTS, SIZES } from '../constants'
import LineDivider from './LineDivider'
import TextButton from './TextButton'


const FooterTotal = ({
    subTotal,
    shippingFee,
    total,
    onPress
}) => {
    return (
        <View>
            {/* shadow */}
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={[COLORS.transparent, COLORS.lightGray1]}
                style={{
                    position: 'absolute',
                    top: -10,
                    left: 0,
                    right: 0,
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                    height: 50
                }}
            />

            {/* order detail */}

            <View
                style={{
                    backgroundColor: COLORS.white,
                    paddingHorizontal: SIZES.padding,
                    borderTopLeftRadius: 23,
                    borderTopRightRadius: 23,
                    paddingVertical: SIZES.radius
                }}
            >
                {/* subtotal */}
                <View
                    style={{
                        flexDirection: 'row',
                    }}
                >
                    <Text style={{
                        color: COLORS.black,
                        ...FONTS.body3,
                        flex: 1
                    }}>
                        SubTotal
                    </Text>

                    <Text
                        style={{
                            color: COLORS.black,
                            ...FONTS.h3
                        }}
                    >
                        ${subTotal.toFixed(2)}
                    </Text>

                </View>

                {/* shipping fee */}
                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.base,
                    }}
                >
                    {/*  */}
                    <Text style={{
                        color: COLORS.black,
                        ...FONTS.body3,
                        flex: 1
                    }}>
                        Shipping Fee
                    </Text>

                    <Text
                        style={{
                            color: COLORS.black,
                            ...FONTS.h3,
                            marginBottom: SIZES.padding
                        }}
                    >
                        ${shippingFee.toFixed(2)}
                    </Text>

                </View>

                {/* Line divider */}
                <LineDivider />

                {/* Total */}
                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.base,
                    }}
                >
                    {/*  */}
                    <Text style={{
                        color: COLORS.black,
                        ...FONTS.h2,
                        flex: 1
                    }}>
                        Total:
                    </Text>

                    <Text
                        style={{
                            color: COLORS.black,
                            ...FONTS.h3,
                            marginBottom: SIZES.padding
                        }}
                    >
                        ${total.toFixed(2)}
                    </Text>

                </View>

                {/* Button */}
                <TextButton
                    label={"Place Your Order"}
                    buttonContainerStyle={{
                        backgroundColor: COLORS.primary,
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 55,
                        borderRadius: SIZES.radius
                    }}
                    labelStyle={{
                        color: COLORS.white
                    }}
                    onPress={onPress}
                />

            </View>

        </View>
    )
}

export default FooterTotal