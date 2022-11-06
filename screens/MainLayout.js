import React, { useEffect, useState, useRef } from 'react'
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import Animated, { Extrapolate, interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { useDrawerProgress } from '@react-navigation/drawer'
import { Header } from '../components';
import { COLORS, FONTS, SIZES, icons, dummyData, constants } from '../constants'
import { useDispatch, useSelector } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import { SetSelectedTab } from '../stores/Tab/tabAction';
import Home from './Home/Home';
import Search from './Search/Search';
import Cart from './Cart/Cart';
import Favourite from './Favourite/Favourite';
import Notification from './Notification/Notification';

// Tab Button component

const TabButton = ({ onPress, isFoucesd, icon, label, innerContainerStyle, outerContainerStyle }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[{ flex: isFoucesd ? 2 : 1 }]}
        >
            <Animated.View
                style={[
                    {
                        justifyContent: 'center',
                        alignItems: 'center',
                    },
                    outerContainerStyle
                ]}
            >

                <Animated.View
                    style={[
                        {
                            flexDirection: 'row',
                            width: '100%',
                            height: 50,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 25,
                            padding: 5
                        },
                        innerContainerStyle
                    ]}
                >
                    <Image
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: isFoucesd ? COLORS.white : COLORS.gray
                        }}
                        source={icon} />
                    {
                        isFoucesd &&
                        <Text
                            numberOfLines={1}
                            style={{
                                marginLeft: SIZES.radius,
                                color: isFoucesd ? COLORS.white : COLORS.gray,
                                ...FONTS.h3
                            }}
                        >
                            {label}
                        </Text>
                    }
                </Animated.View>

            </Animated.View>
        </TouchableOpacity>
    )
}



