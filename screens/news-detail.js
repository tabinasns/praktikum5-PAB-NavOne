import { Heading, Center, Text, ScrollView, Box, Image } from "native-base";
import { Header } from "../components";

const NewsDetail = ({ route }) => {
  // Get the params
  const params = route.params.item;
  return (
    <>
      <Header title={"News"} withBack="true" />
      <ScrollView>
        <Image 
          source={{uri: params.image}}
          w={"full"}
          h={185}
        />
        <Box
          p={"3"}
          borderBottomWidth={1}
          borderBottomColor={"coolGray.300"}
        >
          <Text>{params.date}</Text>
          <Heading>{params.title}</Heading>
        </Box>
        <Box p={"3"}>
          <Text>{params.content}</Text>
        </Box>
      </ScrollView>

      {/* <Header title={"News"} withBack="true" />
      <Center flex={1} p={"4"}>
        <Heading>News Detail</Heading>
        <Text textAlign={"center"}>{params.title}</Text>
      </Center> */}
    </>
  );
};

export default NewsDetail;