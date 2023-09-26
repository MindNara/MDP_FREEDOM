import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    Image,
    Pressable,
    ImageBackground,
    ScrollView
} from 'react-native';
import { useFonts } from '@expo-google-fonts/prompt';
import { TripOnDay } from '../components/index';

export default function TripDetail({ navigation }) {

    const [loaded] = useFonts({
        promptLight: require("../assets/fonts/Prompt-Light.ttf"),
        promptRegular: require("../assets/fonts/Prompt-Regular.ttf"),
        promptMedium: require("../assets/fonts/Prompt-Medium.ttf"),
        promptSemiBold: require("../assets/fonts/Prompt-SemiBold.ttf"),
        promptBold: require("../assets/fonts/Prompt-Bold.ttf"),
    });

    if (!loaded) {
        return null;
    }

    return (
        <SafeAreaView className="container mx-auto h-full bg-white">
            <ScrollView>
                {/* Header & Image */}
                <View className="w-full h-full bg-blue-light">
                    {/* <Image className="absolute w-full h-full" source={require('../assets/IntroImage.png')} /> */}
                    <View className="mx-[32px] pt-16 flex flex-row justify-between">
                        <Pressable onPress={() => {
                            navigation.goBack();
                        }}>
                            <View className="justify-center items-center h-[36px] w-[36px] bg-white rounded-3xl opacity-50"></View>
                            <Image className="absolute top-[6.5px] left-[5px]" source={{ uri: 'https://img.icons8.com/ios-glyphs/90/back.png' }}
                                style={{ width: 22, height: 22 }} />
                        </Pressable>
                        <View>
                            <View className="justify-center items-center h-[36px] w-[36px] bg-white rounded-3xl opacity-50"></View>
                            <Image className="absolute top-[9px] left-2" source={{ uri: 'https://img.icons8.com/material-outlined/96/2E2E2E/filled-like.png' }}
                                style={{ width: 20, height: 20 }} />
                        </View>
                    </View>

                    {/* Content */}
                    <View className="bg-white bottom-0 mt-40 w-full h-full rounded-t-[50px]">

                        <View className="mx-[32px] pt-12">
                            <View className="flex flex-row items-center">
                                <View style={[styles.textbox, { alignItems: 'center', justifyContent: 'center' }]}>
                                    <Text className="text-[20px] text-white" style={{ fontFamily: 'promptBold' }}>03</Text>
                                    <Text className="text-[12px] text-white mt-[-5px]" style={{ fontFamily: 'promptBold' }}>DAY</Text>
                                </View>
                                <Text className="text-[26px] text-gray-dark ml-[20px]" style={{ fontFamily: 'promptSemiBold' }}>Trip Name</Text>
                            </View>

                            <View className="pt-[30px] ml-[30px] mr-[10px]">

                                {/* box day1 */}
                                <View className="flex flex-row items-center mb-[15px]">
                                    <View className="w-[24px] h-[24px] left-[-10] rounded-xl items-center justify-center border-collapse border-[1px]">
                                        <View className="bg-gray-dark w-[16px] h-[16px] rounded-xl"></View>
                                    </View>
                                    <Text className="text-[20px] ml-[5px] text-gray-dark" style={{ fontFamily: 'promptBold' }}>DAY 1</Text>
                                </View>
                                <View className="h-auto border-dashed border-l-2 border-black ml-[1px]">
                                    <View style={{ alignItems: "center", justifyContent: "center" }}>
                                        <TripOnDay navigation={navigation}></TripOnDay>
                                    </View>
                                </View>

                                {/* box day2 */}
                                <View className="flex flex-row items-center my-[15px]">
                                    <View className="w-[24px] h-[24px] left-[-10] rounded-xl items-center justify-center border-collapse border-[1px]">
                                        <View className="bg-gray-dark w-[16px] h-[16px] rounded-xl"></View>
                                    </View>
                                    <Text className="text-[20px] ml-[5px] text-gray-dark" style={{ fontFamily: 'promptBold' }}>DAY 2</Text>
                                </View>
                                <View className="h-auto border-dashed border-l-2 border-black ml-[1px]">
                                    <View style={{ alignItems: "center", justifyContent: "center" }}>
                                        <TripOnDay navigation={navigation}></TripOnDay>
                                    </View>
                                </View>

                                {/* box day3 */}
                                <View className="flex flex-row items-center my-[15px]">
                                    <View className="w-[24px] h-[24px] left-[-10] rounded-xl items-center justify-center border-collapse border-[1px]">
                                        <View className="bg-gray-dark w-[16px] h-[16px] rounded-xl"></View>
                                    </View>
                                    <Text className="text-[20px] ml-[5px] text-gray-dark" style={{ fontFamily: 'promptBold' }}>DAY 3</Text>
                                </View>
                                <View className="h-auto border-dashed border-l-2 border-black ml-[1px]">
                                    <View style={{ alignItems: "center", justifyContent: "center" }}>
                                        <TripOnDay navigation={navigation}></TripOnDay>
                                    </View>
                                </View>
                                

                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    textbox: {
        width: 60,
        height: 56,
        backgroundColor: "black",
        borderRadius: 10
    }
});