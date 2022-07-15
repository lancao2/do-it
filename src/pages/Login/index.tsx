import { Flex } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useAuth } from "../../contexts/authContext";
import { LoginInfo } from "./loginInfo";
import { LoginForm } from "./loginForm";
import * as yup from "yup";

const LoginSchema = yup.object().shape({
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  passwod: yup.string().required("Senha obrigatória"),
});

interface LoginData extends FieldValues {
  email: string;
  password: string;
}

export const Login = () => {
  const { login } = useAuth();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<LoginData>({
    resolver: yupResolver(LoginSchema),
  });

  const handleLogin = (data: LoginData) => {
    setLoading(true);
    login(data)
      .then((_) => setLoading(false))
      .catch((error) => setLoading(false));
  };

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
        <LoginInfo />
        <LoginForm
          errors={errors}
          handleLogin={handleSubmit(handleLogin)}
          loading={loading}
          register={register}
        />
      </Flex>
    </Flex>
  );
};
