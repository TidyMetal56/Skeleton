import React, { useState } from "react";
import { Skeleton, Text, Button, Box, Image, VStack, Center, NativeBaseProvider, HStack, Avatar, AlertDialog} from "native-base";

const Skele = ({ navigation }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef(null);

  const [isLoaded, setIsLoaded] = useState(false);
  const [text, setText] = useState("");
  setTimeout(() => {
    setIsLoaded(true);
  }, 5000);
  return <Center w="100%">

      <Box w="1000%" maxWidth="1000" h="150">
        <VStack maxWidth="1000" borderWidth="1" space={3} overflow="hidden" rounded="md" _dark={{
        borderColor: "coolGray.500"
      }} _light={{
        borderColor: "coolGray.200"
      }}>
          <Skeleton h="40"  w="10000" isLoaded={isLoaded}>
            <Image h="40" w="10000" source={{
            uri: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          }} />
          </Skeleton>
          <HStack >
          <Skeleton.Text w="750" lines={4} px="4" isLoaded={isLoaded}>
            <Text px="4" fontSize={"md"} lineHeight={"20px"}>
            Lose yourself in the greens of nature, the ones that make you strong. Come visit us at the Greenway Park, and we will be happy to show you around.
            </Text>
          </Skeleton.Text>
          <Box w="90%" maxWidth="200" h="100" >
          <Skeleton backgroundColor="red.100" mb="3" w="40" rounded="10" isLoaded={isLoaded} >
            <Button backgroundColor="red.500" m="4" onPress={() => setIsOpen(!isOpen)}>Reservar</Button>
          </Skeleton>

          <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Body>
            ¿Desea realizar la reservacion?
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button.Group space={2}>
              <Button variant="unstyled" colorScheme="coolGray" onPress={onClose} ref={cancelRef}>
                Cancelar
              </Button>
              <Button colorScheme="danger" onPress={onClose}>
                Reservar
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
          </Box>
          </HStack>
        </VStack>
      </Box>
    </Center>;
};

    export default Skele; 