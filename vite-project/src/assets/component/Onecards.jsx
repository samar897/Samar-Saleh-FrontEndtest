import {
    Avatar,
    Box,
    Collapse,
    Drawer,
    DrawerContent,
    DrawerOverlay,
    Flex,
    Icon,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    Text,
    useColorModeValue,
    useDisclosure,Card, CardBody, CardFooter, CardHeader,Textarea  , Heading ,Grid, Button, Image 
  } from "@chakra-ui/react";
  import axios from 'axios';
  import { Link } from "react-router-dom";



  import { FaBell, FaClipboardCheck, FaRss } from "react-icons/fa";
  import { useNavigate } from 'react-router-dom';
  import { FiMenu, FiSearch } from "react-icons/fi";
  import { HiCode, HiCollection } from "react-icons/hi";
  import { MdHome, MdKeyboardArrowRight } from "react-icons/md";
  import React,{useEffect,useState} from "react";
  import Cardyoutupe from "./Cardyoutupe";

  
  export default function Onecard(props){

    const [id, setID] = useState("");
    
    const url = `https://64874e11beba629727906d25.mockapi.io/api/image`
   
    useEffect(() => {
       axios.get(url).then(res=>{
       setname(res.data[0].name)
       console.log(res.data[0].img);
       setVideu(res.data[0].img)
       setDis(res.data[0].Dis)
       console.log(res.data);
       
      })
    }, [url])


    const [data , setData] = useState([])
 
    const [search, setSearch] = useState("")
    const [name, setname] = useState("")
    const [Videu, setVideu] = useState("")
    const [Dis, setDis] = useState("")
    const [comment, setComment] = useState('');
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    
    console.log(search);

    const handleCommentChange = (e) => {
        setComment(e.target.value);
      };

    
      const handleSaveClick = () => {
        axios.post('https://64874e11beba629727906d25.mockapi.io/api/Login', {
          comment,
        });
       
        
      };


    
    const handleDislikeClick = (commentId) => {
        axios.put('https://64874e11beba629727906d25.mockapi.io/api/Login' + commentId, {
          dislikes: dislikes + 1,
        });
    
        setDislikes(dislikes + 1);
        setLikes(likes - 1);
      };
    
    
      const handleLikeClick = () => {
       
        setLikes(likes + 1);
      };
    

    const [showMore, setShowMore] = useState(false);

  
     console.log(search);
     useEffect(() => {
         if (!localStorage.getItem('token')) {
          window.location.href = '/';
         }
      }, []);


      useEffect(()=>{
        console.log(localStorage.getItem("id"));
        setID(localStorage.getItem("id"));
          },[])
        
     


    const sidebar = useDisclosure();

    const color = useColorModeValue("gray.600", "gray.300");
  
    const NavItem = (props) => {
      const { icon, children, ...rest } = props;
      return (
        <Flex
          align="center"
          px="4"
          pl="4"
          py="3"
          cursor="pointer"
          color="inherit"
          _dark={{ color: "gray.400" }}
          _hover={{
            bg: "#0F0F0F",
            _dark: { bg: "gray.900" },
            color: "gray.900",
          }}
          role="group"
          fontWeight="semibold"
          transition=".15s ease"
          {...rest}
        >
          {icon && (
            <Icon
              mx="2"
              boxSize="4"
              _groupHover={{
                color: color,
              }}
              as={icon}
            />
          )}
          {children}
        </Flex>
      );
    };
  
    const SidebarContent = (props) => (
      <Box
        as="nav"
        pos="fixed"
        top="0"
        left="0"
        zIndex="sticky"
        h="full"
        pb="10"
        overflowX="hidden"
        overflowY="auto"
        bg="white"
        _dark={{ bg: "gray.800" }}
        border
        color="inherit"
        borderRightWidth="1px"
        w="60"
        {...props}
      >
        <Flex px="4" py="5" align="center">
        
      
        <img src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg"/>
       
        </Flex>
        <Flex
          direction="column"
          as="nav"
          fontSize="sm"
          color="gray.600"
          aria-label="Main Navigation"
        >
        <NavItem icon={MdHome}> <Link to="/HomePage">Home Page</Link></NavItem>
        <NavItem icon={MdHome}> <Link to="https://www.linkedin.com/in/samar-saleh/">Linkedin</Link></NavItem>
        <NavItem icon={HiCollection}><Link to="/Logout">Logout</Link></NavItem>
        <NavItem><Cardyoutupe w={"10px"} h={"1px"}></Cardyoutupe></NavItem>
        <NavItem ><Link to="/LoginPage">Login Page</Link></NavItem>
         
   
        </Flex>
      </Box>
    );
    return (
        <center>
      <Box as="section" bg="#FFFFFF" _dark={{ bg: "gray.700" }} minH="100vh">
        <SidebarContent display={{ base: "none", md: "unset" }} />
        <Drawer
          isOpen={sidebar.isOpen}
          onClose={sidebar.onClose}
          placement="left"
        >
          <DrawerOverlay />
          <DrawerContent>
            <SidebarContent w="full" borderRight="none" />
          </DrawerContent>
        </Drawer>
        <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
          <Flex
            as="header"
            align="center"
            justify="space-between"
            w="full"
            px="4"
            bg="white"
            _dark={{ bg: "gray.800" }}
            borderBottomWidth="1px"
            color="inherit"
            h="14"
          >
            <IconButton
              aria-label="Menu"
              display={{ base: "inline-flex", md: "none" }}
              onClick={sidebar.onOpen}
              icon={<FiMenu />}
              size="sm"
            />
          

 
            <Flex align="center">
              <Icon color="gray.500" as={FaBell} cursor="pointer" />
              <Avatar
                ml="4"
                size="sm"
                name="anubra266"
                src="#"
                cursor="pointer"
              />
            </Flex>
          </Flex>
  
          <Box as="main" p="4">

          <Flex justifyContent="center" mt="50px">
          <Box>
          
    <Input name='Search' placeholder='Search' id="Idsearch" value={search} onChange={(e) => setSearch(e.target.value)} />
          </Box>
      </Flex>
  

          <Flex justifyContent="center" mt="90px" gap="40px" id="flexCard" >
              <Grid templateColumns='repeat(3, 1fr)' gap={6} id="mygrid">
                  {
                   
                     
                          <div >
                          <center>
                          <Card maxW='md'>
                          <CardHeader>
                            <Flex spacing='4'>
                              <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                <Avatar name='Segun Adebayo' src='#' />
                        
                                <Box>
                                  <Text>{name}</Text>
                                </Box>
                              </Flex>
                            </Flex>
                          </CardHeader>
                          <CardBody>
                         
                          <button className="btn" onClick={() => setShowMore(!showMore)}>     <Image
                          src={Videu}
                          height="300"
                          width="280px"
                          alt='Green double couch with wooden legs'
                          borderRadius='lg'
                          id="theImg"
                      /></button>
                          {showMore ? Dis : `${Dis.substring(0, 15)}`}
                          {showMore ? "Show less" : "Show more"}

                     
                          </CardBody>
                         

                        
                          <CardFooter
                            justify='space-between'
                            flexWrap='wrap'
                            sx={{
                              '& > button': {
                                minW: '136px',
                              },
                            }}
                          >
                          <Box>
                          <Textarea 
                          placeholder="Write a comment..."
                          onChange={handleCommentChange}
                          value={comment}
                        />
                        <Button onClick={handleSaveClick}>Save</Button>
                        <Button onClick={handleLikeClick}>Like</Button>
                        <Button onClick={handleDislikeClick}>Dislike</Button>
                        <h4>Likes: {likes}</h4>
                        <h4>dislikes: {dislikes}</h4>
                      </Box>
                          </CardFooter>
                        </Card>
                        </center>
                              <br />
                          </div>

                  
                  }

              </Grid>
          </Flex>

      
     
            <Box />
          </Box>
        </Box>

        <ul>

          {data.map((comment) => (
            <li key={comment.id}>
              {comment.comment}
            </li>
          ))}
        </ul>
   

      </Box>
      </center>
    );
  }
  