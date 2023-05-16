import {
  Box,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Hide,
  Highlight,
} from '@chakra-ui/react';

// const avatars = [
//   {
//     name: 'Ryan Florence',
//     url: 'https://bit.ly/ryan-florence',
//   },
//   {
//     name: 'Segun Adebayo',
//     url: 'https://bit.ly/sage-adebayo',
//   },
//   {
//     name: 'Kent Dodds',
//     url: 'https://bit.ly/kent-c-dodds',
//   },
//   {
//     name: 'Prosper Otemuyiwa',
//     url: 'https://bit.ly/prosper-baba',
//   },
//   {
//     name: 'Christian Nwamba',
//     url: 'https://bit.ly/code-beast',
//   },
// ];

const Login = () => {
  return (
    <Box
      minH="100vh"
      position={'relative'}
      display="flex"
      alignItems="center"
      bgGradient="linear-gradient(to-r, #4facfe 0%, #00f2fe 100%)"
    >
      <Container
        as={SimpleGrid}
        maxW={{ base: 'md', lg: '6xl' }}
        columns={{ base: 1, md: 1, lg: 2 }}
        spacing={{ base: 10, lg: 20 }}
        py={{ base: 10, sm: 20, lg: 32 }}
      >
        <Stack
          w={{ base: '90%' }}
          m={{ base: '0 auto' }}
          spacing={{ base: 6, md: 8, lg: 10 }}
        >
          <Hide above="lg">
            <Text lineHeight="base" align="center" fontSize="6xl">
              🤩
            </Text>
          </Hide>
          <Heading
            lineHeight="xl"
            zIndex={1}
            mt="0 !important"
            bgGradient="linear(to-br, #ff00e3, #3300be)"
            bgClip="text"
            fontWeight="extrabold"
            textAlign={['center', null, null, 'left']}
            fontSize={{ sm: '4xl', '2sm': '5xl', md: '7xl' }}
          >
            <Text
              mb="4"
              fontSize={{ base: '3xl', '2sm': '4xl' }}
              whiteSpace="nowrap"
            >
              Bienvenido a
            </Text>{' '}
            <Highlight
              query="thefacestar"
              styles={{ px: '4', rounded: 'md', bg: 'yellow.1000' }}
            >
              thefacestar
            </Highlight>
          </Heading>
          <Heading
            color="darkgray.900"
            zIndex={1}
            fontSize={['md', 'md', 'xl', '2xl']}
          >
            La red social donde podrás puntuar de manera anónima a cualquier
            persona.
          </Heading>
          <Heading
            color="brand.500"
            zIndex={1}
            fontSize={['md', 'md', 'xl', '2xl']}
          >
            Únete GRATIS y empieza a recibir votos ya
          </Heading>
          {/* <Stack direction={'row'} spacing={4} align={'center'}>
            <AvatarGroup>
              {avatars.map(avatar => (
                <Avatar
                  key={avatar.name}
                  name={avatar.name}
                  src={avatar.url}
                  size={variant}
                  position={'relative'}
                  zIndex={2}
                  _before={{
                    content: '""',
                    width: 'full',
                    height: 'full',
                    rounded: 'full',
                    transform: 'scale(1.125)',
                    bgGradient: 'linear(to-bl, red.400,pink.400)',
                    position: 'absolute',
                    zIndex: -1,
                    top: 0,
                    left: 0,
                  }}
                />
              ))}
            </AvatarGroup>
            <Text fontFamily={'heading'} fontSize={{ base: '4xl', md: '6xl' }}>
              +
            </Text>
            <Flex
              align={'center'}
              justify={'center'}
              fontFamily={'heading'}
              fontSize={{ base: 'sm', md: 'lg' }}
              bg={'gray.800'}
              color={'white'}
              rounded={'full'}
              minWidth={useBreakpointValue({ base: '44px', md: '60px' })}
              minHeight={useBreakpointValue({ base: '44px', md: '60px' })}
              position={'relative'}
              _before={{
                content: '""',
                width: 'full',
                height: 'full',
                rounded: 'full',
                transform: 'scale(1.125)',
                bgGradient: 'linear(to-bl, orange.400,yellow.400)',
                position: 'absolute',
                zIndex: -1,
                top: 0,
                left: 0,
              }}
            >
              YOU
            </Flex>
          </Stack> */}
        </Stack>
        <Stack
          bg={'gray.50'}
          rounded={'xl'}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ base: 'md', lg: 'lg' }}
          justifySelf={{ base: 'center' }}
        >
          <Stack spacing={4}>
            <Heading
              color={'gray.800'}
              lineHeight={1.1}
              textAlign={{ base: 'center ', lg: 'left' }}
              fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
            >
              <Text
                as={'span'}
                bgGradient="linear(to-r, red.400, pink.400)"
                bgClip="text"
              >
                ¡
              </Text>
              Registro abierto por tiempo limitado
              <Text
                as={'span'}
                bgGradient="linear(to-r, red.400, pink.400)"
                bgClip="text"
              >
                !
              </Text>
            </Heading>
            <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
              Thefacestar es una plataforma privada y exclusiva. Cuando cerremos
              los registros de nuevos usuarios en unas horas, solo se podrá
              acceder mediante la invitación de otro usuario.
            </Text>
          </Stack>
          <Box
            as={'form'}
            mt={10}
            display="flex"
            flex="1"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Stack spacing={4}>
              <Input
                placeholder="Nombre"
                bg={'gray.100'}
                border={0}
                fontWeight={'bold'}
                color={'gray.600'}
                _placeholder={{
                  color: 'gray.500',
                  fontWeight: 'normal',
                }}
              />
              <Input
                placeholder="nombre@email.com"
                bg={'gray.100'}
                border={0}
                fontWeight={'bold'}
                color={'gray.600'}
                _placeholder={{
                  color: 'gray.500',
                  fontWeight: 'normal',
                }}
              />
            </Stack>
            <Button
              fontFamily={'heading'}
              mt={8}
              w={'full'}
              bgGradient="linear(to-r, pink.400, red.400)"
              color={'white'}
              _hover={{
                bgGradient: 'linear(to-r, red.400, pink.400)',
                boxShadow: 'xl',
              }}
            >
              Registrarme gratis
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Login;
