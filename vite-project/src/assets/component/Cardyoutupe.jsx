import { ChakraProvider, Box, Card, CardBody, CardFooter, CardHeader ,Avatar , Heading, Text, IconButton ,Grid, ButtonGroup, Button, Image, Flex,Input } from '@chakra-ui/react' 

import React,{ useState,useEffect } from "react";

import { Link, useNavigate } from 'react-router-dom';
import Onecard from './Onecards';

import axios from 'axios';

export default function Cardyoutupe() {

    const [data , setData] = useState([])
 
    const [search, setSearch] = useState("")
    console.log(search);
  

    const [showMore, setShowMore] = useState(false);

    
     const navigat = useNavigate();
     const url = "https://64874e11beba629727906d25.mockapi.io/api/image"
     useEffect(() => {
       axios.get(url).then(res=>{
          setData(res.data);
        // console.log(res.data);
         
       })
     }, [url])

    
     //https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=AIzaSyBPN8Ao0ucrH93TNc1qJPtfd4TkrnfbZ7A

  
     console.log(search);
     useEffect(() => {
         if (!localStorage.getItem('token')) {
          window.location.href = '/';
         }
      }, []);

    return (
        <>

            <ChakraProvider>
                <Flex justifyContent="center" mt="50px">
                    <Box>
                    
                        <Input name='Search' placeholder='Search' id="Idsearch" value={search} onChange={(e) => setSearch(e.target.value)} />
                    </Box>
                </Flex>
                <Flex flexDir='column-reverse' id="containerFlex">

                    <Flex justifyContent="center" mt="90px" gap="40px" id="flexCard" >
                        <Grid templateColumns='repeat(3, 1fr)' gap={6} id="mygrid">
                            {
                                data.filter((item) => {
                                    return search.toLowerCase() === '' ? item :
                                        item.name.toLowerCase().includes(search)
                                }).map((item) => (
                                    <div key={item.id}>
                                    <Card maxW='md'>
                                    <CardHeader>
                                      <Flex spacing='4'>
                                        <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                          <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                                  
                                          <Box>
                                            <Heading size='sm'>Segun Adebayo</Heading>
                                            <Text>Creator, Chakra UI</Text>
                                          </Box>
                                        </Flex>
                                        
                                      </Flex>
                                    </CardHeader>
                                    <CardBody>
                                    
                                    
                                
                                <Link to="/Onecards"><button className="btn" onClick={() => setShowMore(!showMore)}><Image
                                src={item.img}
                                height="300"
                                width="280px"
                                alt='Green double couch with wooden legs'
                                borderRadius='lg'
                                id="theImg"
                            /></button></Link>
                                
                                   
                                      {/*<Text>
                                        With Chakra UI, I wanted to sync the speed of development with the speed
                                        of design. I wanted the developer to be just as excited as the designer to
                                        create a screen.
                                </Text>*/}
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
                                      <Button flex='1' variant='ghost' >
                                        Like
                                      </Button>
                                      <Button flex='1' variant='ghost' >
                                        Comment
                                      </Button>
                                      <Button flex='1' variant='ghost' >
                                        Share
                                      </Button>
                                    </CardFooter>
                                  </Card>

                                        <br />
                                    </div>

                                ))
                            }

                        </Grid>
                    </Flex>
                </Flex>
            </ChakraProvider>
          
        </>
    )
}
