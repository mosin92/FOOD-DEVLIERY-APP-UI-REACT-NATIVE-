import { View, Text, Image, Modal, TouchableWithoutFeedback, Animated, ScrollView } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { COLORS, constants, FONTS, icons, SIZES } from '../../constants'
import { IconButton, TextButton, TextButtonIcon, TwoPointSlider } from '../../components'

export default function FilterModal({ isVisible, onClose }) {
    console.log("-", isVisible)
    const [showFilterModal, setfilterModal] = useState(isVisible)
    const modalAnimatedValue = useRef(new Animated.Value(0)).current
    const [deliveryTime, setDeliveryTime] = useState('')
    const [rating, setRating] = useState("")
    const [tags, setTags] = useState("")

    useEffect(() => {
        if (showFilterModal) {
            Animated.timing(modalAnimatedValue, {
                toValue: 1,
                duration: 500,
                useNativeDriver: false
            }).start()
        }
        else {
            Animated.timing(modalAnimatedValue, {
                toValue: 0,
                duration: 500,
                useNativeDriver: false
            }).start(() => onClose())
        }

    }, [showFilterModal])

    const modalY = modalAnimatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [SIZES.height, SIZES.height - 600]
    })


    const Section = ({ containerStyle, title, children }) => {
        return (
            <View
                style={{
                    marginTop: SIZES.padding,
                    ...containerStyle
                }}
            >
                <Text
                    style={{
                        ...FONTS.h3,
                        color: 'black'
                    }}
                >
                    {title}
                </Text>

                {children}
            </View>
        )
    }


    // render Distacnce function 

    const renderDistance = () => {
        return (
            <Section
                title="Distance"
            >
                <View
                    style={{
                        alignItems: 'center'
                    }}
                >
                    <TwoPointSlider
                        values={[3, 10]}
                        min={1}
                        max={20}
                        prefix="km"
                        onValuesChange={(values) => console.log("values ", values)}
                    />

                </View>
            </Section>
        )
    }

    const renderDeliveryTime = () => {
        return (
            <Section
                title="Delivery Time"
                containerStyle={{
                    marginTop: 40
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        marginTop: SIZES.radius
                    }}
                >
                    {
                        constants.delivery_time.map((item, index) => (
                            <TextButton
                                key={`$delivery-time-${index}`}
                                label={item.label}
                                labelStyle={{
                                    color: item.id === deliveryTime ? COLORS.white : COLORS.gray,
                                    ...FONTS.body3
                                }}
                                buttonContainerStyle={{
                                    width: '30%',
                                    height: 50,
                                    margin: 5,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: SIZES.radius,
                                    backgroundColor: item.id === deliveryTime ?
                                        COLORS.primary : COLORS.lightGray2,
                                }}
                                onPress={() => setDeliveryTime(item.id)}
                            />
                        ))
                    }
                </View>

            </Section>
        )
    }

    const renderPricingRange = () => {
        return (
            <Section
                title="Pricing Range"
            >
                <View
                    style={{
                        alignItems: 'center'
                    }}
                >
                    <TwoPointSlider
                        values={[10, 50]}
                        min={1}
                        max={100}
                        prefix="$"
                        onValuesChange={(values) => console.log(values)}
                    />
                </View>
            </Section>
        )
    }

    const renderRating = () => {
        return (
            <Section
                title="Rating"
                containerStyle={{ marginTop: 40 }}
            >
                <View
                    style={{ flexDirection: 'row', justifyContent: 'space-between' }}
                >
                    {
                        constants.ratings.map((item, index) => (
                            <TextButtonIcon
                                key={`rating-${index}`}
                                containerStyle={{
                                    color: item.id === rating ? COLORS.white : COLORS.gray,
                                    backgroundColor: item.id === rating ? COLORS.primary : COLORS.lightGray2,
                                    flex: 1,
                                    width: '30%',
                                    height: 50,
                                    margin: 5,
                                    borderRadius: SIZES.radius
                                }}
                                label={item.label}
                                labelStyle={{
                                    color: item.id === rating ? COLORS.white : COLORS.gray
                                }}
                                icon={icons.star}
                                iconStyle={{
                                    tintColor: item.id === rating ? COLORS.white : COLORS.gray
                                }}
                                onPress={() => setRating(item.id)}
                            />
                        ))
                    }
                </View>
            </Section>
        )
    }

    const renderTag = () => {
        return (
            <Section
                title="Tags"
            >
                <View
                    style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap'
                    }}
                >
                    {
                        constants.tags.map((item, index) => {
                            return (
                                <TextButton
                                    label={item.label}
                                    key={`tag-${index}`}
                                    labelStyle={{
                                        color: item.id === tags ? COLORS.white : COLORS.gray,
                                        ...FONTS.body3
                                    }}
                                    buttonContainerStyle={{
                                        color: item.id === tags ? COLORS.white : COLORS.gray,
                                        backgroundColor: item.id === tags ? COLORS.primary : COLORS.lightGray2,
                                        height: 50,
                                        margin: 5,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderRadius: SIZES.base,
                                        paddingHorizontal: SIZES.padding,

                                    }}
                                    onPress={() => setTags(item.id)}
                                />
                            )
                        })
                    }
                </View>
            </Section>
        )
    }

    return (
        <Modal
            animationType='fade'
            transparent
            visible={isVisible}
        >
            <View
                style={{ flex: 1, backgroundColor: COLORS.transparentBlack7 }}
            >
                <TouchableWithoutFeedback
                    onPress={() => setfilterModal(false)}
                >
                    <View
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0
                        }}
                    />
                </TouchableWithoutFeedback>

                <Animated.View
                    style={{
                        position: 'absolute',
                        backgroundColor: COLORS.white,
                        top: modalY,
                        left: 0,
                        height: '100%',
                        width: '100%',
                        padding: SIZES.padding,
                        borderTopLeftRadius: SIZES.padding,
                        borderTopRightRadius: SIZES.padding,

                    }}
                >
                    {/* Header */}

                    <View
                        style={{
                            alignItems: 'center',
                            flexDirection: 'row'
                        }}
                    >
                        <Text
                            style={{
                                flex: 1,
                                color: 'black',
                                ...FONTS.h3
                            }}
                        >
                            Filter Your Search
                        </Text>

                        <IconButton
                            containerStyle={{
                                borderRadius: 10,
                                borderColor: COLORS.gray2,
                                borderWidth: 2
                            }}
                            icon={icons.cross}
                            iconStyle={{
                                tintColor: COLORS.gray2
                            }}
                            onPress={() => setfilterModal(false)}
                        />
                    </View>

                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{
                            paddingBottom: 200
                        }}
                    >
                        {/* Distance */}

                        {renderDistance()}

                        {/* renderDeliverTime */}

                        {renderDeliveryTime()}

                        {/* renderPricingRange */}

                        {renderPricingRange()}

                        {/* renderRating */}

                        {renderRating()}

                        {/* renderTag */}

                        {renderTag()}
                    </ScrollView>
                    {/* apply filter button */}
                    <View
                        style={{
                            position: 'absolute',
                            bottom: 140,
                            left: 0,
                            right: 0,
                            paddingHorizontal: SIZES.padding,
                            paddingVertical: SIZES.radius,
                            backgroundColor: COLORS.white
                        }}
                    >
                        <TextButton
                            label="Apply Filters"
                            buttonContainerStyle={{
                                alignItems:'center',
                                justifyContent:'center',
                                backgroundColor: COLORS.primary,
                                borderRadius: SIZES.radius,
                                height: 50
                            }}
                            onPress={() => console.log("Apply filter")}
                        />
                    </View>
                </Animated.View>
            </View>
        </Modal>
    )
}