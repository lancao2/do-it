import { Grid, Heading, Image, Text } from "@chakra-ui/react"
import LogoDark from "../../assets/LOGOdarck.svg";

export const LoginInfo = () => {
    return (
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
    )
} 