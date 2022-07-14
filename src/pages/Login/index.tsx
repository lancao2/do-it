import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import LogoDark from "../../assets/LOGOdarck.svg";
import { Input } from "../../components/Form/input";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { FieldValues, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useAuth } from "../../contexts/authContext";

const LoginSchema = yup.object().shape({
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  passwod: yup.string().required("Senha obrigatória"),
});

interface LoginData extends FieldValues {
  email: string;
  password: string;
}

export const Login = () => {
  const [loading, setLoading] = useState(false);

  const {login} = useAuth();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: yupResolver(LoginSchema),
  });

  const handleLogin = (data: LoginData) => {
    setLoading(true);
    login(data).then((_) => setLoading(false)).catch((error) => setLoading(false));
  }

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      padding={["10px 15px", "10px 15px", "0px", "0px"]}
      height={["auto", "auto", "100vh", "100vh"]}
      color="white"
      bgGradient={[
        "linear(to-b, purple.800 65%, white 35%)",
        "linear(to-b, purple.800 65%, white 35%)",
        "linear(to-r, purple.800 65%, white 35% )",
        "linear(to-r, purple.800 65%, white 35% )",
      ]}
    >
      <Flex
        w={["100%", "100%", "90%", "65%"]}
        justifyContent="center"
        flexDirection={["column", "column", "row", "row"]}
        alignItems="center"
        
      >
        <Grid w={["100%", "100%", "50%", "45%"]} paddingRight="100px">
          <Image
            src={LogoDark}
            alt="do-it logo"
            boxSize={["120px", "120px", "150px", "150px"]}
          />
          <Heading mt="4"as="h1">O jeito fácil, grátis</Heading>
          <Text w="300px" mt="4">
            Flexivel e atrativo de gerenciar
            <b> seus projetos em uma unica plataforma.</b>
          </Text>
        </Grid>
        <Grid
          as="form"
          onSubmit={handleSubmit(handleLogin)}
          mt="10"
          w={["100%", "100%", "50%", "50%"]}
          padding="30px 15px"
          border="3px solid"
          borderColor="gray.100"
          bg="white"
          color="gray.900"
        >
          <Heading size="lg">Bem vindo de volta!</Heading>
          <VStack mt="6" spacing="5">
            <Box w="100%">
              <Input
                {...register("email")}
                icon={FaEnvelope}
                label="Email"
                type="email"
                error={errors.email}
                placeholder="Digite seu email"
              />
              {!errors.email && (
                <Text m="1" mt="1" color="gray.300">
                  Exemplo: nome@email.com
                </Text>
              )}
            </Box>
            <Input
              icon={FaLock}
              label="Senha"
              type="password"
              error={errors.password}
              placeholder="Digite sua Senha"
              {...register("passwod")}
            />
          </VStack>
          <VStack mt="4" spacing="5">
            <Button
              isLoading={loading}
              bg="purple.800"
              w="100%"
              color="white"
              borderRadius="8px"
              _hover={{
                background: "purple.900",
              }}
              h="60px"
              type="submit"
            >
              Entrar
            </Button>
            <Text color="gray.400">Ainda não possue uma conta</Text>
            <Button
              bg="gray.100"
              w="100%"
              color="gray.300"
              borderRadius="8px"
              _hover={{
                background: "gray.200",
              }}
              h="60px"
            >
              Cadastrar
            </Button>
          </VStack>
        </Grid>
      </Flex>
    </Flex>
  );
};
