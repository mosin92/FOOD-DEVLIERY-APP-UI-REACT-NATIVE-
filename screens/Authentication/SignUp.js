import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { AuthLayout, CustomSwitch, FormInput, TextButton, TextButtonIcon } from '../../components'
import { COLORS, constants, FONTS, icons, images, SIZES } from '../../constants'
import { useState } from 'react'
import utils from '../utils/Utils'

const SignUp = ({ navigation }) => {

    // name , email ,paswd states

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // show paswd
    const [showPassword, setShowPassword] = useState(false)

    // error msg for inputs

    const [usernameError, setUsernameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')


    const isEnableSigUp = () => {
        return username !== "" && email !== "" && password !== "" && usernameError === "" && emailError === "" && passwordError === ""
    }
    return (
            <AuthLayout
                title={"Getting Started"}
                subtilte={"Create an account to continue!"}
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
                            utils.validateEmail(text, setEmailError)
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

                    {/* username */}
                    <FormInput
                        label={"Username"}
                        errorMsg={usernameError}
                        onChange={(text) => {
                            setUsername(text)
                        }}

                        appendComponent={
                            <View
                                style={{ justifyContent: 'center' }}
                            >
                                <Image
                                    style={{
                                        width: 20,
                                        height: 20,
                                        tintColor: username === "" ? COLORS.gray : (username !== "" && usernameError == "") ? COLORS.green : COLORS.red
                                    }}

                                    source={username === "" || (username !== "" && usernameError == "") ? icons.correct
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
                            utils.validatePassword(value, setPasswordError)
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

                    {/* Sign In button */}
                    <TextButton
                        onPress={() => navigation.navigate(constants.publicStack.otp)}
                        label={"Sign Up"}
                        disabled={isEnableSigUp() ? false : true}
                        buttonContainerStyle={{
                            backgroundColor: isEnableSigUp() ? COLORS.primary : COLORS.transparentPrimray,
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
                            Already have an account? {' '}
                        </Text>

                        <TextButton
                            onPress={() => navigation.goBack()}
                            label={"Sign In"}
                            labelStyle={{
                                color: COLORS.primary,
                                ...FONTS.h3
                            }}
                        />
                    </View>

                    {/* Footer */}

                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'flex-end'
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

export default SignUp 