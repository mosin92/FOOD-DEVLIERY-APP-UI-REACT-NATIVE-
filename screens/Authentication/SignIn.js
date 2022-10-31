import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { AuthLayout, CustomSwitch, FormInput, TextButton, TextButtonIcon } from '../../components'
import { COLORS, constants, FONTS, icons, images, SIZES } from '../../constants'
import { useState } from 'react'
import utils from '../utils/Utils'

const SignIn = ({ navigation }) => {

    const [showPassword, setShowPassword] = useState(false)

    // email & password states
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // email & password errors states

    const [emailError, setemailError] = useState('')
    const [passwordError, setpasswordError] = useState('')


    // save me
    const [saveMe, setSaveMe] = useState(false)


    const isEnableSigIn = () => {
        return email !== "" && password !== "" && emailError === "" && passwordError === ""
    }


    return (
        <AuthLayout
            title={"Let's Sign You In"}
            subtilte={"Welcome back, you've been missed"}
        >
            <View
                style={{
                    marginTop: SIZES.padding,
                    flex: 1
                }}
            >

                <FormInput
                    label={"Email"}
                    keyboardType="email-address"
                    autoComplete='email'
                    errorMsg={emailError}
                    onChange={(text) => {
                        utils.validateEmail(text, setemailError)
                        setEmail(text)
                    }}

                    appendComponent={
                        <View
                            style={{ justifyContent: 'center' }}
                        >
                            <Image
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: email === "" ? COLORS.gray : (email !== "" && emailError == "") ? COLORS.green : COLORS.red
                                }}

                                source={email === "" || (email !== "" && emailError == "") ? icons.correct
                                    : icons.cancel
                                }
                            />
                        </View>
                    }
                />

                {/* passowrd input */}

                <FormInput
                    label={"Password"}
                    autoComplete="password"
                    secureTextEntry={!showPassword}
                    errorMsg={passwordError}
                    onChange={(value) => {
                        utils.validatePassword(value, setpasswordError)
                        setPassword(value)
                    }}
                    appendComponent={
                        <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}
                            onPress={() => setShowPassword(!showPassword)}
                        >
                            <Image
                                source={showPassword ? icons.eye_open : icons.eye_close}
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: COLORS.gray
                                }}
                            />
                        </TouchableOpacity>
                    }
                />

                {/* save me & forgot password */}

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}
                >
                    {/* save me  */}
                    <CustomSwitch
                        value={saveMe}
                        onChange={(value) => setSaveMe(value)}
                    />

                    {/* forgot password */}

                    <TextButton
                        label={"Forgot Password?"}
                        labelStyle={{
                            color: COLORS.gray,
                            ...FONTS.body4,
                        }}
                        onPress={() => navigation.navigate(constants.publicStack.forgot_paswd)}
                    />

                </View>

                {/* Sign In button */}
                <TextButton
                    label={"SigIn"}
                    disabled={isEnableSigIn() ? false : true}
                    buttonContainerStyle={{
                        backgroundColor: isEnableSigIn() ? COLORS.primary : COLORS.transparentPrimray,
                        borderRadius: SIZES.radius,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: SIZES.radius,
                        height: 55
                    }}
                    labelStyle={{ color: COLORS.white, ...FONTS.body3 }}
                />


                {/* SigUP */}

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginTop: SIZES.radius
                    }}
                >

                    {/* signup text */}

                    <Text
                        style={{
                            color: COLORS.darkGray,
                            ...FONTS.body4
                        }}
                    >
                        Don't have already account? {' '}
                    </Text>

                    <TextButton
                        onPress={() => navigation.navigate(constants.publicStack.sign_up)}
                        label={"Sign Up"}
                        labelStyle={{
                            color: COLORS.primary,
                            ...FONTS.h3
                        }}
                    />
                </View>

                {/* Footer */}

                <View
                    style={{
                        // flex: 1,
                        // justifyContent: 'flex-end'
                    }}
                >
                    {/* FB */}

                    <TextButtonIcon
                        label={"Continue With Facebook"}
                        position="LEFT"
                        icon={icons.fb}
                        containerStyle={{
                            backgroundColor: COLORS.blue,
                            borderRadius: SIZES.radius,
                            alignItems: 'center',
                            marginTop: SIZES.radius,
                            height: 55
                        }}
                        iconStyle={{
                            tintColor: COLORS.white
                        }}
                        labelStyle={{
                            marginLeft: SIZES.radius,
                            color: COLORS.white
                        }}
                    />

                    {/* Google */}

                    <TextButtonIcon
                        label={"Continue With Google"}
                        position="LEFT"
                        icon={icons.google}
                        containerStyle={{
                            backgroundColor: COLORS.lightGray2,
                            borderRadius: SIZES.radius,
                            alignItems: 'center',
                            height: 55,
                            marginTop: SIZES.base
                        }}
                        labelStyle={{
                            marginLeft: SIZES.radius,
                            color: COLORS.black
                        }}
                    />

                </View>

            </View>

        </AuthLayout>
    )
}

export default SignIn