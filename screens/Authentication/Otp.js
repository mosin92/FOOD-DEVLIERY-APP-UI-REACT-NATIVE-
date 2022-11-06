import { View, Text } from 'react-native'
import React from 'react'
import { AuthLayout, TextButton } from '../../components'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { COLORS, FONTS, SIZES } from '../../constants'
import { useState } from 'react'
import { useEffect } from 'react'

const Otp = ({ navigation }) => {
    const [timer, setTimer] = useState(60)

    useEffect(() => {

        const interval = setInterval(() => {
            setTimer(prevTimer => {
                if (prevTimer > 0) return prevTimer - 1
                else return prevTimer
            })
        }, 1000)

        return () => clearInterval(interval)

    }, [])

    return (
        <AuthLayout
            title={"OTP Authentication"}
            subtilte={"An authentication code has been sent to mohsina994@gmail.com"}
        >

            <View
                style={{
                    flex: 1,
                    marginTop: SIZES.padding * 2
                }}
            >
                <OTPInputView
                    pinCount={4}
                    style={{
                        height: 65,
                        width: '100%'
                    }}
                    codeInputFieldStyle={{
                        color: COLORS.black,
                        backgroundColor: COLORS.lightGray2,
                        borderRadius: SIZES.radius,
                        height: 65,
                        width: 65,
                        ...FONTS.h3,
                    }}
                    onCodeFilled={(code) => {
                        console.log(code)
                    }}
                />

                {/* count down Timer */}

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginTop: SIZES.padding
                    }}
                >
                    <Text
                        style={{
                            color: COLORS.darkGray,
                            ...FONTS.body3
                        }}
                    >
                        Don't received code?
                    </Text>

                    <TextButton
                        label={`Resend (${timer}s)`}
                        disabled={timer === 0 ? false : true}
                        buttonContainerStyle={{
                            marginLeft: SIZES.base
                        }}
                        labelStyle={{

                            color: COLORS.primary,
                            ...FONTS.h3
                        }}
                        onPress={() => setTimer(60)}
                    />
                </View>
            </View>

            {/* Footer */}

            <TextButton
                onPress={() => navigation.replace("Home")}
                label={"Continue"}
                buttonContainerStyle={{
                    backgroundColor: COLORS.primary,
                    borderRadius: SIZES.radius,
                    height: 55,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                labelStyle={{
                    color: COLORS.white
                }}
            />

        </AuthLayout>
    )
}

export default Otp