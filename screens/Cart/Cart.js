import { View, Text, Image } from 'react-native'
import React from 'react'
import { SIZES, COLORS, FONTS, icons, dummyData, constants } from '../../constants'
import { CartQuantityButton, FooterTotal, Header, IconButton, StepperInput } from '../../components'
import { SwipeListView } from 'react-native-swipe-list-view';
import { useState } from 'react';

export default function Cart({ navigation }) {

  const [mycart, setmyCart] = useState(dummyData.myCart)
  // UI component

  const renderHeader = () => {
    return (

      <Header
        title={"MY CART"}
        containerStyle={{
          marginTop: 20,
          paddingHorizontal: SIZES.padding,
        }}
        LeftComponent={
          <IconButton
            onPress={() => navigation.goBack()}
            icon={icons.back}
            containerStyle={{
              width: 40,
              height: 40,
              borderRadius: SIZES.radius,
              borderColor: COLORS.gray2,
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          />
        }

        RightComponent={
          <CartQuantityButton
            quantity={4}
          />
        }
      />
    )
  }

  // Update quantity handler

  const updateQuantityHandler = (newQtv, qtvId) => {
    const updatedCart = mycart.map(item => (
      item.id === qtvId ? { ...item, qty: newQtv } : item
    ))

    setmyCart(updatedCart)

  }

  const removeCart = (id) => {
    let newCartList = [...mycart]
    const index = newCartList.findIndex(item => item.id === id)
    newCartList.splice(index, 1)
    setmyCart(newCartList)
  }

  const renderCartList = () => {
    return (
      <SwipeListView
        data={mycart}
        keyExtractor={item => `item-${item.id}`}
        contentContainerStyle={{
          paddingHorizontal: SIZES.padding,
          marginTop: SIZES.radius,
          paddingBottom: SIZES.padding
        }}
        disableRightSwipe={true}
        rightOpenValue={-70}
        renderItem={(data, rowMap) => (
          <View
            style={{
              height: 100,
              backgroundColor: COLORS.lightGray2,
              flexDirection: 'row',
              paddingHorizontal: SIZES.radius,
              marginTop: SIZES.radius,
              borderRadius: SIZES.radius,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >

            {/* Image */}

            <Image
              source={data.item.image}
              style={{
                width: 90,
                height: 100,
                top: 10
              }}
            />

            {/* Food Info */}

            <View
              style={{
                flex: 1
              }}
            >

              <Text
                style={{
                  color: COLORS.black,
                  ...FONTS.body3
                }}
              >

                {data.item.name}
              </Text>

              <Text
                style={{
                  color: COLORS.primary,
                  ...FONTS.h3
                }}
              >
                ${data.item.price}

              </Text>
            </View>

            {/* Quantity */}

            <StepperInput
              containerStyle={{
                width: 100,
                height: 50,
                backgroundColor: COLORS.white
              }}
              value={data.item.qty}
              onAdd={() => updateQuantityHandler(data.item.qty + 1, data.item.id)}
              onMinus={() => {
                if (data.item.qty > 1) {
                  updateQuantityHandler(data.item.qty - 1, data.item.id)
                }
              }}
            />

          </View>
        )}

        renderHiddenItem={(data) => (
          <IconButton
            containerStyle={{
              height: 100,
              backgroundColor: COLORS.primary,
              paddingHorizontal: SIZES.radius,
              marginTop: SIZES.radius,
              borderRadius: SIZES.radius,
              justifyContent: 'center',
              alignItems: 'flex-end'

            }}
            onPress={() => removeCart(data.item.id)}
            icon={icons.delete_icon}
            iconStyle={{
              tintColor: COLORS.white
            }}

          />
        )}
      >

      </SwipeListView>
    )
  }
  // end UI component


  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white
      }}
    >
      {/* header */}
      {renderHeader()}

      {/* cart list */}

      {renderCartList()}

      {/* Footer */}
      <FooterTotal
        shippingFee={0.00}
        subTotal={39.49}
        total={39.49}
        onPress={() => navigation.navigate(constants.privateStack.card)}
      />

    </View>
  )
}