export default function MainLayout({ navigation }) {

    const flatListRef = useRef()
    const Tab = useSelector(state => state.tabAction)
    const dispatch = useDispatch()
    const drawerProgress = useDrawerProgress();
    const animatedStyle = useAnimatedStyle(() => {
        const scale = interpolate(drawerProgress.value, [0, 1], [1, 0.8], {
            extrapolateRight: Extrapolate.CLAMP,
        });
        const borderRadius = interpolate(drawerProgress.value, [0, 1], [0, 10], {
            extrapolateRight: Extrapolate.CLAMP,
        });
        return {
            transform: [{ scale }],
            borderRadius,
        };
    });


    // sharedVaule

    const homeTabFlex = useSharedValue(1)
    const homeTabColor = useSharedValue(COLORS.white)

    const serachTabFlex = useSharedValue(1)
    const searchTabColor = useSharedValue(COLORS.white)

    const cartTabFlex = useSharedValue(1)
    const cartTabColor = useSharedValue(COLORS.white)

    const favouriteTabFlex = useSharedValue(1)
    const favouriteTabColor = useSharedValue(COLORS.white)

    const notificationTabFlex = useSharedValue(1)
    const notificationTabColor = useSharedValue(COLORS.white)


    // Reanimated Style
    const homeFlexStyle = useAnimatedStyle(() => {
        return {
            flex: homeTabFlex.value
        }
    })

    const homeColorstyle = useAnimatedStyle(() => {
        return {
            backgroundColor: homeTabColor.value
        }
    })

    const serachFlexStyle = useAnimatedStyle(() => {
        return {
            flex: serachTabFlex.value
        }
    })

    const serachColorstyle = useAnimatedStyle(() => {
        return {
            backgroundColor: searchTabColor.value
        }
    })
    const cartFlexStyle = useAnimatedStyle(() => {
        return {
            flex: cartTabFlex.value
        }
    })

    const cartColorstyle = useAnimatedStyle(() => {
        return {
            backgroundColor: cartTabColor.value
        }
    })
    const favouriteFlexStyle = useAnimatedStyle(() => {
        return {
            flex: favouriteTabFlex.value
        }
    })

    const favouriteColorstyle = useAnimatedStyle(() => {
        return {
            backgroundColor: favouriteTabColor.value
        }
    })
    const notificationFlexStyle = useAnimatedStyle(() => {
        return {
            flex: notificationTabFlex.value
        }
    })

    const notificationColorstyle = useAnimatedStyle(() => {
        return {
            backgroundColor: notificationTabColor.value
        }
    })


    useEffect(() => {
        if (Tab.selectedtab === constants.screens.home) {
            flatListRef?.current?.scrollToIndex({
                index: 0,
                animated: false
            })
            homeTabFlex.value = withTiming(2, { duration: 500 })
            homeTabColor.value = withTiming(COLORS.primary, { duration: 500 })
        }
        else {
            homeTabFlex.value = withTiming(1, { duration: 500 })
            homeTabColor.value = withTiming(COLORS.white, { duration: 500 })
        }
        // search tab
        if (Tab.selectedtab === constants.screens.search) {
            flatListRef?.current.scrollToIndex({
                index: 1,
                animated: false
            })
            serachTabFlex.value = withTiming(2, { duration: 500 })
            searchTabColor.value = withTiming(COLORS.primary, { duration: 500 })
        }
        else {
            serachTabFlex.value = withTiming(1, { duration: 500 })
            searchTabColor.value = withTiming(COLORS.white, { duration: 500 })
        }
        // cart
        if (Tab.selectedtab === constants.screens.cart) {
            flatListRef?.current.scrollToIndex({
                index: 2,
                animated: false
            })
            cartTabFlex.value = withTiming(2, { duration: 500 })
            cartTabColor.value = withTiming(COLORS.primary, { duration: 500 })
        }
        else {
            cartTabFlex.value = withTiming(1, { duration: 500 })
            cartTabColor.value = withTiming(COLORS.white, { duration: 500 })
        }

        // favourite tab
        if (Tab.selectedtab === constants.screens.favourite) {
            flatListRef?.current.scrollToIndex({
                index: 3,
                animated: false
            })
            favouriteTabFlex.value = withTiming(2, { duration: 500 })
            favouriteTabColor.value = withTiming(COLORS.primary, { duration: 500 })
        }
        else {
            favouriteTabFlex.value = withTiming(1, { duration: 500 })
            favouriteTabColor.value = withTiming(COLORS.white, { duration: 500 })
        }
        // notification tab
        if (Tab.selectedtab === constants.screens.notification) {
            flatListRef?.current.scrollToIndex({
                index: 4,
                animated: false
            })
            notificationTabFlex.value = withTiming(2, { duration: 500 })
            notificationTabColor.value = withTiming(COLORS.primary, { duration: 500 })
        }
        else {
            notificationTabFlex.value = withTiming(1, { duration: 500 })
            notificationTabColor.value = withTiming(COLORS.white, { duration: 500 })
        }
    }, [Tab.selectedtab])


    return (
        <Animated.View
            style={[{
                flex: 1,
                backgroundColor: 'white'
            },
                animatedStyle
            ]}
        >

            {/* Header */}
            <Header
                containerStyle={{
                    height: 50,
                    paddingHorizontal: SIZES.padding,
                    marginTop: 10,
                    alignItems: 'center'
                }}
                title={Tab.selectedtab.toUpperCase()}

                LeftComponent={
                    <TouchableOpacity
                        style={{
                            borderRadius: SIZES.radius,
                            width: 40,
                            height: 40,
                            borderColor: COLORS.gray2,
                            borderWidth: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}

                        onPress={() => navigation.openDrawer()}
                    >
                        <Image source={icons.menu} />
                    </TouchableOpacity>
                }

                RightComponent={
                    <TouchableOpacity
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Image
                            style={{
                                width: 40,
                                height: 40,
                                borderRadius: SIZES.radius
                            }}
                            source={dummyData.myProfile.profile_image} />
                    </TouchableOpacity>
                }
            />

            {/* content */}
            <View
                style={{
                    flex: 1,
                    width: '100%'
                }}
            >

                <FlatList
                    ref={flatListRef}
                    data={constants.bottom_tabs}
                    keyExtractor={item => `${item.id}`}
                    horizontal
                    scrollEnabled={false}
                    snapToAlignment='center'
                    snapToInterval={SIZES.width}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        return (
                            <View
                                style={{
                                    width: SIZES.width,
                                    height: SIZES.height
                                }}
                            >
                                {
                                    item.label === constants.screens.home
                                    && <Home navigation={navigation} />
                                }
                                {
                                    item.label === constants.screens.search
                                    && <Home />
                                }
                                {
                                    item.label === constants.screens.cart
                                    && <Cart />
                                }
                                {
                                    item.label === constants.screens.favourite
                                    && <Home />
                                }
                                {
                                    item.label === constants.screens.notification
                                    && <Home />
                                }

                            </View>
                        )
                    }}
                />
            </View>
            {/* Footer */}

            <View
                style={{
                    height: 100,
                    justifyContent: 'flex-end'
                }}
            >
                <LinearGradient
                    style={{
                        position: 'absolute',
                        top: -1,
                        left: 0,
                        right: 0,
                        height: 100,
                        borderTopRightRadius: 17,
                        borderTopLeftRadius: 17
                    }}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 0 }}
                    colors={
                        [
                            COLORS.transparent,
                            COLORS.lightGray1
                        ]
                    }

                />

                {/* Tab */}

                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        backgroundColor: 'white',
                        paddingHorizontal: SIZES.radius,
                        borderTopRightRadius: 20,
                        borderTopLeftRadius: 20,
                    }}
                >
                    <TabButton
                        label={constants.screens.home}
                        icon={icons.home}
                        isFoucesd={constants.screens.home === Tab.selectedtab}
                        onPress={() => dispatch(SetSelectedTab(constants.screens.home))}
                        outerContainerStyle={homeFlexStyle}
                        innerContainerStyle={homeColorstyle}
                    />
                    <TabButton
                        label={constants.screens.search}
                        icon={icons.search}
                        isFoucesd={constants.screens.search === Tab.selectedtab}
                        onPress={() => dispatch(SetSelectedTab(constants.screens.search))}
                        outerContainerStyle={serachFlexStyle}
                        innerContainerStyle={serachColorstyle}
                    />
                    <TabButton
                        label={constants.screens.cart}
                        icon={icons.cart}
                        isFoucesd={constants.screens.cart === Tab.selectedtab}
                        onPress={() => navigation.navigate(constants.privateStack.cart)}
                        outerContainerStyle={cartFlexStyle}
                        innerContainerStyle={cartColorstyle}
                    />
                    <TabButton
                        label={constants.screens.favourite}
                        icon={icons.favourite}
                        isFoucesd={constants.screens.favourite === Tab.selectedtab}
                        onPress={() => dispatch(SetSelectedTab(constants.screens.favourite))}
                        outerContainerStyle={favouriteFlexStyle}
                        innerContainerStyle={favouriteColorstyle}
                    />
                    <TabButton
                        label={constants.screens.notification}
                        icon={icons.notification}
                        isFoucesd={constants.screens.notification === Tab.selectedtab}
                        onPress={() => dispatch(SetSelectedTab(constants.screens.notification))}
                        outerContainerStyle={notificationFlexStyle}
                        innerContainerStyle={notificationColorstyle}
                    />

                </View>


            </View>
        </Animated.View>
    )
}