import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Image
} from "@chakra-ui/react";
import ProfileArray from "./ProfileArray";

export default function About({ color }) {
  const profile = ProfileArray();
    return (
      <>
        <Container maxW={"3xl"} id="about">
          <Stack
            as={Box}
            textAlign={"center"}
            spacing={{ base: 8, md: 14 }}
            pb={{ base: 20, md: 36 }}
          >
            <Stack align="center" direction="row" px={4}>
              <HStack mx={4}>
                <Text color={`${color}.400`} fontWeight={800}>
                  01
                </Text>
                <Text fontWeight={800}>About</Text>
              </HStack>
              <Divider orientation="horizontal" />
            </Stack>
            <HStack>
            <Image
              borderRadius='full'
              boxSize='150px'
              src='Zihao.jpg'
              alt='Zihao'
            />
            <Text color={"gray.600"} fontSize={"xl"} px={4}>
              {profile.about}
            </Text>
            </HStack>
          </Stack>
        </Container>
      </>
    );
}

