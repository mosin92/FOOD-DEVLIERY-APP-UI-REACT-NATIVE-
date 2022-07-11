import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { createDrawerNavigator, DrawerContentScrollView, useDrawerProgress } from '@react-navigation/drawer'
import { COLORS, FONTS, SIZES, constants, dummyData, icons, images } from '../constants'
import MainLayout from '../screens/MainLayout'
import { useDispatch, useSelector } from 'react-redux'
import { SetSelectedTab } from '../stores/Tab/tabAction'
const CustomDrawerItems = ({ label, icon, onPress, isFoucused }) => {
    return (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                height: 40,
                marginBottom: SIZES.base,
                alignItems: 'center',
                paddingLeft: SIZES.radius,
                borderRadius: SIZES.base,
                backgroundColor: isFoucused ? COLORS.transparentBlack1 : null
            }}
            onPress={ onPress}
        >
            <Image
                source={icon}
                style={{
                    width: 20,
                    height: 20,
                    tintColor: COLORS.white
                }}
            />
            <Text
                style={{
                    color: COLORS.white,
                    ...FONTS.h3,
                    marginLeft: 15
                }}
            >
                {label}
            </Text>

        </TouchableOpacity>
    )
}

const CustomDrawerContent = ({ navigation }) => {
    const dispatch = useDispatch()
    const Tab = useSelector(state => state.tabAction)
    return (
        <DrawerContentScrollView scrollEnabled={true} contentContainerStyle={{ flex: 1 }}>
            <View style={{ flex: 1, paddingHorizontal: SIZES.radius }}>

                {/* close btn */}
                <View>
                    <TouchableOpacity onPress={() => navigation.closeDrawer()}>
                        <Image source={icons.cross} style={{ height: 35, width: 35, tintColor: COLORS.white }} />
                    </TouchableOpacity>
                </View>

                {/* Profile */}
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: SIZES.radius
                    }}
                >
                    <Image source={dummyData.myProfile.profile_image} style={{
                        width: 50,
                        height: 50,
                        borderRadius: SIZES.radius
                    }}
                    />

                    <View
                        style={{
                            marginLeft: SIZES.radius,
                        }}
                    >
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
                            {dummyData.myProfile?.name}
                        </Text>
                        <Text style={{ color: COLORS.white, ...FONTS.body4 }}>
                            View your profile
                        </Text>

                    </View>
                </TouchableOpacity>
                {/* drawer items */}
                <View
                    style={{
                        marginTop: SIZES.padding
                    }}
                >
                    <CustomDrawerItems
                        label={constants.screens.home}
                        icon={icons.home}
                        isFoucused={Tab.selectedtab === constants.screens.home ? true : false}
                        onPress={() => {
                            dispatch(SetSelectedTab(constants.screens.home))
                            navigation.navigate("Home")
                        }}
                    />
                    <CustomDrawerItems
                        label={"My wallet"}
                        icon={icons.wallet}
                        isFoucused={Tab.selectedtab === "My wallet"}
                        onPress={() => {
                            dispatch(SetSelectedTab("My wallet"))
                            navigation.navigate("Home")
                        }}
                    />
                    <CustomDrawerItems
                        label={constants.screens.notification}
                        icon={icons.notification}
                        isFoucused={Tab.selectedtab === constants.screens.notification}
                        onPress={() => {
                            dispatch(SetSelectedTab(constants.screens.notification))
                            navigation.navigate("Home")
                        }}
                    />
                    <CustomDrawerItems
                        label={constants.screens.favourite}
                        icon={icons.favourite}
                        isFoucused={Tab.selectedtab === constants.screens.favourite}
                        onPress={() => {
                            dispatch(SetSelectedTab(constants.screens.favourite))
                            navigation.navigate("Home")
                        }}
                    />
                    {/* Line divider */}
                    <View
                        style={{
                            marginVertical: SIZES.radius,
                            backgroundColor: COLORS.lightGray1,
                            height: 1,
                            marginLeft: SIZES.radius
                        }}
                    />
                    <CustomDrawerItems
                        label={"Track your Order"}
                        icon={icons.location}
                        isFoucused={Tab.selectedtab === "Track your Order"}
                        onPress={() => {
                            dispatch(SetSelectedTab("Track your Order"))
                            navigation.navigate("Home")
                        }}
                    />
                    <CustomDrawerItems
                        label={"Coupons"}
                        icon={icons.coupon}
                        isFoucused={Tab.selectedtab === "Coupons"}
                        onPress={() => {
                            dispatch(SetSelectedTab("Coupons"))
                            navigation.navigate("Home")
                        }}
                    />
                    <CustomDrawerItems
                        label={"Setting"}
                        icon={icons.setting}
                        isFoucused={Tab.selectedtab === "Setting"}
                        onPress={() => {
                            dispatch(SetSelectedTab("Setting"))
                            navigation.navigate("Home")
                        }}
                    />
                    <CustomDrawerItems
                        label={"Invite a Friend"}
                        icon={icons.profile}
                        isFoucused={Tab.selectedtab === "Invite a Friend"}
                        onPress={() => {
                            dispatch(SetSelectedTab("Invite a Friend"))
                            navigation.navigate("Home")
                        }}
                    />
                    <CustomDrawerItems
                        label={"Help Center"}
                        icon={icons.help}
                        isFoucused={Tab.selectedtab === "Help Center"}
                        onPress={() => {
                            dispatch(SetSelectedTab("Help Center"))
                            navigation.navigate("Home")
                        }}
                    />
                </View>
                <View
                    style={{
                        marginBottom: SIZES.padding,
                        flex: 1,
                        justifyContent: 'flex-end'
                    }}
                >
                    <CustomDrawerItems
                        label={"Log Out"}
                        icon={icons.logout}
                    />
                </View>
            </View>
        </DrawerContentScrollView>
    )
}

const Drawer = createDrawerNavigator()

export default function CustomDrawer() {

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.primary
            }}
        >
            <Drawer.Navigator
                screenOptions={{
                    headerShown: false,
                    drawerType: 'slide',
                    overlayColor: 'transparent',
                    drawerStyle: {
                        flex: 1,
                        width: '65%',
                        paddingRight: 20,
                        backgroundColor: 'transparent'
                    },
                    sceneContainerStyle: {
                        backgroundColor: 'transparent'
                    },
                }}
                initialRouteName="MainLayout"
                drawerContent={props => {
                    return <CustomDrawerContent navigation={props.navigation} />
                }}
            >
                <Drawer.Screen name='MainLayout'>
                    {props => <MainLayout {...props} />}
                </Drawer.Screen>

            </Drawer.Navigator>

        </View>
    )
}