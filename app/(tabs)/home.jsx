import {
    FlatList,
    StyleSheet,
    Text,
    View,
    Image,
    RefreshControl,
    Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import SearchInput from "../../components/SearchInput";
import Trending from "../../components/Trending";
import EmptyState from "../../components/EmptyState";
import { useState, useEffect } from "react";
import { getAllPosts } from "../../lib/appwrite";
import useAppwrite from "../../lib/useAppwrite";
import VideoCard from "../../components/VideoCard";
const Home = () => {
    const { data: posts, refetch } = useAppwrite(getAllPosts);
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = async () => {
        setRefreshing(true);
        await refetch();
        setRefreshing(false);
    };

    return (
        <SafeAreaView className="bg-primary h-full ">
            <FlatList
                data={posts}
                // data={[]}
                keyExtractor={(item) => item.$id}
                renderItem={({ item }) => <VideoCard video={item} />}
                ListHeaderComponent={() => (
                    <View className="my-6 px-4 space-y-6">
                        <View className="justify-between items-start flex-row mb-6">
                            <View>
                                <Text className="font-pmedium text-sm text-gray-100">
                                    Welcome
                                </Text>
                                <Text className="text-2xl font-psemibold text-white">
                                    Dofy
                                </Text>
                            </View>
                            <View className="mt-1.5">
                                <Image
                                    source={images.logoSmall}
                                    className="w-10 h-12"
                                    resizeMode="contain"
                                />
                            </View>
                        </View>
                        <SearchInput />

                        <View className="w-full flex-1 pt-5 pb-8">
                            <Text className="text-gray-100 font-pregular text-lg mb-3">
                                Trending
                            </Text>

                            <Trending
                                posts={[{ id: 1 }, { id: 2 }, { id: 3 }] ?? []}
                            />
                        </View>
                    </View>
                )}
                ListEmptyComponent={() => (
                    <EmptyState
                        title="No Videos Found"
                        subtitle="Be the first one to upload a video"
                    />
                )}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            />
        </SafeAreaView>
    );
};

export default Home;
