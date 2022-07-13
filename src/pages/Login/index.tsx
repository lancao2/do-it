import {
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
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const LoginSchema = yup.object().shape({
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  senha: yup.string().required("Senha obrigatória"),
});

interface LoginData {
  email: string;
  senha: string;
}

export const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  const handleLogin = (data: LoginData) => console.log(data);

  return (
    <Flex
      alignItems="center"
      padding="10px 15px"
      height="100vh"
      color="white"
      bgGradient="linear(to-r, purple.800 65%, white 35% )"
    >
      <Flex
        w="100%"
        justifyContent="center"
        flexDirection="row"
        alignItems="center"
      >
        <Grid w="100%" paddingRight="100px">
          <Image src={LogoDark} alt="do-it logo" boxSize="120px" />
          <Heading as="h1">O jeito fácil, grátis</Heading>
          <Text>
            Flexivel e atrativo de gerenciar
            <b> seus projetos em uma unica plataforma.</b>
          </Text>
        </Grid>
        <Grid
          as="form"
          onSubmit={handleSubmit(handleLogin)}
          mt="4"
          w="50%"
          padding="30px 15px"
          border="3px solid"
          borderColor="gray.100"
          bg="white"
          color="gray.900"
        >
          <Heading size="lg">Bem vindo de volta!</Heading>
          <VStack mt="6" spacing="5">
            <Input
              {...register("email")}
              icon={FaEnvelope}
              label="Email"
              type="email"
              error={errors.email}
              placeholder="Digite seu email"
            />
            <Input
              icon={FaLock}
              label="Senha"
              type="password"
              error={errors.senha}
              placeholder="Digite sua Senha"
              {...register("Senha")}
            />
          </VStack>
          <Button type="submit">Entrar</Button>
        </Grid>
      </Flex>
    </Flex>
  );
};
