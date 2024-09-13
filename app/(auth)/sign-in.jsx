import {
    StyleSheet,
    Text,
    View,
    Image,
    SafeAreaView,
    ScrollView,
} from "react-native";
import { React, useState } from "react";
import { Link } from "expo-router";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
const SignIn = () => {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const submit = () => {};
    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView>
                <View className="w-full justify-center min-h-[85vh] px-4">
                    <Image
                        source={images.logo}
                        resizeMode="contain"
                        className="w-[130px] h-[84px]"
                    />
                    <Text className="text-2xl text-white text-simibold mt-10 font-psemibold">
                        Log in to DOFY
                    </Text>
                    <FormField
                        title="Email"
                        value={form.email}
                        handleChangeText={(e) => setForm({ ...form, email: e })}
                        otherStyles="mt-7"
                        keyboardType="email-address"
                    />
                    <FormField
                        title="Password"
                        value={form.password}
                        handleChangeText={(e) =>
                            setForm({ ...form, password: e })
                        }
                        otherStyles="mt-7"
                        keyboardType="email-address"
                    />
                    <CustomButton
                        title="Sign In"
                        handlePress={submit}
                        containerStyles="mt-7"
                        isLoading={isSubmitting}
                    />
                    <View className="justify-center pt-5 flex-row gap-2">
                        <Text className="text-lg text-gray-100 font-pregular">
                            Don't have an account?
                        </Text>
                        <Link
                            href="/sign-up"
                            className="text-lg text-secondary font-psemibold"
                        >
                            Sign up
                        </Link>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SignIn;

const styles = StyleSheet.create({});
