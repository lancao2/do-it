import { Box, Button, Grid, Heading, Text, VStack } from "@chakra-ui/react"
import { DeepMap, FieldError, FieldValues, UseFormRegister } from "react-hook-form";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import {Input} from "../../components/Form/input"

interface RegisterData extends FieldValues {
  email: string;
  password: string;
}

interface RegisterFormProps{
  handleRegister: () => void;
  register: UseFormRegister<RegisterData>;
  errors: Partial<DeepMap<RegisterData, FieldError>>
  loading: boolean;
};




export const RegisterForm = ({handleRegister, register, errors, loading}: RegisterFormProps) => {
  

    return (
        <Grid
          as="form"
          onSubmit={handleRegister}
          mt="10"
          w={["100%", "100%", "45%", "45%"]}
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
                {...register("name")}
                icon={FaUser}
                label="Nome"
                error={errors.name}
                placeholder="Digite seu nome"
              />
            </Box>
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
            <Input
              icon={FaLock}
              label="Corfirmar Senha"
              type="password"
              error={errors.confirm_password}
              placeholder="Confirme sua Senha"
              {...register("confirm_passwod")}
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