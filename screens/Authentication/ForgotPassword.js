import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { AuthLayout, CustomSwitch, FormInput, TextButton, TextButtonIcon } from '../../components'
import { COLORS, constants, FONTS, icons, images, SIZES } from '../../constants'
import { useState } from 'react'
import utils from '../utils/Utils'

const ForgotPassword = () => {

  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')

  const isEnabledSendEmail = () => {
    return email !== "" && emailError === ""
  }
  return (
    <>

      <AuthLayout
        title={"Password Recovery"}
        subtilte={"Please enter you email address to recover your password"}

      >
        {/* form input */}
        <View
          style={{
            flex: 1,
            marginTop: SIZES.padding * 2,
            height:'100%',
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
        </View>

        {/* Send Email button */}
        <TextButton
          onPress={() => navigation.goBack()}
          label={"Send Email"}
          disabled={isEnabledSendEmail() ? false : true}
          buttonContainerStyle={{
            backgroundColor: isEnabledSendEmail() ? COLORS.primary : COLORS.transparentPrimray,
            borderRadius: SIZES.radius,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: SIZES.radius,
            height: 55
          }}
          labelStyle={{ color: COLORS.white, ...FONTS.body3 }}
        />


      </AuthLayout>

    </>
  )
}

export default ForgotPassword