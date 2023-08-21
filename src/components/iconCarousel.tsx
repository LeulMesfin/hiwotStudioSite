import React from "react";
import { ReactNode } from 'react';
import Image from "next/image";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box width="500px" height="200px" maxHeight="200">{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
    // bg={useColorModeValue('gray.100', 'gray.800')}
    bg="#FFF7F2"
    boxShadow={'lg'}
    p={8}
    rounded={'xl'}
    align={'center'}
    pos={'relative'}
    minHeight="200px"
    _after={{
      content: `""`,
      w: 0,
      h: 0,
      borderLeft: 'solid transparent',
      borderLeftWidth: 16,
      borderRight: 'solid transparent',
      borderRightWidth: 16,
      borderTop: 'solid',
      borderTopWidth: 16,
      borderTopColor: useColorModeValue('white', 'gray.800'),
      pos: 'absolute',
      bottom: '-16px',
      left: '50%',
      transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={'h3'} fontSize={'2xl'} fontFamily={'Noto Serif Display'} fontWeight={'bold'} color='#C5995C'>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={'center'}
      fontFamily={'Urbanist'}
      color={useColorModeValue('gray.900', 'gray.400')}
      // color="#C5995C"
      fontSize={'sm'}>
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string;
  name: string;
  title: string;
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src}  mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600} color={useColorModeValue('white', 'gray.400')}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('white', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};


function IconCarousel() {
  return (
    <Box className="slider" pb="400px">

      <Box className="slide-track ">
        
        { /* First 6 elements */ }
        <Box className="slide ">
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={{ base: 10, md: 4, lg: 10 }}>
            <Testimonial>
              <TestimonialContent>
                <TestimonialHeading>Very Skilled Stylist!</TestimonialHeading>
                <TestimonialText>
                  Lovely job as always! Was long overdue for something fresh and new and Hiwot made my dreams come true!
                  Very skilled stylist! 
                </TestimonialText>
              </TestimonialContent>
              <TestimonialAvatar
                src={
                  "http://localhost:3000/images/Anna2.png"
                }
                name={'Kayla S.'}
                title={'https://www.yelp.com/biz/hiwotstudio-bethesda'}
              />
            </Testimonial>
          </Stack>
        </Box>

        <Box className="slide">
            <Stack
              direction={{ base: 'column', md: 'row' }}
              spacing={{ base: 10, md: 4, lg: 10 }}>
              <Testimonial>
                <TestimonialContent>
                  <TestimonialHeading>Book today!</TestimonialHeading>
                  <TestimonialText>
                    I've been coming to Hiwot Studios for 7 years now.
                    Has a woman who has natural curly kinky hair, she pays great attention to details while keeping my hair healthy.
                    You won't regret visiting her! Book your appointment today!
                  </TestimonialText>
                </TestimonialContent>
                <TestimonialAvatar
                  src={
                    "http://localhost:3000/images/Britt2.png"
                  }
                  name={'Brittany Bates'}
                  title={'https://www.facebook.com/hiwotstudio/reviews'}
                />
              </Testimonial>
            </Stack>
        </Box>

        <Box className="slide">
            <Stack
              direction={{ base: 'column', md: 'row' }}
              spacing={{ base: 10, md: 4, lg: 10 }}>
              <Testimonial>
                <TestimonialContent>
                  <TestimonialHeading>Amazing!</TestimonialHeading>
                  <TestimonialText>
                    Hiwot is amazing!  
                    She was doing my hair years ago and we lost touch but so happy to be back in her chair.  
                    She is amazing! My hair is healthy and thick again.  I love her!
                  </TestimonialText>
                </TestimonialContent>
                <TestimonialAvatar
                  src={
                    "http://localhost:3000/images/Marlynn2.png"
                  }
                  name={'Marlynn B.'}
                  title={'https://www.yelp.com/biz/hiwotstudio-bethesda'}
                />
              </Testimonial>
            </Stack>
        </Box>
        
        <Box className="slide">
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={{ base: 10, md: 4, lg: 10 }}>
            <Testimonial>
              <TestimonialContent>
                <TestimonialHeading>Reliable, On Time, Amazing</TestimonialHeading>
                <TestimonialText>
                  I have been with Hiwot for almost 20 years. 
                  I won’t go to anyone else. She is reliable, on time and delivers amazing results.
                </TestimonialText>
              </TestimonialContent>
              <TestimonialAvatar
                src={
                  "http://localhost:3000/images/Anna2.png"
                }
                name={'Andrea Orr'}
                title={'https://www.facebook.com/hiwotstudio/reviews'}
              />
            </Testimonial>
          </Stack>
        </Box>

        <Box className="slide">
            <Stack
              direction={{ base: 'column', md: 'row' }}
              spacing={{ base: 10, md: 4, lg: 10 }}>
              <Testimonial>
                <TestimonialContent>
                  <TestimonialHeading>Brings My Hair Back To Life!</TestimonialHeading>
                  <TestimonialText>
                    Hiwot has been cutting my hair since I moved to DC. 
                    She is great, very punctual and my hair always feels great afterwards. 
                    I used to see her in DC, her new location is great. 
                    She knows how to not only manage a natural hair but she brings it back to life.
                  </TestimonialText>
                </TestimonialContent>
                <TestimonialAvatar
                  src={
                    "http://localhost:3000/images/Tefe.png"
                  }
                  name={'Tefesehet M.'}
                  title={'https://www.yelp.com/biz/hiwotstudio-bethesda'}
                />
              </Testimonial>
            </Stack>
        </Box>

        <Box className="slide">
            <Stack
              direction={{ base: 'column', md: 'row' }}
              spacing={{ base: 10, md: 4, lg: 10 }}>
              <Testimonial>
                <TestimonialContent>
                  <TestimonialHeading>Gifted and Knowledgeable</TestimonialHeading>
                  <TestimonialText>
                    Hiwot is gifted and  knowledgeable stylist.
                    Get to her, and you will find her work above your expectations.
                  </TestimonialText>
                </TestimonialContent>
                <TestimonialAvatar
                  src={
                    "http://localhost:3000/images/Marlynn2.png"
                  }
                  name={'Martha Demeke'}
                  title={'https://www.facebook.com/hiwotstudio/reviews'}
                />
              </Testimonial>
            </Stack>
        </Box>

        { /* Duplicate 6 elements */ }
        <Box className="slide ">
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={{ base: 10, md: 4, lg: 10 }}>
            <Testimonial>
              <TestimonialContent>
                <TestimonialHeading>Very Skilled Stylist!</TestimonialHeading>
                <TestimonialText>
                  Lovely job as always! Was long overdue for something fresh and new and Hiwot made my dreams come true!
                  Very skilled stylist! 
                </TestimonialText>
              </TestimonialContent>
              <TestimonialAvatar
                src={
                  "http://localhost:3000/images/Anna2.png"
                }
                name={'Kayla S.'}
                title={'https://www.yelp.com/biz/hiwotstudio-bethesda'}
              />
            </Testimonial>
          </Stack>
        </Box>

        <Box className="slide">
            <Stack
              direction={{ base: 'column', md: 'row' }}
              spacing={{ base: 10, md: 4, lg: 10 }}>
              <Testimonial>
                <TestimonialContent>
                  <TestimonialHeading>Book today!</TestimonialHeading>
                  <TestimonialText>
                    I've been coming to Hiwot Studios for 7 years now.
                    Has a woman who has natural curly kinky hair, she pays great attention to details while keeping my hair healthy.
                    You won't regret visiting her! Book your appointment today!
                  </TestimonialText>
                </TestimonialContent>
                <TestimonialAvatar
                  src={
                    "http://localhost:3000/images/Britt2.png"
                  }
                  name={'Brittany Bates'}
                  title={'https://www.facebook.com/hiwotstudio/reviews'}
                />
              </Testimonial>
            </Stack>
        </Box>

        <Box className="slide">
            <Stack
              direction={{ base: 'column', md: 'row' }}
              spacing={{ base: 10, md: 4, lg: 10 }}>
              <Testimonial>
                <TestimonialContent>
                  <TestimonialHeading>Amazing!</TestimonialHeading>
                  <TestimonialText>
                    Hiwot is amazing!  
                    She was doing my hair years ago and we lost touch but so happy to be back in her chair.  
                    She is amazing! My hair is healthy and thick again.  I love her!
                  </TestimonialText>
                </TestimonialContent>
                <TestimonialAvatar
                  src={
                    "http://localhost:3000/images/Marlynn2.png"
                  }
                  name={'Marlynn B.'}
                  title={'https://www.yelp.com/biz/hiwotstudio-bethesda'}
                />
              </Testimonial>
            </Stack>
        </Box>

        <Box className="slide">
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={{ base: 10, md: 4, lg: 10 }}>
            <Testimonial>
              <TestimonialContent>
              <TestimonialHeading>Reliable, On Time, Amazing</TestimonialHeading>
                <TestimonialText>
                  I have been with Hiwot for almost 20 years. 
                  I won’t go to anyone else. She is reliable, on time and delivers amazing results.
                </TestimonialText>
              </TestimonialContent>
              <TestimonialAvatar
                src={
                  "http://localhost:3000/images/Anna2.png"
                }
                name={'Andrea Orr'}
                title={'https://www.facebook.com/hiwotstudio/reviews'}
              />
            </Testimonial>
          </Stack>
        </Box>

        <Box className="slide">
            <Stack
              direction={{ base: 'column', md: 'row' }}
              spacing={{ base: 10, md: 4, lg: 10 }}>
              <Testimonial>
                <TestimonialContent>
                  <TestimonialHeading>Brings My Hair Back To Life!</TestimonialHeading>
                  <TestimonialText>
                    Hiwot has been cutting my hair since I moved to DC. 
                    She is great, very punctual and my hair always feels great afterwards. 
                    I used to see her in DC, her new location is great. 
                    She knows how to not only manage a natural hair but she brings it back to life.
                  </TestimonialText>
                </TestimonialContent>
                <TestimonialAvatar
                  src={
                    "http://localhost:3000/images/Tefe.png"
                  }
                  name={'Tefesehet M.'}
                  title={'https://www.yelp.com/biz/hiwotstudio-bethesda'}
                />
              </Testimonial>
            </Stack>
        </Box>

        <Box className="slide">
            <Stack
              direction={{ base: 'column', md: 'row' }}
              spacing={{ base: 10, md: 4, lg: 10 }}>
              <Testimonial>
                <TestimonialContent>
                  <TestimonialHeading>Gifted and Knowledgeable</TestimonialHeading>
                  <TestimonialText>
                    Hiwot is gifted and  knowledgeable stylist.
                    Get to her, and you will find her work above your expectations.
                  </TestimonialText>
                </TestimonialContent>
                <TestimonialAvatar
                  src={
                    "http://localhost:3000/images/Marlynn2.png"
                  }
                  name={'Martha Demeke'}
                  title={'https://www.facebook.com/hiwotstudio/reviews'}
                />
              </Testimonial>
            </Stack>
        </Box>

      </Box>

    </Box>
  )
}

export default IconCarousel