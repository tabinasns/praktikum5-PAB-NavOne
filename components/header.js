import { useNavigation } from "@react-navigation/native";
import { Box, HStack, Heading, Image } from "native-base";
import { TouchableOpacity } from "react-native";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";

const Header = ({ title, withBack = false }) => {
    // color declaration
    const trueGray = "#171717";
    // navigator declaration
    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <StatusBar barStyle="light" backgroundColor={trueGray} />
            <Box bg={"trueGray.900"} p={"4"}>
                <HStack justifyContent="space-between" alignItems="center" >
                    <HStack alignItems="center" >
                        {!withBack ? (
                            <>
                                <Image 
                                    source={require("../assets/cnn.png")}
                                    w="12"
                                    h="12"
                                    alt="CNN Logo"
                                    mr={"3"}
                                />
                            </>
                        ) : (
                            <TouchableOpacity
                                activeOpacity={0.5}
                                onPress={() => navigation.goBack()}
                            >
                                <Box>
                                    <Ionicons name="arrow-back-outline" size={32} color="white" />
                                </Box>
                            </TouchableOpacity>
                        )}
                        <Heading color={"white"} >{title}</Heading>
                    </HStack>

                    <HStack space={"2xl"}>
                        <Image 
                            source={require("../assets/facebook.png")}
                            w="5"
                            h="5"
                            alt="Facebook Icon"
                        />
                        <Image 
                            source={require("../assets/youtube.png")}
                            w="5"
                            h="5"
                            alt="Youtube Icon"
                        /><Image 
                            source={require("../assets/twitter.png")}
                            w="5"
                            h="5"
                            alt="Twitter Icon"
                        /><Image 
                            source={require("../assets/search.png")}
                            w="5"
                            h="5"
                            alt="Search Icon"
                        />
                    </HStack>
                </HStack>
            </Box>
        </SafeAreaView>
    );
}

export default Header;