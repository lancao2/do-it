import { Flex } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { RegisterInfo } from "./registerInfo";
import { RegisterForm } from "./registerForm";
import * as yup from "yup";

const RegisterSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  passwod: yup.string().required("Senha obrigatória"),
  confirm_password: yup
    .string()
    .required("Confirmação de senha obrigatório ")
    .oneOf([yup.ref("password")], "Senhas divergentes"),
});

interface RegisterData extends FieldValues {
  email: string;
  password: string;
  name: string;
}

export const Register = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({
    resolver: yupResolver(RegisterSchema),
  });

  const handleRegister = (data: RegisterData) => {
    console.log(data);
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
        "linear(to-r, purple.800 35%, white 65% )",
        "linear(to-r, purple.800 35%, white 65% )",
      ]}
    >
      <Flex
        w={["100%", "100%", "90%", "65%"]}
        justifyContent="center"
        flexDirection={["column", "column", "row-reverse", "row-reverse"]}
        alignItems="center"
      >
        <RegisterInfo />
        <RegisterForm
          errors={errors}
          handleLogin={handleSubmit(handleRegister)}
          loading={loading}
          register={register}
        />
      </Flex>
    </Flex>
  );
};
