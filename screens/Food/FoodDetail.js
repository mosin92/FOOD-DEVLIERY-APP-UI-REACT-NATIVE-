import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { COLORS, constants, dummyData, FONTS, icons, images, SIZES } from '../../constants'
import { CartQuantityButton, Header, IconButton, IconLabel, LineDivider, Rating, StepperInput, TextButton } from '../../components'
import { useState } from 'react'

const FoodDetail = ({ navigation }) => {

    // states

    const [foodItems, setFoodItems] = useState(dummyData.vegBiryani)

    const [selectedSizes, setSelectedSizes] = useState('')

    const [qty, setQty] = useState(1)
    // UI components

    // render Header

    const renderHeader = () => {
        return (

            <Header
                title={"DETAILS"}
                containerStyle={{
                    marginHorizontal: SIZES.padding,
                    marginTop: 20,
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

    const renderDetails = () => {
        return (

            <View
                style={{
                    marginHorizontal: SIZES.padding
                }}
            >
                {/* food card */}
                <View
                    style={{
                        marginTop: SIZES.base,
                        backgroundColor: COLORS.lightGray2,
                        height: 170,
                        borderRadius: SIZES.radius
                    }}
                >

                    {/* calories and favourite */}

                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: SIZES.radius,
                            marginHorizontal: SIZES.base
                        }}
                    >

                        {/* calories */}

                        <View
                            style={{
                                flexDirection: 'row'
                            }}
                        >
                            <Image
                                source={icons.calories}
                                style={{
                                    width: 30,
                                    height: 30
                                }}
                            />

                            <Text
                                style={{
                                    color: COLORS.darkGray2
                                }}
                            >
                                {foodItems?.calories} calories
                            </Text>
                        </View>

                        {/* favourite */}


                        <Image
                            source={icons.love}
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: COLORS.primary
                            }}
                        />


                    </View>

                    {/* Food Image */}

                    <Image
                        source={foodItems.image}
                        resizeMode='contain'
                        style={{
                            height: 170,
                            width: '100%'
                        }}
                    />



                </View>

                {/* Name description */}

                <View
                    style={{
                        marginTop: SIZES.padding,

                    }}
                >
                    <Text
                        style={{
                            ...FONTS.h1,
                            color: COLORS.black
                        }}
                    >
                        {foodItems.name}
                    </Text>

                    <Text
                        style={{
                            marginTop: SIZES.base,
                            color: COLORS.darkGray,
                            textAlign: 'justify',
                            ...FONTS.body3
                        }}
                    >
                        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                    </Text>

                </View>

                {/* Rating duration shipping */}

                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.padding,
                        justifyContent: 'space-between'
                    }}
                >
                    {/* Ratting */}
                    <IconLabel
                        icon={icons.star}
                        label={"4.5"}
                        containerStyle={{
                            backgroundColor: COLORS.primary,
                        }}
                        labelStyle={{
                            color: COLORS.white
                        }}
                    />
                    {/* duration */}
                    <IconLabel
                        icon={icons.clock}
                        label={"30 Mins"}
                        iconStyle={{
                            tintColor: COLORS.black
                        }}
                        labelStyle={{
                            color: COLORS.black,
                            ...FONTS.body4
                        }}
                    />
                    {/* shipping */}
                    <IconLabel
                        icon={icons.dollar}
                        label={"Free shipping"}
                        iconStyle={{
                            tintColor: COLORS.black
                        }}
                        labelStyle={{
                            color: COLORS.black,
                            ...FONTS.body4
                        }}
                    />

                </View>

                {/* Sized */}

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: SIZES.radius,
                        alignItems: 'center'
                    }}
                >
                    <Text
                        style={{
                            color: 'black',
                            ...FONTS.h3
                        }}
                    >
                        SIZES
                    </Text>

                    {/*  */}
                    <View
                        style={{
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            marginLeft: SIZES.padding,

                        }}
                    >
                        {
                            dummyData.sizes.map((item, index) => (
                                <TextButton
                                    key={`sized-${index}`}
                                    buttonContainerStyle={{
                                        width: 45,
                                        height: 45,
                                        margin: SIZES.base,
                                        borderWidth: 1,
                                        borderRadius: SIZES.radius,
                                        borderColor: COLORS.gray2,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backgroundColor: item.id === selectedSizes ? COLORS.primary : null
                                    }}
                                    labelStyle={{
                                        color: item.id === selectedSizes ? COLORS.white : COLORS.gray2,
                                        ...FONTS.body2,
                                    }}
                                    label={item.label}
                                    onPress={() => setSelectedSizes(item.id)}
                                />
                            ))
                        }

                    </View>


                </View>

            </View>
        )
    }

    const renderResturant = () => {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    marginTop: SIZES.padding,
                    paddingHorizontal: SIZES.padding,
                    alignItems: 'center'
                }}
            >
                <Image
                    source={images.profile}
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: SIZES.radius
                    }}
                />
                {/* info */}

                <View
                    style={{
                        flex: 1,
                        marginLeft: SIZES.radius,
                        justifyContent: 'center'
                    }}
                >

                    <Text
                        style={{
                            ...FONTS.h3,
                            color: COLORS.black
                        }}
                    >
                        By MTech Services
                    </Text>

                    <Text
                        style={{
                            color: COLORS.gray,
                            ...FONTS.body4,
                        }}
                    >
                        1.2 KM away from you
                    </Text>

                </View>

                {/* Rating */}
                <Rating rating={5} />
            </View>
        )
    }

    const renderFooter = () => {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    marginVertical: SIZES.radius,
                    paddingHorizontal: SIZES.padding,
                    height: 50,
                    justifyContent: 'space-between'
                }}
            >

                {/* Stepper Input */}
                <StepperInput
                    value={qty}
                    onAdd={() => setQty(qty + 1)}
                    onMinus={() => {
                        if (qty > 1)
                            setQty(qty - 1)
                    }}
                />

                {/* buy button */}

                <TextButton
                    onPress={() => navigation.navigate(constants.privateStack.cart)}
                    label={"Buy Now"}
                    label2={'$10.99'}
                    labelStyle={{
                        color: COLORS.white,
                        ...FONTS.h4
                    }}
                    buttonContainerStyle={{
                        backgroundColor: COLORS.primary,
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        borderRadius: SIZES.radius,
                        flex: 1,
                        marginLeft: SIZES.radius
                    }}
                />
            </View>
        )
    }
    // UI component end

    return (
        <View
            style={{
                backgroundColor: COLORS.white,
                flex: 1
            }}
        >
            {/* Header */}
            {renderHeader()}
            {/* body */}
            <ScrollView>

                {/* food details */}
                {renderDetails()}

                {/* Resturant details */}

                <LineDivider lineStyle={{ marginTop: SIZES.radius }} />
                {renderResturant()}
            </ScrollView>


            {/* Footer */}

            <LineDivider />
            {renderFooter()}

        </View>
    )
}

export default FoodDetail