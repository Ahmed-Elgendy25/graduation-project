import { Box, Heading, Radio, Text } from 'native-base';
import React, { useEffect, useState } from 'react';
import { mcqQuestions } from '../(components)/questions';
import { router, useNavigation } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';
// import QuestionsComponent from '../(components)/QuestionsComponent';
import { Button } from 'react-native-paper';
import QuestionsComponent from '../(components)/QuestionsComponent';
import CountDown from 'react-native-countdown-component';

const index = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <SafeAreaView>
      <Box
        w={'full'}
        pt={10}
        pb={2}
        position={'absolute'}
        left={0}
        top={0}
        zIndex={50}
        bgColor={'#F19A1A'}
      >
        <CountDown
          size={20}
          until={10}
          onFinish={() => alert('Finished')}
          digitStyle={{
            backgroundColor: '#FFF',
          }}
          digitTxtStyle={{ color: '#F19A1A' }}
          timeLabelStyle={{ color: 'red', fontWeight: 'bold' }}
          separatorStyle={{ color: '#F19A1A' }}
          timeToShow={['H', 'M', 'S']}
          timeLabels={{ m: '', s: '' }} // Provide valid values for the timeLabels prop
          showSeparator
        />
      </Box>
      <ScrollView
        style={{
          marginTop: 50,
        }}
      >
        {mcqQuestions.map((question, i) => {
          const { options } = question;
          return (
            <Box key={i} bgColor={'#F19A1A'}>
              <Heading p={4} size={'xl'} color={'white'}>
                Q{i + 1}
              </Heading>
              <Box p={3} backgroundColor={'white'}>
                <Text fontWeight={'semibold'} fontSize={'2xl'} mb={2} p={3}>
                  {question.question}
                </Text>
                <QuestionsComponent options={options} />
              </Box>
            </Box>
          );
        })}
        <Button
          textColor="white"
          style={{ marginVertical: 10, padding: 5, backgroundColor: '#5f4bdf' }}
          onPress={() => router.navigate('/')}
        >
          Submit
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
