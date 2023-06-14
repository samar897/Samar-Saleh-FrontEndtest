import React,{ useState,useEffect } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,Text
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';




const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const LoginPage = () => {

const [data , setData] = React.useState([])

const [password , setpassword]=React.useState("")
const [email , setemail]=React.useState("")
const [name , setname]=React.useState("")




const navigat = useNavigate()
    const url = "https://64874e11beba629727906d25.mockapi.io/api/Login"
     React. useEffect(() => {
      axios.get(url).then(res=>{
      setData(res.data);
      console.log(res.data);
    
      localStorage.setItem("name", res.data.name)
      localStorage.setItem("id", res.data.id)
      localStorage.setItem("token", res.data.id)

      })
  
    }, [url])
    
  const login2 = async()=>{

    data.map((data)=>{
      

     if(password ==  data.password && email ==data.email ){
   
      navigat("/HomePage")
        }
      else{
      alert("password is not correct")
      }
    })
    }


  

   
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
       <img src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png" width={100} height={100}/>
        <Heading color="black">Login</Heading>
        <Text color="black">Sign up with Google</Text>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input type="email" placeholder="email address" onChange={(e) => setemail(e.target.value)} />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password" onChange={(e) => setpassword(e.target.value)}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick} bg="#106EBE">
                      {showPassword ? "Hide" : "Show"} 
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                  <Link>forgot password?</Link>
                </FormHelperText>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
                color={"white"}
                bg="#106EBE"
                onClick={login2}
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box color="black" >
        New to us?{" "}
        <Link color="black" href="#" >
          Sign Up
        </Link>
      </Box>
    </Flex>
  );
};

export default LoginPage;
