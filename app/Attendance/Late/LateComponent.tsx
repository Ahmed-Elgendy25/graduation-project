import React from 'react';
import { quizzList } from '../../(components)/quiz-list';
import { Box, Flex, VStack, Text, Center, Heading } from 'native-base';
import { Link } from 'expo-router';
import { Pressable, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const LateComponent = () => {
  return (
    <>
      {quizzList.map((quiz) => {
        return (
          <Link
            key={quiz.name}
            push
            href={{
              pathname: '/Attendance/',
              params: { name: quiz.name },
            }}
            disabled={true}
            asChild
          >
            <Pressable>
              <Center>
                <VStack p={'3'}>
                  <Flex
                    direction="row"
                    h={'32'}
                    w={'3/4'}
                    rounded={'3xl'}
                    bgColor={'#d68a18a0'}
                  >
                    <Flex
                      justifyContent={'space-between'}
                      direction="column"
                      h={'full'}
                      p={3}
                    >
                      <Heading size={'lg'} color={'white'}>
                        Compiler Theory
                      </Heading>
                      <Text color={'white'} fontSize={'sm'}>
                        Instructor:
                        <Text fontWeight={'bold'}> DR.Ahmed Emad</Text>
                      </Text>
                    </Flex>
                    <Flex
                      justifyContent={'flex-end'}
                      direction="column"
                      h={'full'}
                      p={3}
                    >
                      <Heading size={'sm'} mt={2} color={'white'}>
                        Attend Date: <Text>{quiz.startDate}</Text>
                      </Heading>
                    </Flex>
                  </Flex>
                </VStack>
              </Center>
            </Pressable>
          </Link>
        );
      })}
    </>
  );
};

export default LateComponent;
