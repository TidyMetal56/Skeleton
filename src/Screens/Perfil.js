import { View } from 'react-native'
import React, { useState } from "react";
import { Box, Text, HStack, Menu, Pressable, Avatar, Skeleton, HamburgerIcon, Center, VStack, Button, Image} from "native-base";

const Perfil = ({ navigation }) => {
  const[isLoaded, setIsLoaded] = useState(false);
  setTimeout(() => {
  setIsLoaded(true);
  }, 3000);

  return (
    <View>
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
      

      <Center w="100%">
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
          <Center>          
          <Skeleton borderWidth={8} borderColor="gray.200" endColor="warmGray.50" size="60" rounded="full" mt="0" isLoaded={isLoaded}>
          <Avatar bg="green.500" size="lg" source={{
              uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          }}></Avatar>
        </Skeleton> 
        </Center> 
          <HStack>
          <Skeleton.Text w="750" lines={8} px="4" isLoaded={isLoaded}>
            <Text px="4" fontSize={"md"} lineHeight={"20px"}>
              Nombre: [Nombre completo] <br/>
              Edad: [Edad] <br/>
              Profesión: [Profesión o actividad principal] <br/>
              Propósito del viaje: [Vacaciones / Trabajo / Evento especial / Otro] <br/>
              Presupuesto: [Presupuesto por noche o por estancia] <br/>
              Necesidades especiales: [Accesibilidad para discapacitados, habitaciones adaptadas para niños, etc.] <br/>
              Intereses adicionales: [Actividades o lugares que desea visitar en el destino, como museos, playas, parques, etc.] <br/>
              Información de contacto: [Correo electrónico, número de teléfono, etc.] <br/>
            </Text>
          </Skeleton.Text>

          <Box w="90%" maxWidth="200" h="300" >
          <Skeleton backgroundColor="red.100" mb="3" w="40" rounded="10" isLoaded={isLoaded} >
            <Button backgroundColor="red.500" m="4" >Cambiar Foto</Button>
          </Skeleton>
          <Skeleton backgroundColor="red.100" mb="3" w="40" rounded="10" isLoaded={isLoaded} >
            <Button backgroundColor="red.500" m="4" >Cambio de contraseña</Button>
          </Skeleton>
          <Skeleton backgroundColor="red.100" mb="3" w="40" rounded="10" isLoaded={isLoaded} >
            <Button backgroundColor="red.500" m="4" >Cambiar Nombre</Button>
          </Skeleton>
          <Skeleton backgroundColor="red.100" mb="3" w="40" rounded="10" isLoaded={isLoaded} >
            <Button backgroundColor="red.500" m="4" >Cerrar Sesion </Button>
          </Skeleton>
          </Box>
          </HStack>
        </VStack>
      </Box>
    </Center>;

    </View>
      


    
  )
}

export default Perfil