import { Box, Button, Grid, Heading, Text, VStack } from "@chakra-ui/react"
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useAuth } from "../../contexts/authContext";
import { FaEnvelope, FaLock } from "react-icons/fa";
import {Input} from "../../components/Form/input"
import * as yup from "yup";

const LoginSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    passwod: yup.string().required("Senha obrigatória"),
  });
  
  interface LoginData extends FieldValues {
    email: string;
    password: string;
  }

export const LoginForm = () => {
    const {login} = useAuth();

    const [loading, setLoading] = useState(false);
  
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<LoginData>({
      resolver: yupResolver(LoginSchema),
    });
  
    const handleLogin = (data: LoginData) => {
      setLoading(true);
      login(data).then((_) => setLoading(false)).catch((error) => setLoading(false));
    }
  

    return (
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
    )
}