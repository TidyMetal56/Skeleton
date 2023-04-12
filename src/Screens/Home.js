import { View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Box, Text, HStack, Menu, Pressable, Avatar, Skeleton, HamburgerIcon} from "native-base";
import Skele from '../../components/Skele';
import { useState } from 'react';

const Home = ({ navigation }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef(null);

  const[isLoaded, setIsLoaded] = useState(false);
  setTimeout(() => {
  setIsLoaded(true);
  }, 4000);
  return (
    <View>
      <StatusBar style='Black' />
      <Box  bg="blue.500" />
      <HStack bg="blue.600" px="3" py="3" justifyContent="space-between" alignItems="center" w="100%" maxW="100%" space="0">
      <HStack alignItems="center">
          <Text color="white" fontSize="20" fontWeight="bold" >
            Inicio 
          </Text>
        </HStack>
        <HStack>

        <Menu w="100" trigger={triggerProps => {
      return <Pressable accessibilityLabel="More options menu" {...triggerProps}>
                <HamburgerIcon/>
            </Pressable>;
    }}>
        <Menu.Item  onPress={() => navigation.navigate(screen.perfil)}>Perfil</Menu.Item>
       
      </Menu>

        <Skeleton borderWidth={8} borderColor="gray.200" endColor="warmGray.50" size="60" rounded="full" mt="0" isLoaded={isLoaded}>
          <Avatar bg="green.500" size="lg" source={{
              uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          }}></Avatar>
        </Skeleton>
      
        </HStack>
      </HStack>
      <br/>
      <Skele/>
    </View>
  )
}

export default Home