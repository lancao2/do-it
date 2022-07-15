import {Flex,} from "@chakra-ui/react";
import { LoginInfo } from "./loginInfo";
import { LoginForm } from "./loginForm";


export const Login = () => {
  
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
        <LoginInfo/>
        <LoginForm/>
      </Flex>
    </Flex>
  );
};
