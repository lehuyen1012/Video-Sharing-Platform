import { StyleSheet, Text, View } from "react-native";
import React from "react";

const InfoBox = ({ title, subtitle, containerStyles, titleStyles }) => {
    return (
        <View className={containerStyles}>
            <Text
                className={`text-white text-center font-psemibold ${titleStyles}`}
            >
                {title}
            </Text>
            <Text className="text-sm text-gray-100 text-center font-pregular">
                {subtitle}
            </Text>
        </View>
    );
};

export default InfoBox;

const styles = StyleSheet.create({});
