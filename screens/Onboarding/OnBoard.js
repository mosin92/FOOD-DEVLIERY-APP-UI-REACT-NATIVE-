import React, { useState } from 'react'
import { useRef } from 'react'
import { View, Text, Image, Animated, StyleSheet, ImageBackground } from 'react-native'
import TextButton from '../../components/TextButton'
import { COLORS, FONTS, SIZES, icons, images, constants } from '../../constants'

const OnBoard = ({ navigation }) => {
    const ScrollX = useRef(new Animated.Value(0)).current
    const flatelistRef = useRef()
    const [currentIndex, setcurrentIndex] = useState(0)

    const viewChangeRef = useRef(({ viewableItems }) =>
        setcurrentIndex(viewableItems[0].index)
    )
    // components

    const Dots = () => {
        const dotPosition = Animated.divide(ScrollX, SIZES.width)
        return (
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                {
                    constants.onboarding_screens.map((item, index) => {
                        const dotcolor = dotPosition.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: [COLORS.lightOrange, COLORS.primary, COLORS.lightOrange],
                            extrapolate: 'clamp'
                        })
                        const dotwidth = dotPosition.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: [10, 30, 10],
                            extrapolate: 'clamp'
                        })
                        return (
                            <Animated.View
                                key={`${item.id}`}
                                style={{
                                    height: 10,
                                    width: dotwidth,
                                    backgroundColor: dotcolor,
                                    borderRadius: 5,
                                    marginHorizontal: 6
                                }}
                            />
                        )
                    })
                }

            </View>
        )
    }
    const renderHeader = () => {
        return (
            <View
                style={{
                    position: 'absolute',
                    justifyContent: 'center',
                    top: SIZES.height > 800 ? 50 : 25,
                    left: 0,
                    right: 0,
                    alignItems: 'center',
                }}
            >
                <Image
                    style={{
                        width: SIZES.width * 0.8,
                        height: 100,
                    }}
                    resizeMode='contain'
                    source={images.logo_02}
                />

            </View>
        )

    }

    const renderFooter = () => {
        return (
            <View
                style={{
                    height: 160,
                }}
            >
                {/* paginations /Dots */}
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Dots />
                </View>

                {/* Buttons */}
                {
                    currentIndex < constants.onboarding_screens.length - 1 &&
                    (
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                paddingHorizontal: SIZES.padding,
                                marginVertical: SIZES.padding
                            }}
                        >
                            <TextButton
                                label="Skip"
                                labelStyle={{
                                    color: COLORS.darkGray2,
                                    ...FONTS.h3
                                }}
                                onPress={() => {
                                    navigation.navigate("signin")
                                }}
                            />
                            <TextButton
                                label="Next"
                                onPress={() => {
                                    flatelistRef?.current?.scrollToIndex({
                                        index: currentIndex + 1,
                                        animated: true
                                    })
                                }}
                                buttonContainerStyle={{
                                    backgroundColor: COLORS.primary,
                                    height: 60,
                                    width: 200,
                                    borderRadius: SIZES.radius,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                                labelStyle={{
                                    color: 'white',
                                    ...FONTS.h3,
                                    alignItems: 'center',
                                    justifyContent: 'center'

                                }}
                            />
                        </View>
                    )
                }

                {/* Get started button */}
                {
                    currentIndex === constants.onboarding_screens.length - 1 &&
                    (
                        <View
                            style={{
                                paddingHorizontal: SIZES.padding,
                                marginVertical: SIZES.padding
                            }}
                        >
                            <TextButton
                                label={"Let's Get started"}
                                buttonContainerStyle={{
                                    backgroundColor: COLORS.primary,
                                    borderRadius: SIZES.radius,
                                    height: 60,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                                labelStyle={{ color: 'white' }}
                                onPress={() => navigation.navigate("signin")}
                            />
                        </View>
                    )
                }


            </View>
        )

    }

    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                backgroundColor: COLORS.white,
            }}
        >

            {/* header */}
            {renderHeader()}

            <Animated.FlatList
                ref={flatelistRef}
                horizontal
                pagingEnabled
                data={constants.onboarding_screens}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16}
                snapToAlignment='center'
                keyExtractor={(item) => `${item.id}`}

                onViewableItemsChanged={viewChangeRef.current}
                onScroll={Animated.event(
                    [
                        { nativeEvent: { contentOffset: { x: ScrollX } } }
                    ],
                    { useNativeDriver: false }
                )}
                renderItem={({ item, index }) => {
                    return (
                        <View
                            style={{
                                width: SIZES.width
                            }}
                        >
                            <View
                                style={{
                                    width: SIZES.width,
                                    flex: 3,
                                }}
                            >
                                <ImageBackground
                                    source={item.backgroundImage}
                                    style={{
                                        flex: 1,
                                        height: index === 1 ? "86.20%" : '100%',
                                        width: '100%',
                                        alignItems: 'center',
                                        justifyContent: 'flex-end'
                                    }}
                                >

                                    <Image
                                        source={item.bannerImage}
                                        resizeMode="contain"
                                        style={{
                                            width: SIZES.width * 0.8,
                                            height: SIZES.width * 0.8,
                                            marginBottom: -SIZES.padding
                                        }}
                                    />
                                </ImageBackground>
                            </View>

                            {/* detail */}

                            <View
                                style={{
                                    flex: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginTop: 30,
                                    paddingHorizontal: SIZES.radius,
                                }}
                            >
                                <Text
                                    style={{
                                        color: COLORS.black,
                                        ...FONTS.h1,
                                        fontSize: 24
                                    }}
                                >
                                    {item.title}
                                </Text>

                                <Text
                                    style={{
                                        marginTop: SIZES.radius,
                                        color: COLORS.darkGray,
                                        textAlign: 'center',
                                        paddingHorizontal: SIZES.padding,
                                        ...FONTS.body3
                                    }}
                                >
                                    {item.description}
                                </Text>
                            </View>
                        </View>
                    )
                }}

            />

            {/* footer */}
            {renderFooter()}

        </View>
    )
}

export default OnBoard